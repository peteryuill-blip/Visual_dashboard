export default function Summary({ stats, outputs, onBack, onViewOutput }) {
  const downloadAll = () => {
    // Basic download all by clicking links or simply instructions
    outputs.forEach(output => {
      const blob = new Blob([output.text], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${output.tCode}_V6.1_analysis.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", height: "100vh", background: "#080008", color: "#F5F0E8", boxSizing: "border-box" }}>
      <h2 style={{ margin: "0 0 20px 0", fontSize: "18px", textAlign: "center", color: "#C5A059" }}>
        BATCH COMPLETE
      </h2>

      <div style={{ background: "#000", border: "1px solid #4A0404", padding: "16px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <span>COMPLETED:</span>
          <span style={{ color: "#4A7C6F", fontWeight: "bold" }}>{stats.completed}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <span>ERRORS:</span>
          <span style={{ color: "#ff4444", fontWeight: "bold" }}>{stats.errors}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <span>TOTAL TOKENS:</span>
          <span>{stats.tokens}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>EST COST:</span>
          <span style={{ color: "#C5A059" }}>${stats.cost.toFixed(4)}</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", borderTop: "1px solid #4A0404", paddingTop: "16px", marginBottom: "16px" }}>
        <h3 style={{ fontSize: "14px", color: "#C5A059", margin: "0 0 12px 0" }}>OUTPUTS</h3>
        {outputs.map((out, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", borderBottom: "1px solid #222" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px" }}>{out.tCode}</span>
            <div style={{ display: "flex", gap: "8px" }}>
                <button
                onClick={() => onViewOutput(out)}
                style={{ background: "transparent", color: "#C5A059", border: "1px solid #C5A059", padding: "6px 12px", fontSize: "10px" }}
                >
                VIEW
                </button>
                <button
                onClick={() => {
                    const blob = new Blob([out.text], { type: 'text/markdown' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${out.tCode}_V6.1_analysis.md`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }}
                style={{ background: "transparent", color: "#4A7C6F", border: "1px solid #4A7C6F", padding: "6px 12px", fontSize: "10px" }}
                >
                DOWNLOAD
                </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={downloadAll}
          style={{ flex: 1, background: "#4A7C6F", color: "#000", border: "none", padding: "16px", fontSize: "14px", fontWeight: "bold" }}
        >
          DOWNLOAD ALL
        </button>
        <button
          onClick={onBack}
          style={{ flex: 1, background: "#6B1A24", color: "#F5F0E8", border: "none", padding: "16px", fontSize: "14px", fontWeight: "bold" }}
        >
          BACK TO QUEUE
        </button>
      </div>
    </div>
  );
}
