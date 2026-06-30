import { useState, useEffect, useRef, useCallback } from 'react';
import Queue from './components/Queue';
import Settings from './components/Settings';
import ImageDetail from './components/ImageDetail';
import RunProgress from './components/RunProgress';
import Summary from './components/Summary';
import OutputReview from './components/OutputReview';
import { parseCSV, formatBriefing } from './lib/csv';
import { analyzeImage, delay } from './api/anthropic';

export default function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem('anthropicApiKey') || '');
  const [manualMode, setManualMode] = useState(false);
  const [autoDownload, setAutoDownload] = useState(true);

  const [systemPrompt, setSystemPrompt] = useState('');
  const [promptVersion, setPromptVersion] = useState('');

  const [images, setImages] = useState([]);
  const [csvData, setCsvData] = useState(null);

  // screens: 'QUEUE', 'SETTINGS', 'DETAIL', 'RUNNING', 'SUMMARY', 'REVIEW'
  const [screen, setScreen] = useState('QUEUE');
  const [selectedImageId, setSelectedImageId] = useState(null);

  const [runState, setRunState] = useState({
    queue: [],
    currentIndex: 0,
    stats: { completed: 0, errors: 0, tokens: 0, cost: 0 },
    cancelRequested: false,
    outputs: [] // Store outputs for summary screen
  });

  const [elapsedTime, setElapsedTime] = useState(0);

  const [reviewOutput, setReviewOutput] = useState(null);

  useEffect(() => {
    localStorage.setItem('anthropicApiKey', apiKey);
  }, [apiKey]);

  const loadPrompt = async () => {
    try {
      const res = await fetch('/prompts/CY_V6_1_VISUAL_ANALYSIS_ENGINE.md');
      if (!res.ok) throw new Error("Failed to load prompt");
      const text = await res.text();
      setSystemPrompt(text);

      const match = text.match(/# (.*?)\n/);
      if (match) setPromptVersion(match[1]);
      else setPromptVersion("Unknown Version");
    } catch (e) {
      alert("Error loading prompt: " + e.message);
    }
  };

  useEffect(() => {
    loadPrompt();
  }, []);

  useEffect(() => {
    let timer;
    if (screen === 'RUNNING') {
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [screen]);

  const handleCsvFile = async (file) => {
    try {
      const data = await parseCSV(file);
      setCsvData(data);

      // Create a map for O(1) lookups instead of O(n) Array.find
      const dataMap = new Map(data.map(r => [r.t_code, r]));

      setImages(prev => prev.map(img => {
        if (img.tCode && data) {
          const row = dataMap.get(img.tCode);
          if (row) {
            return { ...img, metadata: row, status: 'READY' };
          } else {
            return { ...img, status: 'NO METADATA' };
          }
        }
        return img;
      }));
    } catch (e) {
      alert(e.message);
    }
  };

  const updateImageMetadata = (id, metadata) => {
    setImages(prev => prev.map(img => {
      if (img.id === id) {
        return { ...img, metadata, status: 'READY' };
      }
      return img;
    }));
  };

  const downloadMarkdown = (content, tCode) => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tCode}_V6.1_analysis.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const calculateCost = (usage) => {
    let cost = 0;
    cost += (usage.cacheCreationInputTokens / 1000000) * 3.75;
    cost += (usage.cacheReadInputTokens / 1000000) * 0.30;
    cost += (usage.inputTokens / 1000000) * 3.0;
    cost += (usage.outputTokens / 1000000) * 15.0;
    return cost;
  };

  const isRunningRef = useRef(false);
  const cancelRef = useRef(false);

  const processBatch = async (batchImages) => {
    if (!systemPrompt) {
      alert("System prompt not loaded!");
      return;
    }
    if (isRunningRef.current) return;
    
    setScreen('RUNNING');
    setElapsedTime(0);
    setRunState({
      queue: batchImages,
      currentIndex: 0,
      stats: { completed: 0, errors: 0, tokens: 0, cost: 0 },
      cancelRequested: false,
      outputs: []
    });

    isRunningRef.current = true;
    cancelRef.current = false;

    let currentStats = { completed: 0, errors: 0, tokens: 0, cost: 0 };
    let currentOutputs = [];

    for (let i = 0; i < batchImages.length; i++) {
      if (cancelRef.current) break;

      setRunState(prev => ({ ...prev, currentIndex: i }));

      const img = batchImages[i];
      setImages(prev => prev.map(imgItem => imgItem.id === img.id ? { ...imgItem, status: 'RUNNING' } : imgItem));

      try {
        const briefingText = formatBriefing(1, img.tCode, img.metadata);
        const result = await analyzeImage(apiKey, systemPrompt, img.file, briefingText);

        const newCost = calculateCost(result.usage);

        setImages(prev => prev.map(imgItem => imgItem.id === img.id ? { ...imgItem, status: 'DONE' } : imgItem));

        if (autoDownload) {
          downloadMarkdown(result.text, img.tCode);
        }

        currentStats.completed += 1;
        currentStats.tokens += result.usage.inputTokens + result.usage.outputTokens;
        currentStats.cost += newCost;

        currentOutputs.push({ tCode: img.tCode, text: result.text, image: img });

        setRunState(prev => ({
          ...prev,
          stats: { ...currentStats },
          outputs: [...currentOutputs]
        }));

        await delay(1000); // Wait 1 sec before next call

      } catch (error) {
        console.error(error);
        if (error.message.includes("401") || error.message.includes("invalid x-api-key")) {
            alert("Invalid API key. Please check your settings.");
            setScreen('SETTINGS');
            isRunningRef.current = false;
            return;
        }

        setImages(prev => prev.map(imgItem => imgItem.id === img.id ? { ...imgItem, status: 'ERROR' } : imgItem));
        currentStats.errors += 1;
        setRunState(prev => ({
          ...prev,
          stats: { ...currentStats }
        }));
        await delay(1000);
      }
    }

    isRunningRef.current = false;
    setScreen('SUMMARY');
  };

  const handleCancelRun = () => {
    cancelRef.current = true;
    setRunState(prev => ({ ...prev, cancelRequested: true }));
  };

  const viewOutputReview = (output) => {
    setReviewOutput(output);
    setScreen('REVIEW');
  };

  const handleImageClick = useCallback((id) => {
    setSelectedImageId(id);
    setScreen('DETAIL');
  }, []);

  if (screen === 'SETTINGS') {
    return <Settings
      apiKey={apiKey} setApiKey={setApiKey}
      manualMode={manualMode} setManualMode={setManualMode}
      autoDownload={autoDownload} setAutoDownload={setAutoDownload}
      promptVersion={promptVersion} reloadPrompt={loadPrompt}
      onClose={() => setScreen('QUEUE')}
    />;
  }

  if (screen === 'DETAIL') {
    const image = images.find(i => i.id === selectedImageId);
    return <ImageDetail
      image={image}
      onUpdate={updateImageMetadata}
      onProcess={() => processBatch([image])}
      onBack={() => setScreen('QUEUE')}
    />;
  }

  if (screen === 'RUNNING') {
    return <RunProgress
      total={runState.queue.length}
      current={runState.currentIndex + 1}
      currentImage={runState.queue[runState.currentIndex]}
      stats={runState.stats}
      elapsedTime={elapsedTime}
      onCancel={handleCancelRun}
    />;
  }

  if (screen === 'SUMMARY') {
    return <Summary
      stats={runState.stats}
      outputs={runState.outputs}
      onBack={() => setScreen('QUEUE')}
      onViewOutput={viewOutputReview}
    />;
  }

  if (screen === 'REVIEW') {
    return <OutputReview
      outputText={reviewOutput.text}
      image={reviewOutput.image}
      onNext={() => setScreen('SUMMARY')}
      onReRun={() => { alert('Re-run logic can be handled here if needed'); }}
      onDownload={downloadMarkdown}
    />;
  }

  const canRun = images.length > 0 && apiKey && (csvData || manualMode);
  const imagesToRun = images.filter(i => manualMode || i.status === 'READY');

  return (
    <Queue
      images={images}
      setImages={setImages}
      csvData={csvData}
      setCsvData={handleCsvFile}
      canRun={canRun && imagesToRun.length > 0}
      onRun={() => processBatch(imagesToRun)}
      onImageClick={handleImageClick}
      onOpenSettings={() => setScreen('SETTINGS')}
    />
  );
}
