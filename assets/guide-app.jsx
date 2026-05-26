/* guide-app.jsx — main shell + routing for the OneDash User Guide */

const { useState, useEffect, useMemo, useRef, useCallback } = React;

// Combine all article files (loaded in order before this script)
const ARTICLES = [].concat(
  window.GUIDE_ARTICLES_1 || [],
  window.GUIDE_ARTICLES_2 || [],
  window.GUIDE_ARTICLES_3 || []
);
const ARTICLE_BY_ID = Object.fromEntries(ARTICLES.map(a => [a.id, a]));

// IA — section structure (matches the original Table of Contents)
const NAV = [
  {
    id: "overview",
    label: "Overview",
    icon: "fa-compass",
    items: ["welcome", "features", "definitions", "release-updates"],
  },
  {
    id: "fundamentals",
    label: "Fundamentals",
    icon: "fa-graduation-cap",
    items: ["new-user-account", "password-reset", "support"],
  },
  {
    id: "product-guide",
    label: "Product · Dashboard",
    icon: "fa-table-columns",
    items: ["my-dashboard"],
  },
  {
    id: "identify",
    label: "Product · Identify",
    icon: "fa-magnifying-glass",
    items: ["my-population", "individual-patient-pages", "individual-provider-pages", "population-browser", "rules"],
  },
  {
    id: "act",
    label: "Product · Act",
    icon: "fa-bolt",
    items: ["care-gaps", "automations"],
  },
  {
    id: "monitor",
    label: "Product · Monitor",
    icon: "fa-chart-line",
    items: ["financial-outcomes", "clinical-outcomes", "quality-outcomes", "care-gap-statistics", "reports"],
  },
];

const FLAT_ORDER = NAV.flatMap(g => g.items);

// ────────────────────────────────────────────────────────────
// Hash routing
// ────────────────────────────────────────────────────────────
function useRoute() {
  const parse = () => {
    const h = window.location.hash.replace(/^#\/?/, "");
    if (!h || h === "" || h === "/") return { page: "index" };
    if (h.startsWith("article/")) {
      const [, id, anchor] = h.split("/");
      return { page: "article", id, anchor };
    }
    if (h.startsWith("search")) return { page: "search" };
    return { page: "index" };
  };
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const on = () => setRoute(parse());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const go = useCallback((to) => {
    window.location.hash = "#/" + to;
  }, []);
  return [route, go];
}

// ────────────────────────────────────────────────────────────
// Tweaks — sidebar style + density
// ────────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "sidebarStyle": "collapsible",
  "density": "comfortable",
  "accent": "blue"
}/*EDITMODE-END*/;

function useTweaks() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  useEffect(() => {
    const onMsg = (e) => {
      const d = e && e.data;
      if (!d) return;
      if (d.type === "__activate_edit_mode") setPanel(true);
      if (d.type === "__deactivate_edit_mode") setPanel(false);
      if (d.type === "__edit_mode_initial_keys" && d.values) setTweaks(t => ({ ...t, ...d.values }));
    };
    window.addEventListener("message", onMsg);
    // Tell host we support tweaks (listener is in place)
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const [panel, setPanel] = useState(false);
  const set = (key, val) => {
    setTweaks(t => {
      const next = { ...t, [key]: val };
      try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: val } }, "*"); } catch (e) {}
      return next;
    });
  };
  const close = () => {
    setPanel(false);
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (e) {}
  };
  return { tweaks, set, panel, close };
}

