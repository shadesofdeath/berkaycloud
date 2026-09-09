/* ------------------------------------------------------------------
   berkay.cloud — behaviour
   Plain JS. No dependencies. Everything degrades to static HTML.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var html = document.documentElement;
  var SITE = window.SITE || { projects: [], i18n: { en: {}, tr: {} } };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var page = document.body.dataset.page || "index";

  /* ---------- storage (may throw in private modes) ---------- */
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* ---------- language ---------- */
  var lang = html.lang === "tr" ? "tr" : "en";

  function t(key) {
    var dict = SITE.i18n[lang] || {};
    return key in dict ? dict[key] : (SITE.i18n.en[key] || "");
  }

  function splitWords(el) {
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          if (!n.textContent.trim()) return;
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span"); w.className = "w";
            var s = document.createElement("span"); s.textContent = p; s.style.setProperty("--i", i++);
            w.appendChild(s); frag.appendChild(w);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains("w")) {
          walk(n);
        }
      });
    })(el);
  }

  function applyLang() {
    html.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.dataset.i18n);
      if (!v) return;
      el.innerHTML = v;
    });
    document.querySelectorAll("[data-split]").forEach(splitWords);
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      var v = t(el.dataset.i18nLabel); if (v) el.setAttribute("aria-label", v);
    });
    var title = t("meta.title." + page); if (title) document.title = title;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
    renderProjects();
    // re-observe anything that was re-split
    document.querySelectorAll("[data-split]").forEach(function (el) {
      if (el.classList.contains("in")) { el.classList.remove("in"); requestAnimationFrame(function () { el.classList.add("in"); }); }
    });
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang; store("lang", lang); applyLang();
    });
  });

  /* ---------- theme ---------- */
  document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
      html.setAttribute("data-theme", next); store("theme", next);
    });
  });

  /* ---------- projects ---------- */
  function h(tag, cls, inner) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (inner !== undefined) el.innerHTML = inner;
    return el;
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  var arrow = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8"/></svg>';

  function renderProjects() {
    var list = document.getElementById("work-list");
    if (list) {
      list.innerHTML = "";
      SITE.projects.forEach(function (p, i) {
        var a = h("a", "work-row reveal");
        a.href = p.repo; a.target = "_blank"; a.rel = "noopener";
        a.style.setProperty("--d", (i * 60) + "ms");
        a.innerHTML =
          '<span class="work-row__n">' + pad(i + 1) + "</span>" +
          '<span class="work-row__name">' + p.name + "<small>" + p.stack[0] + "</small></span>" +
          '<span class="work-row__desc">' + p.short[lang] + "</span>" +
          '<span class="work-row__arrow">' + arrow + "</span>";
        list.appendChild(a);
      });
    }

    var grid = document.getElementById("projects");
    if (grid) {
      grid.innerHTML = "";
      SITE.projects.forEach(function (p, i) {
        var art = h("article", "project reveal");
        art.id = p.slug;
        art.style.setProperty("--d", (i * 70) + "ms");
        art.innerHTML =
          '<div class="project__meta">' +
            '<span class="mono">' + pad(i + 1) + " / " + pad(SITE.projects.length) + "</span>" +
            '<span class="mono">' + t("projects.version") + " <b>" + p.version + "</b></span>" +
            '<span class="mono">' + t("projects.license") + " <b>" + p.license + "</b></span>" +
          "</div>" +
          '<div class="project__head">' +
            "<h2>" + p.name + "</h2>" +
            '<p class="project__tag">' + p.tag[lang] + "</p>" +
          "</div>" +
          '<div class="project__body">' +
            '<p class="project__desc">' + p.short[lang] + "</p>" +
            '<div class="chips">' + p.stack.map(function (x) { return '<span class="chip">' + x + "</span>"; }).join("") + "</div>" +
          "</div>" +
          '<div class="project__links">' +
            '<a class="btn btn--solid" href="' + p.repo + '" target="_blank" rel="noopener">' + t("projects.github") + arrow + "</a>" +
            (p.download ? '<a class="btn" href="' + p.download + '" target="_blank" rel="noopener">' + t("projects.download") + arrow + "</a>" : "") +
          "</div>";
        grid.appendChild(art);
      });
    }
    observeReveals();
  }

  /* ---------- reveal on scroll ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }) : null;

  function observeReveals() {
    document.querySelectorAll(".reveal, [data-split]").forEach(function (el) {
      if (el.classList.contains("in") || el.dataset.observed) return;
      el.dataset.observed = "1";
      if (io) io.observe(el); else el.classList.add("in");
    });
  }

  /* ---------- nav ---------- */
  var nav = document.querySelector(".nav");
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  var burger = document.querySelector(".nav__burger"), menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = !menu.classList.contains("is-open");
      menu.classList.toggle("is-open", open);
      html.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("is-open"); html.classList.remove("menu-open"); document.body.style.overflow = "";
      });
    });
  }

  /* ---------- clock (Istanbul) ---------- */
  var clock = document.getElementById("clock");
  if (clock) {
    var fmt;
    try { fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Istanbul", hour12: false }); } catch (e) { fmt = null; }
    function tick() {
      var d = new Date();
      clock.textContent = "IST " + (fmt ? fmt.format(d) : (pad(d.getHours()) + ":" + pad(d.getMinutes())));
    }
    tick(); setInterval(tick, 15000);
  }

  /* ---------- custom cursor ---------- */
  var cur = document.getElementById("cursor");
  if (cur && window.matchMedia("(pointer: fine)").matches && !reduced) {
    html.classList.add("has-cursor");
    var cx = -100, cy = -100, rx = -100, ry = -100;
    var dot = cur.querySelector(".cursor__dot"), ring = cur.querySelector(".cursor__ring");
    window.addEventListener("mousemove", function (e) {
      cx = e.clientX; cy = e.clientY; html.classList.remove("cursor-hidden");
    }, { passive: true });
    document.addEventListener("mouseleave", function () { html.classList.add("cursor-hidden"); });
    (function raf() {
      rx += (cx - rx) * 0.18; ry += (cy - ry) * 0.18;
      dot.style.transform = "translate(" + cx + "px," + cy + "px)";
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      requestAnimationFrame(raf);
    })();
    document.addEventListener("mouseover", function (e) {
      var target = e.target.closest("a, button, .portrait");
      html.classList.toggle("cursor-link", !!target);
    });
  }

  /* ---------- hero dot field ---------- */
  var canvas = document.getElementById("field");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d", { alpha: true });
    var W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
    var GAP = 26, cols = 0, rows = 0;
    var mx = -9999, my = -9999, tmx = -9999, tmy = -9999;
    var t0 = performance.now();
    var running = true;

    function resize() {
      var r = canvas.parentElement.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.floor(W * DPR); canvas.height = Math.floor(H * DPR);
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      GAP = W < 700 ? 22 : 26;
      cols = Math.ceil(W / GAP) + 1; rows = Math.ceil(H / GAP) + 1;
    }
    function rgb() {
      var v = getComputedStyle(html).getPropertyValue("--dot").trim();
      return v || "236, 235, 230";
    }
    var dotRGB = rgb();
    new MutationObserver(function () { dotRGB = rgb(); }).observe(html, { attributes: true, attributeFilter: ["data-theme"] });

    function frame(now) {
      if (!running) return;
      var tm = (now - t0) / 1000;
      mx += (tmx - mx) * 0.08; my += (tmy - my) * 0.08;
      ctx.clearRect(0, 0, W, H);
      var ox = ((W - (cols - 1) * GAP) / 2), oy = ((H - (rows - 1) * GAP) / 2);
      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
          var x = ox + i * GAP, y = oy + j * GAP;
          var n = Math.sin(i * 0.35 + tm * 0.6) * Math.cos(j * 0.27 - tm * 0.45) * 0.5 +
                  Math.sin((i + j) * 0.18 + tm * 0.35) * 0.5;      // -1 .. 1
          var base = 0.13 + (n + 1) * 0.13;                          // .13 .. .39
          var dx = x - mx, dy = y - my, d2 = dx * dx + dy * dy;
          var R = 220, boost = 0, push = 0;
          if (d2 < R * R) {
            var d = Math.sqrt(d2), k = 1 - d / R;
            k = k * k * (3 - 2 * k);
            boost = k * 0.85; push = k * 12;
            if (d > 0.001) { x += dx / d * push; y += dy / d * push; }
          }
          var a = Math.min(1, base + boost);
          var s = 1.3 + boost * 2;
          ctx.fillStyle = "rgba(" + dotRGB + "," + a.toFixed(3) + ")";
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
      requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", function (e) {
      var r = canvas.getBoundingClientRect();
      tmx = e.clientX - r.left; tmy = e.clientY - r.top;
    }, { passive: true });
    document.addEventListener("mouseleave", function () { tmx = -9999; tmy = -9999; });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        var vis = en[0].isIntersecting;
        if (vis && !running) { running = true; requestAnimationFrame(frame); }
        if (!vis) running = false;
      }).observe(canvas);
    }
    if (reduced) { running = false; frame(t0); running = false; } else { requestAnimationFrame(frame); }
  }

  /* ---------- grid overlay ---------- */
  document.querySelectorAll(".gridlines").forEach(function (g) {
    for (var i = 0; i < 12; i++) g.appendChild(document.createElement("span"));
  });

  /* ---------- boot ---------- */
  applyLang();
  observeReveals();
  // Hero text should appear immediately, not wait for the observer.
  requestAnimationFrame(function () {
    document.querySelectorAll(".hero [data-split], .hero .reveal, .page-head [data-split], .page-head .reveal").forEach(function (el) { el.classList.add("in"); });
  });
})();
