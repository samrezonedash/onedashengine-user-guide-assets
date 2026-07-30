/* guide-primitives.jsx
   Reusable content primitives + small UI mockup illustrations
   for the OneDash User Guide.
   Loaded with Babel; exposes components on window for other files.
*/

const { useState, useEffect, useRef, Fragment } = React;

// ────────────────────────────────────────────────────────────
// Content primitives
// ────────────────────────────────────────────────────────────

function Hint({ type = "info", title, children }) {
  const icons = {
    info: "fa-info",
    success: "fa-check",
    warning: "fa-exclamation",
    danger: "fa-xmark",
    tip: "fa-lightbulb",
  };
  return (
    <div className={`g-hint g-hint--${type}`}>
      <span className="g-hint__icon"><i className={`fa-solid ${icons[type] || icons.info}`} aria-hidden="true"></i></span>
      <div className="g-hint__body">
        {title ? <p><strong>{title}</strong></p> : null}
        {children}
      </div>
    </div>
  );
}

function Steps({ children }) {
  return <ol className="g-steps">{children}</ol>;
}
function Step({ title, children }) {
  return (
    <li>
      <div className="g-steps__body">
        {title ? <strong>{title}</strong> : null}
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </li>
  );
}

function Tabs({ tabs, defaultIndex = 0 }) {
  const [idx, setIdx] = useState(defaultIndex);
  return (
    <div className="g-tabs">
      <div className="g-tabs__nav" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={idx === i}
            className="g-tabs__btn"
            onClick={() => setIdx(i)}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div role="tabpanel">{tabs[idx].body}</div>
    </div>
  );
}

