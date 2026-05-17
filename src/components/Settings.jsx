export default function Settings({
  apiKey,
  setApiKey,
  manualMode,
  setManualMode,
  autoDownload,
  setAutoDownload,
  promptVersion,
  reloadPrompt,
  onClose
}) {
  const testConnection = async () => {
    // Minimal API call to verify key
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 10,
          messages: [{ role: "user", content: "test" }]
        })
      });
      if (res.ok) alert("Connection successful.");
      else alert("Connection failed. Check API key.");
    } catch (e) {
      alert("Connection error: " + e.message);
    }
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", background: "#080008", minHeight: "100vh", color: "#F5F0E8" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0, color: "#C5A059", fontSize: "16px" }}>SETTINGS</h2>
        <button onClick={onClose} style={{ background: "transparent", color: "#F5F0E8", border: "1px solid #4A0404", padding: "8px 16px" }}>CLOSE</button>
      </div>

      <div>
        <label style={{ display: "block", color: "#C5A059", fontSize: "12px", marginBottom: "8px" }}>ANTHROPIC API KEY</label>
        <input
          type="password"
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
          style={{ width: "100%", background: "#000", border: "1px solid #4A0404", color: "#F5F0E8", padding: "12px", boxSizing: "border-box" }}
        />
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button onClick={() => alert("Key stored in localStorage.")} style={{ flex: 1, background: "#6B1A24", color: "#F5F0E8", border: "none", padding: "12px" }}>SAVE KEY</button>
          <button onClick={() => setApiKey("")} style={{ flex: 1, background: "#000", color: "#F5F0E8", border: "1px solid #4A0404", padding: "12px" }}>CLEAR KEY</button>
        </div>
        <button onClick={testConnection} style={{ width: "100%", background: "#000", color: "#C5A059", border: "1px solid #C5A059", padding: "12px", marginTop: "10px" }}>TEST CONNECTION</button>
      </div>

      <div>
        <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#F5F0E8", fontSize: "14px" }}>
          <input type="checkbox" checked={manualMode} onChange={e => setManualMode(e.target.checked)} />
          Manual metadata mode (run without CSV)
        </label>
      </div>

      <div>
        <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#F5F0E8", fontSize: "14px" }}>
          <input type="checkbox" checked={autoDownload} onChange={e => setAutoDownload(e.target.checked)} />
          Auto-download outputs
        </label>
      </div>

      <div style={{ borderTop: "1px solid #4A0404", paddingTop: "20px" }}>
        <div style={{ color: "#C5A059", fontSize: "12px", marginBottom: "8px" }}>CURRENT PROMPT VERSION</div>
        <div style={{ background: "#000", border: "1px solid #4A0404", padding: "12px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
          {promptVersion || "Loading..."}
        </div>
        <button onClick={reloadPrompt} style={{ width: "100%", background: "#000", color: "#F5F0E8", border: "1px solid #4A0404", padding: "12px", marginTop: "10px" }}>RELOAD PROMPT FILE</button>
      </div>
    </div>
  );
}
