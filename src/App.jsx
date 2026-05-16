// Version: V5.1 | Patch applied: Visual Dominance nested context, Hybrid downgrade rule
// formalized, Test 1 evidence requirement added.

import { useState, useRef, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const V5_SYSTEM_PROMPT = `CLAUDEON VISUAL ANALYSIS SYSTEM PROMPT V5 — DUAL-LINEAGE FORENSIC ENGINE
Quarantine Instance — Peter Yuill Crucible Year Archive
Version: V5 | Supersedes V1, V2, V3, and V4

PRIME DIRECTIVE
You are a specialist visual forensics analyst for the Crucible Year archive of Peter Yuill, a Bangkok-based Canadian artist working in sumi ink on East Asian rice papers at large scale. Your sole function is to produce canonical structured analyses of individual paintings from direct image inspection. You have no external context, no archive access, no prior conversation history. You work clean.

THE BONE: JUDGMENT CORE is clinical, verdict-first, and structurally decisive. The rating is determined before any prose is written and locked here. Nothing downstream moves it.
THE FLESH: Descriptive sections capture the physical reality of the object with full phenomenological resolution. This description does not serve the verdict. It serves the object.
You do not celebrate. You do not mourn. Praise vocabulary is prohibited. Precision in the service of physical description is not praise.

DUAL-LINEAGE ARCHITECTURE
This practice operates at the intersection of two non-collapsible lineages:
LINEAGE A: East Asian ink traditions — sumi-e, Chinese ink painting, calligraphic abstraction. Core logic: one-breath irreversibility, conditional arrangement, material surrender, temporal exhaustion, liubai as active void.
LINEAGE B: Western gestural abstraction — Abstract Expressionism, action painting. Core logic: kinetic command, the body as instrument of force, mark as somatic index, structural lock-up through intersecting mass.
These lineages share vocabulary but carry different operational content. This engine declares which lineage a work primarily operates under and applies criteria accordingly.

AUTHORITY MODE DECLARATION — MANDATORY FIRST STEP
COMMAND: Artist's kinetic energy imposes form on the medium. Mark records somatic force.
COLLABORATION: Artist sets conditions; the medium completes the gesture. Co-authorship.
SURRENDER: Artist withdraws agency to allow the medium's own logic to surface.
HYBRID: Two modes simultaneously or in deliberate tension. Declare both modes and zones.

FIVE-TIER EVIDENTIARY STRUCTURE
TIER 1 — RAW OBSERVATION: Direct visible phenomena only. No interpretation.
TIER 1.5 — FORENSIC DECISION RECONSTRUCTION: Inference about sequence, pressure, velocity, hesitation based solely on object evidence. Forensic language required.
TIER 2 — COMPOSITIONAL ANALYSIS: Hierarchy, interval structure, pressure systems, coherence modes.
TIER 3 — PHENOMENOLOGICAL/DURATIONAL READING: How the work behaves over time under sustained looking.
TIER 4 — CONTEXTUAL/BIOGRAPHICAL: STRICTLY OFF-LIMITS in quarantine analysis.

RATING SCALE — AUTHORITY-MODE CONDITIONAL
5: Complete structural necessity under declared authority mode. Every element necessary; none can be added or removed without structural collapse. Opens new territory. Rare.
4: Strong authority under declared mode. Primary gesture commands the field. Redundancy confined to secondary zones only. Gallery-viable.
3: Partial presence. Primary gesture has authority but supplementary material introduces visible negotiation or removable elements. Structurally competent. Not distinctive.
2: Presence compromised. Overwork, visible hesitation in primary zone, or fundamental failure of structural or tonal logic.
1: Material or process failure. Fatal overwork, ink preparation failure, or structural incoherence. Archive-only.

MODE-CONDITIONAL RATING CRITERIA:
COMMAND: Primary evidence is kinetic authority. Does gesture record somatic commitment or negotiation? Failure: hesitation, force interruption, velocity inconsistency.
COLLABORATION: Primary evidence is productive integration of gesture and material-completed form. Failure: rejected material behavior, structural fragmentation from bleed.
SURRENDER: Primary evidence is quality of conditional arrangement. Does restraint produce material authority or timidity? Failure: void reads as incompletion, mark insufficient for structural load.
HYBRID: Rate coherence of tension. Productive tension rates higher than failure to commit to either mode.

HYBRID MODE ADDITIONAL DOWNGRADE RULE (named rule — cite by name when applied):
Applies only when Authority Mode is declared HYBRID. After all zone-level caps have been applied:
- If hybrid tension reads as unresolved conflict: two authority modes compete without structural
  reciprocity, zones do not constitute a unified proposition, no formal argument for their
  relationship is legible in the object: apply one additional downgrade point.
- If hybrid tension reads as constitutive structural feature: modes are in productive activation,
  zones constitute a unified proposition through their difference: no additional downgrade.
Declare which condition applies and cite physical evidence before applying or withholding.
CONDITIONS REQUIRED TO APPLY: Cite at least two of: (a) seam or boundary between zones functions
as material interruption rather than spatial interval; (b) void logic of each zone operates under
incompatible traditions with no bridge element; (c) temporal types of each zone are incompatible
and unreconciled; (d) decorative/structural tests yield split verdicts across zones with no
aggregate resolution. Do not apply on the basis of aesthetic preference for integration.

DOWNGRADE RULES:
- Primary gesture removable: MAX 3
- Secondary gesture only removable; primary intact: MAX 4
- Hesitation in primary gesture: MAX 3
- Hesitation in secondary only; primary clean: MAX 4
- Overwork marker in primary zone: MAX 2
- Overwork marker in secondary zone only; primary clean: MAX 3
- Multiple overwork markers any zones: MAX 2
- Fundamental structural/tonal failure: MAX 2
- Fatal material/process failure: MAX 1
VISUAL DOMINANCE RULE: If a nominally secondary zone covers more than 50% of the visual field,
it is not secondary for downgrade purposes. Treat it as primary zone.

NESTED CONTEXT MODULATION — MULTI-PANEL WORKS: When the Visual Dominance Rule is applied within
a sub-unit of a multi-panel work (a single panel within a diptych, a zone within a triptych),
the rule applies relative to the visual field of that sub-unit only. Double-jeopardy downgrading
is prohibited: an element cannot be penalized as dominant within its panel and then penalized
again because its panel is already a subordinate portion of the total composition.
Procedure: (1) Apply the Visual Dominance Rule within each panel independently. (2) Assess each
panel's relationship to the total composition as a separate step. (3) Apply downgrade rules at
the total-composition level only to failures that operate at that level: seam failure, cross-panel
void incoherence, incompatible temporal registers across panels.

RISK DISAGGREGATION — THREE INDEPENDENT TYPES:
PROCESS-IRREVERSIBILITY: Medium-granted by ink-on-paper. Does not contribute positively unless artist-compounded beyond baseline.
FORMAL-EXTREMITY: Artist-earned. Has work gone past taste, past safety?
DISCURSIVE-STAKES: Has work proposed something the field could reject?

AUTHENTICITY MODES:
EMBODIED-KINESTHETIC: Body's motion is content of mark. Canonical: Pollock, Kline.
DECISIONAL: Authenticity in discipline of choice. Canonical: Reinhardt, Martin.
PHENOMENOLOGICAL-DURATIONAL: Emerges across viewer's sustained looking. Canonical: Soulages, Ryman.
PROCESS-TEMPORAL: Mark records a duration, not an instant. Canonical: Lee Ufan.

RESOLUTION MODES:
RESOLUTION-BY-ELIMINATION: All non-necessary elements removed.
RESOLUTION-BY-STRUCTURAL-LOCK: Intersecting forces produce uncollapsible composition.
RESOLUTION-BY-ONE-BREATH-INTEGRITY: Resolved at moment of execution.
RESOLUTION-BY-EXHAUSTION: Mark runs to natural end; temporal completeness.
RESOLUTION-BY-SUSTAINED-ACTIVATION: Sustains productive unresolution across duration. Legitimate success state.
UNRESOLVED: Structural failure state. Distinguish from sustained-activation.

DECORATIVE/STRUCTURAL — THREE INDEPENDENT TESTS:
TEST 1 — SURFACE TRANSFERABILITY: Could the visual content transfer to a decorative surface
(fabric, wallpaper, architectural panel) without loss? If yes: decorative signal. If no:
structural signal. EVIDENCE REQUIREMENT: The verdict must be grounded in a specific physical
feature that would either survive or fail the transfer. Acceptable evidence: scale-dependence
of a forensic trace (ballistic splatter whose evidentiary status requires its substrate context);
substrate-behavior integration (wrinkling or capillary migration constitutive of tonal structure);
gesture-to-surface specificity (a mark whose character is determined by resistance properties
of this particular substrate). Prohibited: stating the conclusion as self-evident. If the
decorative signal rests on pattern-recognition alone, state which specific formal property
produces the pattern verdict and why that property would survive surface migration.
TEST 2 — HIERARCHY PRESENCE: Clear primary/secondary relationships vs uniform distribution? Uniform = decorative signal.
TEST 3 — DISCURSIVE STAKES: Does work occupy a formal position the field could reject? No = decorative signal.
AGGREGATION: Two or three decorative signals = decorative verdict. One decorative with two structural = partial risk.

OUTPUT FORMAT — PRODUCE EXACTLY THIS STRUCTURE:

---
HEADER: 666[NNN] | [[SEC_xxxxxxxx]] | [H]cm x [W]cm | [substrate] | [ink] | [date] | RATING: [N] | V5

AUTHORITY MODE: [mode]
LINEAGE PRIMARY: [lineage]
AUTHENTICITY MODE: [mode(s)]
RESOLUTION MODE: [mode]
TRADITION TRACK: [specific sub-tradition]

JUDGMENT CORE [THE BONE]
[Clinical. Verdict-first. 100-150 words. State authority mode verdict, primary gesture verdict, removal test result, downgrade ruling, compound failure rationale if applicable. No phenomenological language. No praise. Active voice.]

VISUAL IMPRESSION [THE FLESH]
[80-120 words. First encounter with object. Tectonic, atmospheric, gravitational. Mode-appropriate: COMMAND = force terms; SURRENDER = field and interval terms; COLLABORATION = completed gesture system.]

MARK CHARACTER
[100-150 words. Primary gesture geometry, velocity, pressure, tool, loading, edge behavior, substrate response. Tier 1 and 1.5 claims only. Mode-appropriate forensic language.]

SPATIAL DEPTH AND VOID
[80-120 words. LINEAGE A: liubai as active field, yin/yang co-constitution. LINEAGE B: figure/ground, mass vs void tension. HYBRID: declare which void logic applies to which zones.]

INK AND MATERIAL INTERACTION
[80-150 words. Mode-conditional: COMMAND = substrate confirms or denies kinetic commitment; COLLABORATION = co-authorship coherence; SURRENDER = substrate confirms quality of conditional arrangement. Name substrate behavior by type.]

TEMPORAL READING
[80-150 words. Decisive or negotiated. Mode-conditional evidence. Cite physical evidence throughout.]

DECORATIVE/STRUCTURAL VERDICT
Test 1 — Surface Transferability: [verdict + evidence]
Test 2 — Hierarchy Presence: [verdict + evidence]
Test 3 — Discursive Stakes: [verdict + evidence]
Aggregate: [STRUCTURAL / PARTIAL DECORATIVE RISK / DECORATIVE]

SINGULAR OBSERVATION
[1-3 sentences only. One irreplaceable physical event or forensic anomaly. Zero rating impact. Must be true to the image.]

METRICS TABLE:
Authority Mode | [value]
Lineage Primary | [value]
Authenticity Mode | [value]
Resolution Mode | [value]
Risk: Process-Irreversibility | [medium-granted baseline / artist-compounded: specify]
Risk: Formal Extremity | [present/absent + evidence]
Risk: Discursive Stakes | [present/absent + evidence]
Liubai/Void Percentage | [estimated %]
Primary Tool | [type, width, loading, gesture count]
Gestural Velocity | [Low/Medium/High/Mixed]
Somatic Scale | [Wrist/Shoulder/Full torso/Core-body]
Overwork Detected | [True/False — if True: type and zone]
Temporal Type | [Single-event/Single-event with aftermath/Multi-event/Multi-session]
Void Character | [Active/Passive/Corridor/Compressed/Breathing/Split/Dominant]
Dominant Tonal Key | [Binary/Graduated/Climactic/Monochromatic/Atmospheric]
Visual Weight | [Heavy-left/Heavy-right/Heavy-center/Heavy-bottom/Heavy-top/Distributed]
Internal Coherence | [Self-Contained/Conventional/Unresolved]
Decorative/Structural | [STRUCTURAL/PARTIAL DECORATIVE RISK/DECORATIVE]
Hybrid Tension | [Productive/Unresolved/N/A]
---

ERROR GUARDS — APPLY BEFORE OUTPUT:
1. Applied universal criteria instead of mode-conditional? Return and re-evaluate.
2. Penalized SURRENDER mode for economy of marks? Single calibrated gesture in active void is high-stakes achievement.
3. Rewarded COMMAND mode for medium-granted risk without checking artist-compounding?
4. Used East Asian vocabulary without tying to specific visible feature? Remove or ground it.
5. Applied COMMAND mode language to SURRENDER mode work?
6. Rewarded tonal accumulation without checking overwork markers?
7. Framed as "black shapes on white ground"? Rewrite as irreversible physical record.
8. Did I apply the downgrade rules correctly? Distinguish primary gesture zone failures from
secondary zone failures. Apply the Visual Dominance Rule. For multi-panel works, apply the
Nested Context Modulation procedure: do not cascade panel-level dominance rulings into
total-composition calculations. For HYBRID mode works, apply the Hybrid Mode Additional
Downgrade Rule by name and cite the two required physical conditions before applying.
9. Praise vocabulary present? Remove: beautiful, powerful, masterful, impressive, extraordinary, remarkable, stunning, sophisticated, nuanced, evocative, compelling, dynamic, transcendent, breathtaking, spiritual, profound.
10. Descriptive section attempting to revise locked rating? Firewall is absolute.
11. Evidentiary tiers collapsed? Tier 1.5 must be stated as inference. Tier 4 must not appear.
12. Emdashes used? Remove all.

LANGUAGE:
PROHIBITED HEDGES: seems to, might be, perhaps, possibly, interesting, one might argue, could suggest
PROHIBITED: emdashes in any form
PERMITTED FORENSIC: consistent with, evidence of, indicates, confirms, reveals, diagnostic of, reads as, the edge behavior records, the mark structure confirms
PERMITTED PHENOMENOLOGICAL (Register 2 only): tectonic, atmospheric, capillary migration, ink rhyme, tidal, gravitational, pressure, weight, thrust, counter-thrust, mass, force, interval, calibration, field, void, arrest
REQUIRED: Active voice. Every claim grounded in specific visible feature. If not groundable: delete.`;

const getRatingColor = (rating) => {
  const colors = {
    5: "#e8d5b0",
    4: "#b8c9a3",
    3: "#a3b4c9",
    2: "#c9a3a3",
    1: "#8a8a8a",
  };
  return colors[rating] || "#666";
};

const getRatingLabel = (rating) => {
  const labels = {
    5: "TERRITORY OPENED",
    4: "GALLERY-VIABLE",
    3: "PARTIAL PRESENCE",
    2: "COMPROMISED",
    1: "ARCHIVE-ONLY",
  };
  return labels[rating] || "UNRATED";
};

function extractRating(text) {
  const match = text.match(/RATING:\s*([1-5])/i);
  return match ? parseInt(match[1]) : null;
}

function extractField(text, fieldName) {
  const patterns = [
    new RegExp(`\\*\\*${fieldName}\\*\\*[:\\s]+([^\\n]+)`, "i"),
    new RegExp(`${fieldName}[:\\s|]+([^\\n|]+)`, "i"),
  ];
  for (const p of patterns) {
    const m = text.match(p);
    if (m) return m[1].trim().replace(/\\|.*$/, "").trim();
  }
  return null;
}

export default function CrucibleDashboard() {
  const [apiKey, setApiKey] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [briefing, setBriefing] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileRef = useRef();

  const handleFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      const base64 = e.target.result.split(",")[1];
      setImageBase64(base64);
      setAnalysis("");
      setRating(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, [handleFile]);

  const runAnalysis = async () => {
    if (!imageBase64) return;
    if (!apiKey) {
      setError("Please provide a valid Gemini API Key.");
      return;
    }
    
    setIsAnalyzing(true);
    setError(null);
    setAnalysis("");
    setRating(null);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        systemInstruction: V5_SYSTEM_PROMPT,
      });

      const prompt = briefing
          ? `Briefing: ${briefing}\n\nProduce a complete V5 forensic analysis of this work.`
          : "No briefing provided. Analyze the work from image alone. State 'No briefing' in the header metadata fields.";

      const imagePart = {
        inlineData: {
          data: imageBase64,
          mimeType: "image/jpeg",
        },
      };

      const result = await model.generateContent([prompt, imagePart]);
      const response = await result.response;
      const fullText = response.text();

      setAnalysis(fullText);
      setRating(extractRating(fullText));
    } catch (err) {
      setError(err.message || "Analysis failed.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const copyAnalysis = () => {
    navigator.clipboard.writeText(analysis);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setImage(null);
    setImageBase64(null);
    setBriefing("");
    setAnalysis("");
    setRating(null);
    setError(null);
  };

  const authorityMode = extractField(analysis, "Authority Mode");
  const lineage = extractField(analysis, "Lineage Primary");
  const resolution = extractField(analysis, "Resolution Mode");
  const temporalType = extractField(analysis, "Temporal Type");
  const overwork = extractField(analysis, "Overwork Detected");
  const decorative = extractField(analysis, "Decorative\\/Structural");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a08",
      color: "#d4cfc4",
      fontFamily: "'Courier New', Courier, monospace",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2a2a22",
        padding: "24px 32px",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        background: "#0d0d0b",
      }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#6b6b5a", marginBottom: "4px" }}>
            PROJECT 666 — CRUCIBLE YEAR ARCHIVE
          </div>
          <div style={{ fontSize: "20px", letterSpacing: "0.08em", color: "#c8c2b4", fontWeight: "400" }}>
            CLAUDEON FORENSIC ENGINE V5
          </div>
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#3d3d30" }}>
          DUAL-LINEAGE // QUARANTINE // GEMINI-1.5-PRO
        </div>
      </div>
      
      {/* API Key Input Row */}
      <div style={{
        padding: "16px 32px",
        borderBottom: "1px solid #1e1e18",
        background: "#0f0f0c",
        display: "flex",
        alignItems: "center",
        gap: "16px"
      }}>
        <label style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#5a5a48" }}>GEMINI API KEY:</label>
        <input 
          type="password" 
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="AIzaSy..."
          style={{
            flex: 1,
            background: "#0a0a08",
            border: "1px solid #222218",
            color: "#b8b2a6",
            padding: "8px 12px",
            fontFamily: "'Courier New', monospace",
            fontSize: "12px",
            outline: "none",
            letterSpacing: "0.05em"
          }}
        />
        <div style={{ fontSize: "9px", color: "#5a5a48", letterSpacing: "0.1em" }}>Stored locally only</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 130px)" }}>

        {/* LEFT PANEL — Input */}
        <div style={{ borderRight: "1px solid #1e1e18", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => !image && fileRef.current.click()}
            style={{
              border: `1px solid ${isDragging ? "#8a7a5a" : "#2a2a20"}`,
              background: isDragging ? "#141410" : "#0f0f0c",
              cursor: image ? "default" : "pointer",
              minHeight: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "all 0.15s ease",
            }}
          >
            {image ? (
              <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <img
                  src={image}
                  alt="Work"
                  style={{ width: "100%", maxHeight: "400px", objectFit: "contain", display: "block" }}
                />
                {rating && (
                  <div style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "#0a0a08",
                    border: `1px solid ${getRatingColor(rating)}`,
                    padding: "8px 14px",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: getRatingColor(rating),
                  }}>
                    {rating} / 5 — {getRatingLabel(rating)}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: "center", color: "#3d3d30" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px", opacity: 0.4 }}>+</div>
                <div style={{ fontSize: "11px", letterSpacing: "0.2em" }}>DROP IMAGE OR CLICK</div>
                <div style={{ fontSize: "10px", marginTop: "6px", letterSpacing: "0.1em", opacity: 0.6 }}>
                  jpg, png, tiff
                </div>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }}
            onChange={(e) => handleFile(e.target.files[0])} />

          {/* Briefing Input */}
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#5a5a48", marginBottom: "8px" }}>
              BRIEFING — IMAGE N: T_[number] | [H]cm x [W]cm | [substrate] | [ink] | [date]
            </div>
            <textarea
              value={briefing}
              onChange={(e) => setBriefing(e.target.value)}
              placeholder="Image 1: T_001 | 120cm x 80cm | S3 | I1 | 2024-03"
              style={{
                width: "100%",
                background: "#0d0d0a",
                border: "1px solid #222218",
                color: "#b8b2a6",
                padding: "12px",
                fontFamily: "'Courier New', monospace",
                fontSize: "12px",
                resize: "vertical",
                minHeight: "72px",
                outline: "none",
                boxSizing: "border-box",
                letterSpacing: "0.03em",
              }}
            />
          </div>

          {/* Controls */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={runAnalysis}
              disabled={!imageBase64 || isAnalyzing}
              style={{
                flex: 1,
                background: isAnalyzing ? "#1a1a14" : (imageBase64 ? "#1e1e16" : "#111110"),
                border: `1px solid ${imageBase64 && !isAnalyzing ? "#4a4a38" : "#222218"}`,
                color: imageBase64 && !isAnalyzing ? "#c8c2b4" : "#3a3a2e",
                padding: "14px",
                fontFamily: "'Courier New', monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
                cursor: imageBase64 && !isAnalyzing ? "pointer" : "not-allowed",
                transition: "all 0.15s ease",
              }}
            >
              {isAnalyzing ? "ANALYZING..." : "RUN V5 ANALYSIS"}
            </button>
            {image && (
              <button onClick={reset} style={{
                background: "transparent",
                border: "1px solid #222218",
                color: "#4a4a38",
                padding: "14px 20px",
                fontFamily: "'Courier New', monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                cursor: "pointer",
              }}>
                CLEAR
              </button>
            )}
          </div>

          {/* Status Indicators */}
          {analysis && !isAnalyzing && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                ["AUTHORITY", authorityMode],
                ["LINEAGE", lineage],
                ["RESOLUTION", resolution],
                ["TEMPORAL", temporalType],
                ["OVERWORK", overwork],
                ["STRUCTURE", decorative],
              ].map(([label, val]) => val && (
                <div key={label} style={{
                  background: "#0d0d0a",
                  border: "1px solid #1e1e18",
                  padding: "8px 10px",
                }}>
                  <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#4a4a38", marginBottom: "3px" }}>{label}</div>
                  <div style={{ fontSize: "10px", color: "#9a9486", letterSpacing: "0.05em" }}>{val}</div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div style={{
              border: "1px solid #4a2020",
              background: "#0f0a0a",
              padding: "12px",
              fontSize: "11px",
              color: "#8a4a4a",
              letterSpacing: "0.05em",
            }}>
              ERROR: {error}
            </div>
          )}
        </div>

        {/* RIGHT PANEL — Analysis Output */}
        <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#5a5a48" }}>
              FORENSIC RECORD — V5
            </div>
            {analysis && (
              <button onClick={copyAnalysis} style={{
                background: "transparent",
                border: "1px solid #2a2a20",
                color: copied ? "#8a9a7a" : "#4a4a38",
                padding: "6px 14px",
                fontFamily: "'Courier New', monospace",
                fontSize: "10px",
                letterSpacing: "0.15em",
                cursor: "pointer",
                transition: "all 0.15s",
              }}>
                {copied ? "COPIED" : "COPY RECORD"}
              </button>
            )}
          </div>

          <div style={{
            flex: 1,
            background: "#0d0d0a",
            border: "1px solid #1e1e18",
            padding: "24px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 180px)",
          }}>
            {isAnalyzing ? (
              <div style={{ color: "#4a4a38", fontSize: "11px", letterSpacing: "0.15em" }}>
                <div style={{ marginBottom: "16px" }}>FORENSIC ANALYSIS RUNNING VIA GEMINI PRO</div>
                <div style={{ opacity: 0.5, fontSize: "10px", lineHeight: "2" }}>
                  {["DECLARING AUTHORITY MODE", "RUNNING REMOVAL TEST", "CHECKING OVERWORK MARKERS",
                    "DISAGGREGATING RISK", "LOCKING RATING", "GENERATING RECORD"].map((step, i) => (
                    <div key={i}>— {step}</div>
                  ))}
                </div>
              </div>
            ) : analysis ? (
              <pre style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: "11px",
                lineHeight: "1.8",
                color: "#b8b2a6",
                margin: 0,
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.02em",
              }}>
                {analysis}
              </pre>
            ) : (
              <div style={{ color: "#2a2a20", fontSize: "11px", letterSpacing: "0.15em", lineHeight: "2.2" }}>
                <div>AWAITING IMAGE INPUT</div>
                <div style={{ marginTop: "24px", fontSize: "10px", opacity: 0.7 }}>
                  <div>— DROP IMAGE INTO LEFT PANEL</div>
                  <div>— ENTER BRIEFING METADATA</div>
                  <div>— RUN V5 ANALYSIS</div>
                  <div style={{ marginTop: "16px", opacity: 0.5 }}>
                    QUARANTINE PROTOCOL ACTIVE<br />
                    DUAL-LINEAGE ENGINE LOADED<br />
                    AUTHORITY-MODE CONDITIONAL RATING READY
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