function Cards({ children }) { return <div className="g-cards">{children}</div>; }
function Card({ title, children }) {
  return (
    <div className="g-card">
      <h4 className="g-card__title">{title}</h4>
      <p className="g-card__body">{children}</p>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="g-tbl-wrap">
      <table className="g-tbl">
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocImage({ src, alt, caption, maxWidth, bg }) {
  return (
    <figure style={{
      margin: "24px 0",
      background: bg || "var(--g-card-bg)",
      border: "1px solid var(--g-border)",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "var(--g-shadow-sm)",
    }}>
      <div style={{ background: bg || "var(--g-page-bg)", padding: 16, textAlign: "center" }}>
        <img
          src={src}
          alt={alt || ""}
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: maxWidth || "100%",
            width: "100%",
            height: "auto",
            borderRadius: 6,
          }}
        />
      </div>
      {caption ? (
        <figcaption style={{
          padding: "10px 16px",
          fontSize: 12.5,
          color: "var(--g-fg-3)",
          fontStyle: "italic",
          borderTop: "1px solid var(--g-border)",
          background: "var(--g-card-bg)",
        }}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function IconBadge({ src, alt, size = 64, bg }) {
  // Small inline icon for use inside cards — preserves the original glyph
  return (
    <div style={{
      width: "100%",
      height: size,
      background: bg || "var(--g-page-bg)",
      borderRadius: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      overflow: "hidden",
    }}>
      <img src={src} alt={alt || ""} style={{ maxHeight: size - 16, maxWidth: "85%", height: "auto", width: "auto" }} />
    </div>
  );
}

function Mock({ title, caption, children }) {
  return (
    <figure className="g-mock">
      <div className="g-mock__head">
        <div className="g-mock__head__dots"><span></span><span></span><span></span></div>
        <span style={{ fontWeight: 600, color: "var(--g-fg-2)" }}>{title || "OneDash"}</span>
      </div>
      <div className="g-mock__body">{children}</div>
      {caption ? <figcaption className="g-mock__caption">{caption}</figcaption> : null}
    </figure>
  );
}

// ────────────────────────────────────────────────────────────
// Small named illustrations (SVG/CSS UI mockups, no images)
// Each represents what the original docs had as a screenshot.
// ────────────────────────────────────────────────────────────

function PipelineSteps() {
  // For Welcome to OneDash — "5 steps" pipeline visual
  const steps = [
    { n: 1, t: "Ingest", d: "Raw data in any form" },
    { n: 2, t: "Cleanse", d: "Normalize + enrich" },
    { n: 3, t: "Model", d: "Analytics + ML" },
    { n: 4, t: "Identify", d: "Auto-detect care gaps" },
    { n: 5, t: "Act", d: "Close gaps in OneDash" },
  ];
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 8,
      margin: "28px 0",
      position: "relative",
    }}>
      {steps.map((s, i) => (
        <div key={s.n} style={{
          padding: "16px 14px",
          background: "var(--g-card-bg)",
          border: "1px solid var(--g-border)",
          borderRadius: 10,
          position: "relative",
          textAlign: "center",
        }}>
          <div style={{
            width: 26, height: 26,
            margin: "0 auto 8px",
            borderRadius: 6,
            background: i === 4 ? "var(--g-sky)" : "var(--g-accent-bg)",
            color: i === 4 ? "var(--od-primary-900)" : "var(--g-accent)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--g-mono)", fontWeight: 700, fontSize: 12,
          }}>{s.n}</div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "var(--g-fg-1)" }}>{s.t}</div>
          <div style={{ fontSize: 11.5, color: "var(--g-fg-3)", marginTop: 2 }}>{s.d}</div>
          {i < steps.length - 1 ? (
            <i className="fa-solid fa-chevron-right" style={{
              position: "absolute",
              right: -12, top: "50%",
              transform: "translateY(-50%)",
              fontSize: 9, color: "var(--g-fg-4)",
              background: "var(--g-page-bg)",
              padding: "4px 2px",
              zIndex: 1,
            }} aria-hidden="true"></i>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function PatientJourneyMock() {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (
    <Mock title="Patient · M. Stevens · #00138442" caption="Patient health journey · month details expand on click">
      <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 16 }}>
        <div style={{
          background: "var(--g-page-bg)",
          padding: 14,
          borderRadius: 8,
          fontSize: 12,
          color: "var(--g-fg-2)",
        }}>
          <div style={{ fontWeight: 700, color: "var(--g-fg-1)", fontSize: 14 }}>Marlene Stevens</div>
          <div style={{ color: "var(--g-fg-3)", marginBottom: 10 }}>Age 64 · DOB 4/12/1961</div>
          <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--g-fg-3)", fontWeight: 600, marginBottom: 4 }}>Past Hx</div>
          <div>E11.9 · I10 · E78.5</div>
          <div style={{ marginTop: 10, display: "flex", gap: 4, flexWrap: "wrap" }}>
            {["DM Cohort","Statin Watch"].map(t => (
              <span key={t} style={{ fontSize: 10.5, padding: "2px 7px", background: "var(--g-accent-bg)", color: "var(--g-accent)", borderRadius: 3, fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, fontSize: 12, color: "var(--g-fg-3)" }}>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center", fontWeight: 600 }}>
              <i className="fa-solid fa-chevron-left" style={{ fontSize: 9 }}></i> 2025 <i className="fa-solid fa-chevron-right" style={{ fontSize: 9 }}></i>
            </span>
            <span style={{ display: "inline-flex", gap: 12 }}>
              <span><i className="fa-solid fa-star" style={{ color: "var(--od-warning-500)", fontSize: 10 }}></i> first fill</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                <span style={{ background: "var(--g-accent-bg)", color: "var(--g-accent)", fontSize: 9, fontWeight: 700, padding: "1px 4px", borderRadius: 3 }}>90</span> 90DS
              </span>
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 3 }}>
            {months.map((m, i) => {
              const filled = [0,2,3,5,6,7,9,10].includes(i);
              const highlight = i === 6;
              return (
                <div key={m} style={{
                  padding: "10px 2px",
                  textAlign: "center",
                  fontSize: 10.5,
                  fontWeight: 600,
                  background: highlight ? "var(--g-accent)" : (filled ? "rgba(28,121,174,0.12)" : "var(--g-page-bg)"),
                  color: highlight ? "#FFF" : (filled ? "var(--g-accent)" : "var(--g-fg-3)"),
                  borderRadius: 4,
                  position: "relative",
                }}>
                  {m}
                  {[0,3,7].includes(i) && <i className="fa-solid fa-star" style={{ position: "absolute", top: 1, right: 2, fontSize: 6, color: highlight ? "#FFF" : "var(--od-warning-500)" }}></i>}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 10, padding: 10, background: "var(--g-page-bg)", borderRadius: 6, fontSize: 11.5, color: "var(--g-fg-2)" }}>
            <strong style={{ color: "var(--g-fg-1)" }}>Jul 2025</strong> · Metformin 1000mg (90DS) · Atorvastatin 20mg · 1 outpatient visit
          </div>
        </div>
      </div>
    </Mock>
  );
}

function DashboardMock() {
  return (
    <Mock title="My Dashboard" caption="Customizable widget layout · Profile search anchored top-right">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, gridAutoRows: 84 }}>
        <div style={{ gridColumn: "span 3", gridRow: "span 1", padding: 14, background: "var(--g-card-bg)", border: "1px solid var(--g-border)", borderRadius: 8 }}>
          <div style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g-fg-3)", fontWeight: 700 }}>Open care gaps</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: "var(--g-fg-1)", letterSpacing: "-.02em", marginTop: 2 }}>3,128</div>
          <div style={{ fontSize: 11, color: "var(--od-success-500)", fontWeight: 600 }}>↓ 412 this week</div>
        </div>
        <div style={{ padding: 12, background: "var(--g-accent)", color: "#FFF", borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", opacity: 0.8, fontWeight: 700 }}>Search</div>
          <div style={{ background: "rgba(255,255,255,0.18)", padding: "5px 8px", borderRadius: 5, fontSize: 11, display: "flex", gap: 6, alignItems: "center" }}>
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 10 }}></i> Patient or NPI…
          </div>
        </div>

        <div style={{ gridColumn: "span 2", padding: 12, background: "var(--g-card-bg)", border: "1px solid var(--g-border)", borderRadius: 8 }}>
          <div style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g-fg-3)", fontWeight: 700, marginBottom: 6 }}>Closures by week</div>
          <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 44 }}>
            {[40,52,38,64,72,55,80,68].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? "var(--g-accent)" : "var(--g-accent-bg)", borderRadius: 3 }}></div>
            ))}
          </div>
        </div>
        <div style={{ gridColumn: "span 2", padding: 12, background: "var(--g-card-bg)", border: "1px solid var(--g-border)", borderRadius: 8 }}>
          <div style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g-fg-3)", fontWeight: 700 }}>Recently viewed</div>
          <div style={{ marginTop: 4, fontSize: 11.5, color: "var(--g-fg-2)", display: "flex", flexDirection: "column", gap: 3 }}>
            <div>M. Stevens · DM</div>
            <div>R. Chen · Statin</div>
            <div>T. Okafor · RAS</div>
          </div>
        </div>
      </div>
    </Mock>
  );
}