function TweaksPanel({ tweaks, set, close }) {
  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 1000,
      width: 280, padding: 18,
      background: "#FFF", borderRadius: 14,
      border: "1px solid var(--g-border)",
      boxShadow: "0 24px 48px rgba(1,20,69,0.18), 0 8px 16px rgba(1,20,69,0.08)",
      fontFamily: "var(--od-font-sans)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: "var(--g-fg-1)" }}>Tweaks</div>
        <button onClick={close} style={{ border: 0, background: "transparent", color: "var(--g-fg-3)", cursor: "pointer", fontSize: 14 }}>×</button>
      </div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 700, color: "var(--g-fg-3)", marginBottom: 6 }}>Sidebar style</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[["collapsible", "Collapsible"], ["flat", "Flat"]].map(([v, l]) => (
            <button key={v} onClick={() => set("sidebarStyle", v)}
              style={{
                padding: "8px 10px", border: `1px solid ${tweaks.sidebarStyle === v ? "var(--g-accent)" : "var(--g-border)"}`,
                background: tweaks.sidebarStyle === v ? "var(--g-accent-bg)" : "#FFF",
                color: tweaks.sidebarStyle === v ? "var(--g-accent)" : "var(--g-fg-2)",
                fontSize: 12, fontWeight: 600, borderRadius: 6, cursor: "pointer",
              }}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 700, color: "var(--g-fg-3)", marginBottom: 6 }}>Density</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[["comfortable", "Comfy"], ["compact", "Compact"]].map(([v, l]) => (
            <button key={v} onClick={() => set("density", v)}
              style={{
                padding: "8px 10px", border: `1px solid ${tweaks.density === v ? "var(--g-accent)" : "var(--g-border)"}`,
                background: tweaks.density === v ? "var(--g-accent-bg)" : "#FFF",
                color: tweaks.density === v ? "var(--g-accent)" : "var(--g-fg-2)",
                fontSize: 12, fontWeight: 600, borderRadius: 6, cursor: "pointer",
              }}>{l}</button>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 700, color: "var(--g-fg-3)", marginBottom: 6 }}>Accent</div>
        <div style={{ display: "flex", gap: 6 }}>
          {[
            ["blue", "#1C79AE"],
            ["sky", "#3287B6"],
            ["navy", "#011455"],
          ].map(([v, c]) => (
            <button key={v} onClick={() => set("accent", v)} title={v}
              style={{
                width: 30, height: 30, borderRadius: 8,
                background: c,
                border: tweaks.accent === v ? `2px solid var(--g-fg-1)` : "2px solid transparent",
                boxShadow: tweaks.accent === v ? "0 0 0 2px #FFF inset" : "none",
                cursor: "pointer",
              }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Search (client-side, simple substring + ranked)
// ────────────────────────────────────────────────────────────
function articleText(a) {
  // Strip JSX into plain text for matching
  const parts = [a.title, a.desc || ""];
  const walk = (node) => {
    if (node == null || typeof node === "boolean") return;
    if (typeof node === "string" || typeof node === "number") { parts.push(String(node)); return; }
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (node.props && node.props.children) walk(node.props.children);
  };
  a.sections.forEach(s => { parts.push(s.title); walk(s.body); });
  return parts.join(" ").replace(/\s+/g, " ");
}
const TEXT_CACHE = new Map();
function getText(a) {
  if (!TEXT_CACHE.has(a.id)) TEXT_CACHE.set(a.id, articleText(a));
  return TEXT_CACHE.get(a.id);
}

function searchAll(q) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  const out = [];
  for (const a of ARTICLES) {
    const text = getText(a).toLowerCase();
    const titleHit = a.title.toLowerCase().includes(needle);
    const descHit = (a.desc || "").toLowerCase().includes(needle);
    const bodyHit = text.includes(needle);
    if (!titleHit && !descHit && !bodyHit) continue;
    let snippet = "";
    if (bodyHit) {
      const idx = text.indexOf(needle);
      const start = Math.max(0, idx - 60);
      const end = Math.min(text.length, idx + needle.length + 100);
      snippet = (start > 0 ? "…" : "") + getText(a).slice(start, end) + (end < text.length ? "…" : "");
    } else {
      snippet = (a.desc || "").slice(0, 160);
    }
    const score = (titleHit ? 100 : 0) + (descHit ? 30 : 0) + (bodyHit ? 1 : 0);
    out.push({ article: a, snippet, score });
  }
  out.sort((a, b) => b.score - a.score);
  return out.slice(0, 25);
}

function highlight(text, needle) {
  if (!needle) return text;
  const i = text.toLowerCase().indexOf(needle.toLowerCase());
  if (i < 0) return text;
  return <>
    {text.slice(0, i)}
    <mark>{text.slice(i, i + needle.length)}</mark>
    {text.slice(i + needle.length)}
  </>;
}

// ────────────────────────────────────────────────────────────
// Top bar
// ────────────────────────────────────────────────────────────
function Topbar() {
  return (
    <header className="g-topbar">
      <div className="g-topbar__inner">
        <a className="g-topbar__brand" href="index.html">
          <img src={(window.UG_ASSET_BASE || "") + "onedash-wordmark-mono.svg"} alt="OneDash" />
        </a>
        <div className="g-topbar__divider"></div>
        <a href="#/" className="g-topbar__crumb" style={{ textDecoration: "none" }}>User Guide</a>
        <ul className="g-topbar__nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#care-gap-closure">Care Gap Closure</a></li>
          <li><a href="index.html#platform">Platform</a></li>
          <li><a href="results.html">Results</a></li>
          <li><a href="guide.html" aria-current="page">User Guide</a></li>
        </ul>
        <a className="g-topbar__cta" href="index.html#contact">
          <span>Book a demo</span>
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
}

// ────────────────────────────────────────────────────────────
// Sidebar
// ────────────────────────────────────────────────────────────
function Sidebar({ route, go, sidebarStyle, searchQ, setSearchQ }) {
  // Each group has its own collapse state
  const initialCollapsed = useMemo(() => {
    // Default: expand the group that contains the current article
    const out = {};
    NAV.forEach(g => {
      const has = route.page === "article" && g.items.includes(route.id);
      out[g.id] = !has && sidebarStyle === "collapsible" && g.id !== "overview";
    });
    return out;
  }, [route.id, route.page, sidebarStyle]);
  const [collapsed, setCollapsed] = useState(initialCollapsed);

  // When the route changes to a new article, expand its group
  useEffect(() => {
    if (route.page !== "article") return;
    setCollapsed(c => {
      const next = { ...c };
      NAV.forEach(g => {
        if (g.items.includes(route.id)) next[g.id] = false;
      });
      return next;
    });
  }, [route.id, route.page]);

  return (
    <aside className="g-sidebar">
      <div className="g-sidebar__search">
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        <input
          type="search"
          placeholder="Search the guide…"
          value={searchQ}
          onChange={e => setSearchQ(e.target.value)}
          onFocus={() => { if (route.page !== "search") go("search"); }}
        />
        {!searchQ && <kbd>/</kbd>}
      </div>

      {NAV.map(g => (
        <div key={g.id} className="g-side-group" data-collapsed={String(!!collapsed[g.id])}>
          <button
            className="g-side-group__head"
            onClick={() => {
              if (sidebarStyle === "flat") return;
              setCollapsed(c => ({ ...c, [g.id]: !c[g.id] }));
            }}
          >
            <span><i className={`fa-solid ${g.icon}`} style={{ marginRight: 8, fontSize: 10, color: "var(--g-fg-4)" }}></i>{g.label}</span>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <ul className="g-side-list">
            {g.items.map(itemId => {
              const a = ARTICLE_BY_ID[itemId];
              if (!a) return null;
              const isActive = route.page === "article" && route.id === itemId;
              return (
                <li key={itemId}>
                  <a
                    className="g-side-link"
                    href={`#/article/${itemId}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{a.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}

// ────────────────────────────────────────────────────────────
// On-this-page rail
// ────────────────────────────────────────────────────────────
function Rail({ article }) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!article) return;
    setActive(article.sections[0]?.id);
    // Observe section headings
    const ids = article.sections.map(s => s.id);
    const obs = new IntersectionObserver((entries) => {
      // Find the topmost visible
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-80px 0px -65% 0px", threshold: 0 });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [article && article.id]);

  if (!article || !article.sections || article.sections.length < 2) {
    return <aside className="g-rail"></aside>;
  }
  return (
    <aside className="g-rail">
      <div className="g-rail__title">On this page</div>
      <ul className="g-rail__list">
        {article.sections.map(s => (
          <li key={s.id}>
            <a href={`#/article/${article.id}/${s.id}`}
               className={active === s.id ? "is-active" : ""}>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="g-rail__bottom">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <i className="fa-solid fa-arrow-up"></i> Back to top
        </a>
        <a href="mailto:OneDash@caryrx.com">
          <i className="fa-solid fa-envelope"></i> Suggest an edit
        </a>
      </div>
    </aside>
  );
}

// ────────────────────────────────────────────────────────────
// Article page
// ────────────────────────────────────────────────────────────
function CategoryCrumb({ article }) {
  const group = NAV.find(g => g.items.includes(article.id));
  return (
    <nav className="g-crumb" aria-label="Breadcrumb">
      <a href="#/">User Guide</a>
      <i className="fa-solid fa-chevron-right"></i>
      <span>{group ? group.label : article.category}</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span style={{ color: "var(--g-fg-1)", fontWeight: 600 }}>{article.title}</span>
    </nav>
  );
}

function PrevNext({ article }) {
  const idx = FLAT_ORDER.indexOf(article.id);
  const prev = idx > 0 ? ARTICLE_BY_ID[FLAT_ORDER[idx - 1]] : null;
  const next = idx < FLAT_ORDER.length - 1 ? ARTICLE_BY_ID[FLAT_ORDER[idx + 1]] : null;
  return (
    <div className="g-prevnext">
      <a href={prev ? `#/article/${prev.id}` : "#"} className={prev ? "" : "is-disabled"}>
        <span className="g-prevnext__eyebrow"><i className="fa-solid fa-arrow-left"></i> Previous</span>
        <span className="g-prevnext__title">{prev ? prev.title : "—"}</span>
      </a>
      <a href={next ? `#/article/${next.id}` : "#"} className={`is-next ${next ? "" : "is-disabled"}`}>
        <span className="g-prevnext__eyebrow">Next <i className="fa-solid fa-arrow-right"></i></span>
        <span className="g-prevnext__title">{next ? next.title : "—"}</span>
      </a>
    </div>
  );
}

function ArticleView({ article, anchor }) {
  useEffect(() => {
    // Scroll to anchor if provided
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "instant", block: "start" }), 0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [article.id, anchor]);

  return (
    <div className="g-content">
      <CategoryCrumb article={article} />
      <h1 className="g-title">{article.title}</h1>
      {article.desc && <p className="g-desc">{article.desc}</p>}
      <div className="g-meta">
        <span className="g-meta__chip"><i className="fa-solid fa-clock-rotate-left"></i> Updated {article.updated}</span>
        <span className="g-meta__chip"><i className="fa-solid fa-book-open"></i> {article.sections.length} section{article.sections.length === 1 ? "" : "s"}</span>
      </div>

      <div className="g-body">
        {article.sections.map(s => (
          <section key={s.id} id={s.id}>
            <h2>{s.title}</h2>
            {s.body}
          </section>
        ))}
      </div>

      <PrevNext article={article} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Index page
// ────────────────────────────────────────────────────────────
function IndexView({ searchQ, setSearchQ, go }) {
  const inputRef = useRef(null);
  return (
    <div className="g-content g-index">
      <div className="g-index__eyebrow">OneDash · User Guide</div>
      <h1 className="g-index__title">Everything you need to run OneDash, in one place.</h1>
      <p className="g-index__sub">Documentation for clinicians, admins, and pharmacy operators — covering rules, automations, care gaps, outcomes, and the Clair AI co-pilot.</p>

      <div className="g-index__search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          ref={inputRef}
          type="search"
          placeholder={`Search ${ARTICLES.length} articles…`}
          value={searchQ}
          onChange={e => { setSearchQ(e.target.value); if (e.target.value) go("search"); }}
        />
        <kbd>/</kbd>
      </div>

      <div className="g-index__hero">
        <div>
          <div className="g-index__section__head" style={{ marginBottom: 14 }}>
            <h2 className="g-index__section__title"><i className="fa-solid fa-compass"></i> Start here</h2>
            <span className="g-index__section__count">4 articles</span>
          </div>
          <div className="g-index__cards">
            {NAV[0].items.map(id => {
              const a = ARTICLE_BY_ID[id];
              return (
                <a key={id} className="g-index__card" href={`#/article/${id}`}>
                  <div className="g-index__card__title">{a.title} <i className="fa-solid fa-arrow-right"></i></div>
                  <div className="g-index__card__desc">{a.desc}</div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="g-index__getting-started">
          <h3>New here?</h3>
          <p>Five quick steps to be useful in OneDash today.</p>
          <ol className="g-index__quicklist">
            {[
              ["new-user-account", "Set up your account"],
              ["my-dashboard", "Build your Dashboard"],
              ["my-population", "Follow patients & tags"],
              ["care-gaps", "Work the Care Gaps queue"],
              ["automations", "Automate the routine work"],
            ].map((p, i) => (
              <li key={p[0]}>
                <a href={`#/article/${p[0]}`}>
                  <span>{i + 1}</span>
                  <span>{p[1]}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {NAV.slice(1).map(g => (
        <div key={g.id} className="g-index__section">
          <div className="g-index__section__head">
            <h2 className="g-index__section__title"><i className={`fa-solid ${g.icon}`}></i> {g.label}</h2>
            <span className="g-index__section__count">{g.items.length} article{g.items.length === 1 ? "" : "s"}</span>
          </div>
          <div className="g-index__cards">
            {g.items.map(id => {
              const a = ARTICLE_BY_ID[id];
              if (!a) return null;
              return (
                <a key={id} className="g-index__card" href={`#/article/${id}`}>
                  <div className="g-index__card__title">{a.title} <i className="fa-solid fa-arrow-right"></i></div>
                  <div className="g-index__card__desc">{a.desc}</div>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Search results page
// ────────────────────────────────────────────────────────────
function SearchView({ searchQ, setSearchQ, go }) {
  const results = useMemo(() => searchAll(searchQ), [searchQ]);
  return (
    <div className="g-content">
      <nav className="g-crumb"><a href="#/">User Guide</a><i className="fa-solid fa-chevron-right"></i><span>Search</span></nav>
      <h1 className="g-title">Search</h1>
      <div className="g-index__search" style={{ marginBottom: 0, marginTop: 8 }}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          autoFocus
          type="search"
          placeholder={`Search ${ARTICLES.length} articles…`}
          value={searchQ}
          onChange={e => setSearchQ(e.target.value)}
        />
      </div>
      <div style={{ marginTop: 24, fontSize: 13, color: "var(--g-fg-3)" }}>
        {searchQ ? <>Showing <strong>{results.length}</strong> result{results.length === 1 ? "" : "s"} for <strong>"{searchQ}"</strong></> : "Start typing to search the guide."}
      </div>
      <div className="g-search-results">
        {searchQ && results.length === 0 && (
          <div className="g-search-empty">
            No matches for "<strong>{searchQ}</strong>". Try a different term or <a href="#/">browse the index</a>.
          </div>
        )}
        {results.map(r => {
          const group = NAV.find(g => g.items.includes(r.article.id));
          return (
            <a key={r.article.id} className="g-search-result" href={`#/article/${r.article.id}`}>
              <div className="g-search-result__crumb">{group ? group.label : r.article.category}</div>
              <div className="g-search-result__title">{highlight(r.article.title, searchQ)}</div>
              <div className="g-search-result__snippet">{highlight(r.snippet, searchQ)}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// App
// ────────────────────────────────────────────────────────────
function App() {
  const [route, go] = useRoute();
  const [searchQ, setSearchQ] = useState("");
  const { tweaks, set, panel, close } = useTweaks();

  // Apply tweaks to the document root + Webflow embed mode
  useEffect(() => {
    document.documentElement.setAttribute("data-density", tweaks.density || "comfortable");
    document.documentElement.setAttribute("data-sidebar-style", tweaks.sidebarStyle || "collapsible");
    if (window.UG_HIDE_TOPBAR) {
      document.documentElement.setAttribute("data-ug-embed", "true");
    }
    if (window.UG_TOP_OFFSET != null) {
      document.documentElement.style.setProperty("--ug-top-offset", `${window.UG_TOP_OFFSET}px`);
    }
    // Accent
    const accentMap = { blue: "#1C79AE", sky: "#3287B6", navy: "#011455" };
    document.documentElement.style.setProperty("--g-accent", accentMap[tweaks.accent] || "#1C79AE");
  }, [tweaks.density, tweaks.sidebarStyle, tweaks.accent]);

  // Keyboard: "/" focuses search
  useEffect(() => {
    const on = (e) => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        const input = document.querySelector(".g-sidebar__search input");
        if (input) input.focus();
      }
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  let main;
  if (route.page === "article") {
    const article = ARTICLE_BY_ID[route.id];
    if (!article) {
      main = (
        <div className="g-content">
          <h1 className="g-title">Article not found</h1>
          <p><a href="#/">Back to the index</a>.</p>
        </div>
      );
    } else {
      main = <ArticleView article={article} anchor={route.anchor} />;
    }
  } else if (route.page === "search") {
    main = <SearchView searchQ={searchQ} setSearchQ={setSearchQ} go={go} />;
  } else {
    main = <IndexView searchQ={searchQ} setSearchQ={setSearchQ} go={go} />;
  }

  const article = route.page === "article" ? ARTICLE_BY_ID[route.id] : null;

  return (
    <>
      {!window.UG_HIDE_TOPBAR && <Topbar />}
      <div className="g-shell">
        <Sidebar route={route} go={go} sidebarStyle={tweaks.sidebarStyle} searchQ={searchQ} setSearchQ={setSearchQ} />
        <main className="g-main">{main}</main>
        <Rail article={article} />
      </div>
      {panel && <TweaksPanel tweaks={tweaks} set={set} close={close} />}
    </>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
