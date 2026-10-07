/* =====================================================================
   OneDash marketing site — home page behaviour
   =====================================================================
   Loaded and executed by the Webflow embed loader after the content is
   injected. Lives here rather than in the embed so it is pushable: the
   embed is pasted into Webflow once and never changes, while this file
   follows the branch toggle like marketing.css and content/home.html.

   Available from the loader on window.OD: root, CDN, RAW, PAGE.
   Runs once, after content is in the DOM.
   ===================================================================== */
(function () {
  var OD = window.OD || {};
  var root = OD.root || document.getElementById('od-root');
  if (!root) { return; }

  var tabs = [].slice.call(root.querySelectorAll('.ptab'));
  var map = {'tab-quality':'panel-quality','tab-pharmacy':'panel-pharmacy','tab-finance':'panel-finance'};
  function act(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.classList.toggle('is-active', on);
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      var p = root.querySelector('#' + map[x.id]);
      if (p) { p.classList.toggle('is-active', on); if (on) { p.removeAttribute('hidden'); } else { p.setAttribute('hidden', ''); } }
    });
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { act(t); }); });

  // ── Gap loop animation ──────────────────────────────────────
  // Lives here, not in the content HTML: innerHTML never executes
  // <script>, so anything interactive has to run from the loader.
  // Markup is in content/home.html, keyframes in marketing.css.
  (function () {
    var wrap = root.querySelector('.od-gap-loop');
    if (!wrap) { return; }
    var stage = wrap.querySelector('.od-gap-loop__stage');
    var LOOP_MS = 22000;              // keep in sync with --odg-loop
    var q1 = function (sel) { return wrap.querySelector(sel); };

    var ICON = {
      ehr:      ['fa-solid fa-fax', 'EHR / fax to provider'],
      refill:   ['fa-solid fa-prescription', 'AI agent pharmacy call — refill request'],
      callMem:  ['fa-solid fa-headset', 'AI agent call to member'],
      callProv: ['fa-solid fa-user-doctor', 'AI agent call to provider'],
      text:     ['fa-solid fa-comments', 'Conversation text to member']
    };
    var a = function (k, sub) { return { icon: ICON[k][0], title: ICON[k][1], sub: sub }; };

    var PLAYS = [
      { gap: 'Late DM medication fill', outcome: 'Refill picked up',
        metric: 'DM refills recovered this quarter', base: 1284, inc: 6,
        acts: [a('text','Asks member about refill barriers'), a('refill','Requests 90-day refill from pharmacy'), a('ehr','Adherence alert to prescriber')] },
      { gap: 'High-cost medication — formulary alternative available', outcome: 'Switched to formulary alternative',
        metric: 'Formulary switches this quarter', base: 412, inc: 3,
        acts: [a('ehr','Notifies on formulary alternative'), a('callProv','Confirms the formulary switch'), a('text','Explains the lower-cost option')] },
      { gap: 'Annual wellness visit needed', outcome: 'AWV scheduled',
        metric: 'Wellness visits booked this quarter', base: 2906, inc: 9,
        acts: [a('text','Asks if member needs help scheduling'), a('callMem','Books visit or warm-transfers')] },
      { gap: 'ED discharge — PCP follow-up needed', outcome: 'Follow-up visit booked',
        metric: 'ED follow-ups booked this quarter', base: 638, inc: 4,
        acts: [a('text','Offers help scheduling the follow-up'), a('ehr','Alerts PCP: discharged, needs to be seen'), a('callProv','Confirms the visit was completed')] }
    ];

    var actsEl = q1('[data-acts]');
    var clamp = function (x) { return Math.max(0, Math.min(1, x)); };
    var sm = function (x) { return x * x * (3 - 2 * x); };
    var ease = function (t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
    var shown = -1, start = performance.now(), paused = false, pausedAt = 0, raf = null;

    function fit() { stage.style.transform = 'scale(' + (wrap.clientWidth / 960) + ')'; }
    if (window.ResizeObserver) { new ResizeObserver(fit).observe(wrap); }
    else { window.addEventListener('resize', fit); }
    fit();

    function renderPlay(i) {
      var pl = PLAYS[i];
      q1('[data-gap]').textContent = pl.gap;
      q1('[data-outcome]').textContent = pl.outcome;
      q1('[data-metric]').textContent = pl.metric;
      actsEl.innerHTML = pl.acts.map(function (x) {
        return '<div class="odg-act"><span class="odg-act__title"><i class="' + x.icon + '"></i>' +
               x.title + '</span><span class="odg-act__sub">' + x.sub + '</span></div>';
      }).join('');
      shown = i;
    }

    function tick(now) {
      var t = Math.max(0, now - start);
      var y = (t % LOOP_MS) / LOOP_MS * 100;
      var cyc = Math.floor(t / LOOP_MS);
      // Piecewise beat clock: Identify 0–.30, Act .30–.58, Monitor .58–1
      var q = (y <= 15.9 ? y * 30 / 15.9
             : y <= 70.45 ? 30 + (y - 15.9) * 28 / 54.55
             : 58 + (y - 70.45) * 42 / 29.55) / 100;

      if (shown !== cyc % PLAYS.length) { renderPlay(cyc % PLAYS.length); }

      var acts = actsEl.children, n = acts.length || 1;
      var out = q >= .9 ? 1 - clamp((q - .9) / .04) : 1;
      for (var i = 0; i < acts.length; i++) {
        var r = sm(clamp((q - (.36 + i * (.13 / n))) / .04));
        acts[i].style.opacity = r * out;
        acts[i].style.transform = 'translateY(' + ((1 - r) * 8).toFixed(2) + 'px)';
      }

      var prog = sm(clamp((q - .35) / (.13 + .04 - .13 / n + .005)));
      q1('[data-ring]').style.strokeDashoffset = (176 * (1 - prog * out)).toFixed(2);

      var think = sm(clamp((q - .322) / .013)) * (1 - sm(clamp((q - .347) / .015)));
      q1('[data-think]').style.opacity = think;
      var sp = q1('[data-spin]');
      sp.style.opacity = think;
      sp.style.transform = 'rotate(' + (t * .5 % 360) + 'deg)';

      var pl = PLAYS[cyc % PLAYS.length];
      var up = q >= .78 ? 1 : q >= .68 ? ease((q - .68) / .1) : 0;
      var num = Math.round(pl.base + pl.inc * (Math.floor(cyc / PLAYS.length) + up)).toLocaleString('en-US');
      var c = q1('[data-count]'); if (c.textContent !== num) { c.textContent = num; }
      var plus = q1('[data-plus]'); if (plus.textContent !== '+' + pl.inc) { plus.textContent = '+' + pl.inc; }

      raf = requestAnimationFrame(tick);
    }

    // Pause off-screen / on hidden tabs. CSS keyframes pause with a
    // class and the JS clock is shifted by the paused duration, so
    // the two never drift out of phase.
    function setPaused(next) {
      if (next === paused) { return; }
      paused = next;
      if (paused) {
        pausedAt = performance.now();
        wrap.classList.add('is-paused');
        if (raf) { cancelAnimationFrame(raf); raf = null; }
      } else {
        start += performance.now() - pausedAt;
        wrap.classList.remove('is-paused');
        raf = requestAnimationFrame(tick);
      }
    }

    var inView = true;
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (es) {
        inView = es[0].isIntersecting;
        setPaused(!inView || document.hidden);
      }, { threshold: 0 }).observe(wrap);
    }
    document.addEventListener('visibilitychange', function () {
      setPaused(document.hidden || !inView);
    });

    // Start the CSS keyframes and the JS clock from the same instant.
    if (document.getAnimations) {
      document.getAnimations().forEach(function (an) { try { an.currentTime = 0; } catch (e) {} });
    }
    start = performance.now();
    raf = requestAnimationFrame(tick);
  })();
})();