function AutomationFunnelMock() {
  const steps = [
    { t: "Auto Fax", sub: "PCP", pause: "7d", live: 218 },
    { t: "AI Text", sub: "Member", pause: "5d", live: 142 },
    { t: "AI Call", sub: "Member", pause: "5d", live: 88 },
    { t: "Manual Queue", sub: "Pharmacist", pause: "—", live: 31 },
  ];
  return (
    <Mock title="Automation · Statin Initiation Funnel" caption="Members fall through each step until the care gap closes; remainder is handed to a clinical user">
      <div className="g-funnel">
        {steps.map((s, i) => (
          <Fragment key={i}>
            <div className={"g-funnel__step" + (i === steps.length - 1 ? " g-funnel__step--last" : "")}>
              <div className="g-funnel__step-num">Step {i + 1}</div>
              <div className="g-funnel__step-title">{s.t}</div>
              <div className="g-funnel__step-sub">to {s.sub}</div>
              <div className="g-funnel__step-foot">
                <span className="g-funnel__step-pause">pause {s.pause}</span>
                <span className="g-funnel__step-live">{s.live}</span>
              </div>
            </div>
            {i < steps.length - 1 ? (
              <i className="fa-solid fa-arrow-right-long g-funnel__arrow" aria-hidden="true"></i>
            ) : null}
          </Fragment>
        ))}
      </div>
    </Mock>
  );
}

