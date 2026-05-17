import { useState } from 'react';

export default function ImageDetail({ image, onUpdate, onProcess, onBack }) {
  const [metadata, setMetadata] = useState(image.metadata || {});

  const handleChange = (key, value) => {
    const newMeta = { ...metadata, [key]: value };
    setMetadata(newMeta);
    onUpdate(image.id, newMeta);
  };

  const fields = ["t_code", "week", "height_cm", "width_cm", "substrate", "ink", "date", "sub_type", "disposition"];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#080008", color: "#F5F0E8" }}>
      <div style={{ padding: "16px", display: "flex", alignItems: "center", borderBottom: "1px solid #4A0404" }}>
        <button onClick={onBack} style={{ background: "transparent", border: "none", color: "#C5A059", fontSize: "24px", marginRight: "16px" }}>←</button>
        <h2 style={{ margin: 0, fontSize: "16px" }}>{image.tCode}</h2>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <img src={image.preview} alt="" style={{ width: "100%", maxHeight: "300px", objectFit: "contain", background: "#000" }} />

        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {fields.map(f => (
            <div key={f}>
              <label style={{ display: "block", color: "#C5A059", fontSize: "12px", marginBottom: "4px" }}>{f.toUpperCase()}</label>
              <input
                type="text"
                value={metadata[f] || ""}
                onChange={(e) => handleChange(f, e.target.value)}
                readOnly={f === "t_code"}
                style={{
                  width: "100%",
                  background: f === "t_code" ? "#111" : "#000",
                  border: "1px solid #4A0404",
                  color: "#F5F0E8",
                  padding: "10px",
                  boxSizing: "border-box",
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px", borderTop: "1px solid #4A0404" }}>
        <button
          onClick={() => onProcess(image.id)}
          style={{ width: "100%", background: "#6B1A24", color: "#F5F0E8", border: "none", padding: "16px", fontSize: "14px", fontWeight: "bold" }}
        >
          PROCESS THIS IMAGE
        </button>
      </div>
    </div>
  );
}
