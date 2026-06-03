import { useState, useMemo } from 'react';

export default function OutputReview({ outputText, image, onNext, onReRun, onDownload }) {
  const [tab, setTab] = useState('PROSE');

  // ⚡ Bolt: Memoize parsed content to avoid running regexes and substring matching on every tab switch
  const { jsonContent, websiteContent, proseContent } = useMemo(() => {
    // Basic extraction based on markdown headers. Actual parsing might be complex but we can just do simple string splits or just show raw.
    // The prompt usually has a JSON block. Let's find it.
    const jsonMatch = outputText.match(/```json\n([\s\S]*?)\n```/);
    const parsedJsonContent = jsonMatch ? jsonMatch[1] : "No JSON found.";

    // Let's just do a rough split for website
    const parsedWebsiteContent = outputText.includes('The Mark') ? outputText.substring(outputText.indexOf('The Mark')) : "ARCHIVE_ONLY - No website content generated";

    // Raw prose is everything without json
    const parsedProseContent = outputText.replace(/```json\n[\s\S]*?\n```/, '');

    return {
      jsonContent: parsedJsonContent,
      websiteContent: parsedWebsiteContent,
      proseContent: parsedProseContent
    };
  }, [outputText]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#080008", color: "#F5F0E8" }}>
      <div style={{ padding: "16px", borderBottom: "1px solid #4A0404", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0, fontSize: "16px", color: "#4A7C6F" }}>{image.tCode} - DONE</h2>
      </div>

      <div style={{ display: "flex", borderBottom: "1px solid #4A0404" }}>
        {['PROSE', 'DATA', 'WEBSITE'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              background: tab === t ? "#6B1A24" : "transparent",
              color: tab === t ? "#F5F0E8" : "#888",
              border: "none",
              padding: "12px",
              fontSize: "12px"
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px", fontFamily: tab === 'DATA' ? "'JetBrains Mono', monospace" : "Inter, sans-serif", fontSize: "12px", lineHeight: "1.5", whiteSpace: "pre-wrap" }}>
        {tab === 'PROSE' && proseContent}
        {tab === 'DATA' && <pre style={{ margin: 0 }}>{jsonContent}</pre>}
        {tab === 'WEBSITE' && websiteContent}
      </div>

      <div style={{ padding: "16px", borderTop: "1px solid #4A0404", display: "flex", gap: "10px" }}>
        <button onClick={() => onDownload(outputText, image.tCode)} style={{ flex: 2, background: "#4A7C6F", color: "#000", border: "none", padding: "12px", fontWeight: "bold" }}>DOWNLOAD .MD</button>
        <button onClick={onReRun} style={{ flex: 1, background: "#000", color: "#F5F0E8", border: "1px solid #4A0404", padding: "12px" }}>RE-RUN</button>
        <button onClick={onNext} style={{ flex: 1, background: "#6B1A24", color: "#F5F0E8", border: "none", padding: "12px" }}>NEXT</button>
      </div>
    </div>
  );
}