function PopulationBrowserMock() {
  const filters = [
    { name: "Age", v: "55-75" },
    { name: "Drug Class", v: "Statin" },
    { name: "PDC", v: "< 80%" },
    { name: "Tag", v: "Q3 outreach" },
  ];
  const rows = [
    ["00138442", "M. Stevens", "64", "F", "Atorvastatin 20mg", "72%", "$1,840"],
    ["00138451", "R. Chen", "59", "M", "Rosuvastatin 10mg", "61%", "$2,310"],
    ["00138468", "T. Okafor", "71", "M", "Atorvastatin 40mg", "78%", "$1,520"],
    ["00138472", "L. Patel", "68", "F", "Simvastatin 20mg", "55%", "$2,890"],
  ];
  return (
    <Mock title="Population Browser" caption="Active filters chip-row · drag-reorderable columns · save as tag or filter preset">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
        {filters.map(f => (
          <span key={f.name} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 8px", background: "var(--g-accent-bg)", color: "var(--g-accent)", borderRadius: 4, fontSize: 11.5, fontWeight: 600 }}>
            {f.name}: <strong>{f.v}</strong>
            <i className="fa-solid fa-xmark" style={{ fontSize: 9, opacity: 0.6, marginLeft: 2 }}></i>
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11.5, color: "var(--g-fg-3)" }}>4,128 members</span>
      </div>
      <div style={{ border: "1px solid var(--g-border)", borderRadius: 6, overflow: "hidden", fontSize: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 0.6fr 0.6fr 1.6fr 0.7fr 0.8fr", background: "var(--g-page-bg)", padding: "8px 12px", fontWeight: 700, color: "var(--g-fg-3)", fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", borderBottom: "1px solid var(--g-border)" }}>
          <span>Member ID</span><span>Name</span><span>Age</span><span>Sex</span><span>Medication</span><span>PDC</span><span>Spend YTD</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 0.6fr 0.6fr 1.6fr 0.7fr 0.8fr", padding: "8px 12px", borderBottom: i < rows.length - 1 ? "1px solid var(--g-border)" : "0" }}>
            <span style={{ fontFamily: "var(--g-mono)", color: "var(--g-accent)" }}>{r[0]}</span>
            <span style={{ fontWeight: 600 }}>{r[1]}</span>
            <span>{r[2]}</span><span>{r[3]}</span><span>{r[4]}</span>
            <span style={{ fontWeight: 700, color: parseInt(r[5]) < 70 ? "var(--od-error-500)" : "var(--od-warning-700)" }}>{r[5]}</span>
            <span style={{ fontFamily: "var(--g-mono)" }}>{r[6]}</span>
          </div>
        ))}
      </div>
    </Mock>
  );
}

function CareGapTableMock() {
  const rows = [
    { p: "M. Stevens", id: "00138442", rule: "Statin – DM", priority: "High", status: "In Progress", auto: true },
    { p: "R. Chen", id: "00138451", rule: "Statin Adherence", priority: "Medium", status: "New", auto: false },
    { p: "T. Okafor", id: "00138468", rule: "RAS Adherence", priority: "High", status: "Action Scheduled", auto: true },
  ];
  const statusColor = (s) => ({
    "New": ["var(--g-fg-3)", "var(--g-page-bg)"],
    "In Progress": ["var(--od-warning-700)", "rgba(217,138,12,0.12)"],
    "Action Scheduled": ["var(--g-accent)", "var(--g-accent-bg)"],
  })[s] || ["var(--g-fg-3)", "var(--g-page-bg)"];
  return (
    <Mock title="Care Gaps · Work Queue" caption="Members grouped per row · light-blue tint = in an automation · click a row to act in bulk">
      <div style={{ border: "1px solid var(--g-border)", borderRadius: 6, overflow: "hidden", fontSize: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "24px 1.2fr 1.4fr 0.8fr 1fr 64px", background: "var(--g-page-bg)", padding: "8px 12px", fontWeight: 700, color: "var(--g-fg-3)", fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", borderBottom: "1px solid var(--g-border)" }}>
          <input type="checkbox" disabled style={{ accentColor: "var(--g-accent)" }} />
          <span>Member</span><span>Care Gap</span><span>Priority</span><span>Status</span><span style={{ textAlign: "right" }}>Manage</span>
        </div>
        {rows.map((r, i) => {
          const [col, bg] = statusColor(r.status);
          return (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "24px 1.2fr 1.4fr 0.8fr 1fr 64px",
              padding: "9px 12px",
              borderBottom: i < rows.length - 1 ? "1px solid var(--g-border)" : "0",
              background: r.auto ? "rgba(71,198,255,0.06)" : "transparent",
              alignItems: "center",
            }}>
              <input type="checkbox" disabled style={{ accentColor: "var(--g-accent)" }} />
              <span>
                <div style={{ fontWeight: 600 }}>{r.p}</div>
                <div style={{ fontFamily: "var(--g-mono)", color: "var(--g-fg-3)", fontSize: 10.5 }}>#{r.id}</div>
              </span>
              <span>{r.rule}</span>
              <span><span style={{ fontSize: 10.5, padding: "2px 6px", background: r.priority === "High" ? "rgba(207,49,49,0.12)" : "var(--g-page-bg)", color: r.priority === "High" ? "var(--od-error-500)" : "var(--g-fg-2)", borderRadius: 3, fontWeight: 600 }}>{r.priority}</span></span>
              <span><span style={{ fontSize: 10.5, padding: "2px 6px", background: bg, color: col, borderRadius: 3, fontWeight: 600 }}>{r.status}</span></span>
              <span style={{ textAlign: "right" }}>
                <i className="fa-solid fa-pen-to-square" style={{ color: "var(--g-fg-3)", fontSize: 12 }}></i>
              </span>
            </div>
          );
        })}
      </div>
    </Mock>
  );
}

