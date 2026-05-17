export default function RunProgress({
  total,
  current,
  currentImage,
  onCancel,
  stats,
  elapsedTime
}) {
  const progress = (current / total) * 100;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", height: "100vh", background: "#080008", color: "#F5F0E8", boxSizing: "border-box" }}>
      <h2 style={{ margin: "0 0 20px 0", fontSize: "18px", textAlign: "center", color: "#C5A059" }}>
        RUNNING {current} OF {total}
      </h2>

      <div style={{ height: "4px", background: "#222", marginBottom: "20px" }}>
        <div style={{ height: "100%", background: "#6B1A24", width: `${progress}%`, transition: "width 0.3s" }}></div>
      </div>

      {currentImage && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <img src={currentImage.preview} alt="" style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain", border: "1px solid #4A0404" }} />
          <div style={{ marginTop: "16px", fontFamily: "'JetBrains Mono', monospace", fontSize: "14px" }}>
            {currentImage.tCode}
          </div>
          <div style={{ marginTop: "8px", color: "#C5A059", fontSize: "12px", animation: "pulse 1.5s infinite" }}>
            ANALYZING...
          </div>
        </div>
      )}

      <div style={{ borderTop: "1px solid #4A0404", paddingTop: "16px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "12px", color: "#888" }}>
          <span>COMPLETED: {stats.completed}</span>
          <span>ERRORS: {stats.errors}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#888" }}>
          <span>TOKENS: {stats.tokens}</span>
          <span>EST COST: ${stats.cost.toFixed(4)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#888", marginTop: "8px" }}>
          <span>TIME ELAPSED:</span>
          <span>{formatTime(elapsedTime)}</span>
        </div>
      </div>

      <button
        onClick={onCancel}
        style={{ width: "100%", background: "#000", color: "#ff4444", border: "1px solid #ff4444", padding: "16px", fontSize: "14px" }}
      >
        CANCEL AFTER CURRENT
      </button>

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
