import { extractTCode } from '../lib/csv';
import { memo } from 'react';

const getStatusColor = (status) => {
  switch(status) {
    case 'PENDING': return '#888';
    case 'READY': return '#C5A059';
    case 'RUNNING': return '#6B1A24';
    case 'DONE': return '#4A7C6F';
    case 'ERROR': return '#ff4444';
    case 'NO METADATA': return '#4A0404';
    default: return '#888';
  }
};

// Optimization: Wrap QueueItem in React.memo() to prevent unnecessary O(n) re-renders
// Performance impact: Eliminates UI lag and DOM rebuilding whenever images are loaded or updated.
const QueueItem = memo(({ img, onImageClick }) => (
  <div
    onClick={() => onImageClick(img.id)}
    style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px", borderBottom: "1px solid #222", background: "#000" }}
  >
    <img src={img.preview} alt="" loading="lazy" style={{ width: "60px", height: "60px", objectFit: "cover", border: "1px solid #4A0404" }} />
    <div style={{ flex: 1 }}>
      <div style={{ color: "#F5F0E8", fontSize: "14px", fontFamily: "'JetBrains Mono', monospace" }}>{img.tCode}</div>
    </div>
    <div style={{ color: getStatusColor(img.status), fontSize: "10px", fontWeight: "bold" }}>
      {img.status}
    </div>
  </div>
));

export default function Queue({
  images,
  setImages,
  csvData,
  setCsvData,
  onRun,
  canRun,
  onImageClick,
  onOpenSettings
}) {
  const handleImagesSelect = (e) => {
    const files = Array.from(e.target.files);

    // File size validation logic
    const validFiles = [];
    for (const f of files) {
      if (f.size > 5 * 1024 * 1024) { // > 5MB
        const proceed = window.confirm(`File ${f.name} is larger than 5MB. Proceed anyway?`);
        if (!proceed) {
          continue; // Skip this file
        }
      }
      validFiles.push(f);
    }

    // Create a map for O(1) lookups instead of O(n) Array.find
    const csvDataMap = csvData ? new Map(csvData.map(r => [r.t_code, r])) : null;

    const newImages = validFiles.map(f => {
      const tCode = extractTCode(f.name);

      // Match with CSV if available
      let metadata = {};
      let status = "PENDING";

      if (tCode && csvDataMap) {
        const row = csvDataMap.get(tCode);
        if (row) {
          metadata = row;
          status = "READY";
        } else {
          status = "NO METADATA";
        }
      } else if (!tCode) {
         status = "NO METADATA";
      }

      return {
        id: Math.random().toString(36).substr(2, 9),
        file: f,
        name: f.name,
        tCode: tCode || "UNKNOWN",
        status,
        metadata,
        preview: URL.createObjectURL(f)
      };
    });
    setImages(prev => [...prev, ...newImages]);
  };

  const handleCsvSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // We pass the file to the parent so it can use parseCSV
    // but we need to do it cleanly. For now let's just trigger a callback.
    setCsvData(file); // Parent handles parsing
  };

  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px", height: "100vh", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: "18px", color: "#F5F0E8" }}>NEON SIGNS V6.1</h1>
        <button onClick={onOpenSettings} style={{ background: "transparent", border: "none", fontSize: "20px", color: "#C5A059" }}>⚙️</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label style={{ background: "#000", border: "1px solid #4A0404", color: "#F5F0E8", padding: "16px", textAlign: "center", display: "block" }}>
          SELECT IMAGES
          <input type="file" multiple accept="image/*" onChange={handleImagesSelect} style={{ display: "none" }} />
        </label>

        <label style={{ background: "#000", border: "1px solid #4A0404", color: "#F5F0E8", padding: "16px", textAlign: "center", display: "block" }}>
          SELECT CSV
          <input type="file" accept=".csv" onChange={handleCsvSelect} style={{ display: "none" }} />
        </label>
      </div>

      <div style={{ flex: 1, overflowY: "auto", borderTop: "1px solid #4A0404", paddingTop: "16px" }}>
        {images.map(img => (
          <QueueItem key={img.id} img={img} onImageClick={onImageClick} />
        ))}
      </div>

      <button
        onClick={onRun}
        disabled={!canRun}
        style={{
          background: canRun ? "#6B1A24" : "#222",
          color: canRun ? "#F5F0E8" : "#666",
          border: "none",
          padding: "20px",
          fontSize: "16px",
          fontWeight: "bold",
          position: "sticky",
          bottom: 0
        }}
      >
        RUN ANALYSIS
      </button>
    </div>
  );
}