function AdherenceTrendMock() {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  // Two lines + bars
  const eligible = [62,63,64,65,65,66,67,68,69,70,71,72];
  const intervened = [62,64,67,70,73,76,79,82,84,86,87,88];
  const interventions = [12,18,28,42,55,68,72,65,52,40,28,18];
  const W = 460, H = 180, P = 22;
  const ptsE = eligible.map((v, i) => [P + (i * (W - P*2) / 11), H - P - ((v - 50) / 50) * (H - P*2)]);
  const ptsI = intervened.map((v, i) => [P + (i * (W - P*2) / 11), H - P - ((v - 50) / 50) * (H - P*2)]);
  const maxB = Math.max(...interventions);
  return (
    <Mock title="Quality Outcomes · Statin Adherence" caption="PDC trend lines overlaid with monthly care-gap volume (bars)">
      <svg viewBox={`0 0 ${W} ${H + 24}`} style={{ width: "100%", height: "auto" }} role="img" aria-label="Adherence trend chart">
        {/* gridlines */}
        {[60,70,80,90].map(y => {
          const yy = H - P - ((y - 50) / 50) * (H - P*2);
          return <line key={y} x1={P} x2={W - P} y1={yy} y2={yy} stroke="var(--g-border)" strokeDasharray="2 3" />;
        })}
        {/* bars */}
        {interventions.map((v, i) => {
          const bw = (W - P*2) / 14;
          const bh = (v / maxB) * 60;
          const x = P + (i * (W - P*2) / 11) - bw / 2;
          return <rect key={i} x={x} y={H - P - bh} width={bw} height={bh} fill="var(--g-accent-bg)" />;
        })}
        {/* lines */}
        <polyline fill="none" stroke="var(--g-fg-4)" strokeWidth="1.5" strokeDasharray="4 3" points={ptsE.map(p => p.join(",")).join(" ")} />
        <polyline fill="none" stroke="var(--g-accent)" strokeWidth="2.5" points={ptsI.map(p => p.join(",")).join(" ")} />
        {/* line endpoints */}
        {ptsI.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="var(--g-accent)" />
        ))}
        {/* 80% target */}
        {(() => {
          const y80 = H - P - ((80 - 50) / 50) * (H - P*2);
          return <Fragment>
            <line x1={P} x2={W - P} y1={y80} y2={y80} stroke="var(--od-success-500)" strokeWidth="1" strokeDasharray="2 2" />
            <text x={W - P + 2} y={y80 + 3} fill="var(--od-success-500)" fontSize="9" fontWeight="700">80%</text>
          </Fragment>;
        })()}
        {/* x labels */}
        {months.map((m, i) => (
          <text key={m} x={P + (i * (W - P*2) / 11)} y={H + 2} fill="var(--g-fg-3)" fontSize="9" textAnchor="middle">{m}</text>
        ))}
        {/* legend */}
        <g transform={`translate(${P}, ${H + 14})`}>
          <rect x="0" y="-4" width="8" height="8" fill="var(--g-accent-bg)" />
          <text x="12" y="3" fill="var(--g-fg-3)" fontSize="9">interventions/mo</text>
          <line x1="110" y1="0" x2="124" y2="0" stroke="var(--g-accent)" strokeWidth="2.5" />
          <text x="128" y="3" fill="var(--g-fg-3)" fontSize="9">intervened PDC</text>
          <line x1="220" y1="0" x2="234" y2="0" stroke="var(--g-fg-4)" strokeDasharray="3 2" />
          <text x="238" y="3" fill="var(--g-fg-3)" fontSize="9">all eligible PDC</text>
        </g>
      </svg>
    </Mock>
  );
}

function ClairMock() {
  return (
    <Mock title="Dash AI · Patient Insights" caption="Triggered from a patient page or table row · references attached to every claim">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ padding: 14, background: "linear-gradient(135deg, #0B2A66 0%, #1957D6 100%)", color: "#FFF", borderRadius: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fa-solid fa-sparkles" style={{ fontSize: 13 }}></i>
            </div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700 }}>Dash AI</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Patient Summary</div>
            </div>
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
            64yo F with T2DM (8yr), HTN, hyperlipidemia. Statin adherence has dropped to 72% over last 90d after switch from atorvastatin 40mg → 20mg.
          </div>
          <div style={{ marginTop: 12, fontSize: 10.5, opacity: 0.7, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "2px 6px", borderRadius: 3 }}>FDA</span>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "2px 6px", borderRadius: 3 }}>HEDIS specs</span>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "2px 6px", borderRadius: 3 }}>NIH</span>
          </div>
        </div>
        <div style={{ padding: 14, background: "var(--g-card-bg)", border: "1px solid var(--g-border)", borderRadius: 10 }}>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g-fg-3)", fontWeight: 700, marginBottom: 10 }}>AI MTM · Recommendations</div>
          {[
            { t: "Restore atorva 40mg", d: "Returns adherence trajectory above 80%" },
            { t: "Add ACEi (lisinopril)", d: "Renal protection · within RAS guidelines" },
            { t: "Schedule A1c re-check", d: "Last A1c 8.2% — 3mo follow-up due" },
          ].map((r, i) => (
            <div key={i} style={{ padding: "8px 0", borderBottom: i < 2 ? "1px solid var(--g-border)" : 0, display: "flex", gap: 10, alignItems: "start" }}>
              <i className="fa-solid fa-prescription-bottle-medical" style={{ color: "var(--g-accent)", marginTop: 3, fontSize: 12 }}></i>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "var(--g-fg-1)" }}>{r.t}</div>
                <div style={{ fontSize: 11.5, color: "var(--g-fg-3)", lineHeight: 1.4 }}>{r.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Mock>
  );
}

function OverlapTrendsMock() {
  // Poly-ACH / COB overlap trends bar chart
  const buckets = [
    { range: "1-10", n: 412 },
    { range: "11-20", n: 286 },
    { range: "21-29", n: 138 }, // most actionable
    { range: "30-60", n: 92 },
    { range: "61-90", n: 41 },
    { range: "91+", n: 27 },
  ];
  const max = Math.max(...buckets.map(b => b.n));
  return (
    <Mock title="Poly-ACH · Overlap Days Distribution" caption="Members at 21–29 overlap days are the most actionable cohort — prevent them from entering the measure numerator">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {buckets.map((b) => {
          const actionable = b.range === "21-29";
          return (
            <div key={b.range} style={{ display: "grid", gridTemplateColumns: "70px 1fr 50px", alignItems: "center", gap: 12, fontSize: 12 }}>
              <span style={{ color: "var(--g-fg-2)", fontWeight: 600 }}>{b.range} days</span>
              <div style={{ height: 18, background: "var(--g-page-bg)", borderRadius: 3, overflow: "hidden", position: "relative" }}>
                <div style={{ width: `${(b.n / max) * 100}%`, height: "100%", background: actionable ? "var(--od-warning-500)" : "var(--g-accent)" }}></div>
                {actionable && <span style={{ position: "absolute", right: 8, top: 1, fontSize: 10, fontWeight: 700, color: "var(--od-warning-700)" }}>most actionable</span>}
              </div>
              <span style={{ fontFamily: "var(--g-mono)", fontWeight: 700, textAlign: "right" }}>{b.n}</span>
            </div>
          );
        })}
      </div>
    </Mock>
  );
}

function ReportRowsMock() {
  const reports = [
    { name: "High Utilizers", cat: "Pharmacy", input: false },
    { name: "Stars Adherence Correlation", cat: "Pharmacy", input: true },
    { name: "Care Gaps – Latest Action", cat: "Pharmacy", input: true },
    { name: "Member Spend by LOB", cat: "Financial", input: false },
  ];
  return (
    <Mock title="Reports" caption="Click ▶ Run & Download to export CSV · 1-month lead time for custom report requests">
      <div style={{ border: "1px solid var(--g-border)", borderRadius: 6, overflow: "hidden", fontSize: 12.5 }}>
        {reports.map((r, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 100px 28px 96px", padding: "10px 14px", borderBottom: i < reports.length - 1 ? "1px solid var(--g-border)" : 0, alignItems: "center" }}>
            <span>
              <div style={{ fontWeight: 600 }}>{r.name}</div>
              {r.input && <div style={{ fontSize: 10.5, color: "var(--g-fg-3)", marginTop: 1 }}>Requires date range</div>}
            </span>
            <span style={{ fontSize: 10.5, color: "var(--g-fg-3)", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 700 }}>{r.cat}</span>
            <i className="fa-solid fa-circle-info" style={{ color: "var(--g-fg-4)", fontSize: 12 }}></i>
            <button style={{ background: "var(--g-accent)", color: "#FFF", border: 0, borderRadius: 4, padding: "6px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 5 }}>
              <i className="fa-solid fa-play" style={{ fontSize: 8 }}></i> Run
            </button>
          </div>
        ))}
      </div>
    </Mock>
  );
}

// Release-notes accordion (for OneDash Release Updates)
function Release({ ver, date, defaultOpen, children }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="g-release" {...(open ? { open: "" } : {})}>
      <button className="g-release__head" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="g-release__ver">{ver}</span>
        <span className="g-release__title">{date}</span>
        <span className="g-release__date">{open ? "Hide" : "Show"} notes</span>
        <i className="fa-solid fa-chevron-down g-release__chev"></i>
      </button>
      {open ? <div className="g-release__body">{children}</div> : null}
    </div>
  );
}

// Sidebar mock for OneDash Features overview
function SidebarMock() {
  const items = [
    { i: "fa-table-columns", l: "Dashboard" },
    { i: "fa-users", l: "My Population" },
    { i: "fa-filter", l: "Population Browser" },
    { i: "fa-bullseye", l: "Rules" },
    { i: "fa-bolt", l: "Automations" },
    { i: "fa-clipboard-list", l: "Care Gaps", active: true },
    { i: "fa-chart-line", l: "Outcomes" },
    { i: "fa-file-lines", l: "Reports" },
  ];
  return (
    <div style={{ width: 200, background: "var(--od-primary-900)", padding: "16px 10px", borderRadius: 10, display: "flex", flexDirection: "column", gap: 2 }}>
      <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 700, color: "rgba(255,255,255,0.5)", padding: "4px 8px 8px" }}>OneDash</div>
      {items.map((it, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "7px 10px", borderRadius: 6,
          background: it.active ? "rgba(71,198,255,0.15)" : "transparent",
          color: it.active ? "var(--g-sky)" : "rgba(255,255,255,0.75)",
          fontSize: 12.5, fontWeight: it.active ? 700 : 500,
        }}>
          <i className={`fa-solid ${it.i}`} style={{ fontSize: 12, width: 12 }}></i>
          {it.l}
        </div>
      ))}
    </div>
  );
}

// Expose to window so other Babel scripts can use them
Object.assign(window, {
  Hint, Steps, Step, Tabs, Cards, Card, DataTable, Mock, DocImage, IconBadge,
  PipelineSteps, PatientJourneyMock, DashboardMock, AutomationFunnelMock,
  PopulationBrowserMock, CareGapTableMock, AdherenceTrendMock, ClairMock,
  OverlapTrendsMock, ReportRowsMock, Release, SidebarMock,
});
