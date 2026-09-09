/* ------------------------------------------------------------------
   berkaycloud — behaviour. Plain JS, no dependencies.
   Language, theme, clock, project lists, small entrance motion.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var html = document.documentElement;
  var SITE = window.SITE || { projects: [], i18n: { en: {}, tr: {} } };
  var page = document.body.dataset.page || "index";

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  var arrow = '<svg class="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6"/></svg>';

  /* ---------- language ---------- */
  var lang = html.lang === "tr" ? "tr" : "en";
  function t(key) {
    var d = SITE.i18n[lang] || {};
    return key in d ? d[key] : (SITE.i18n.en[key] || "");
  }
  function applyLang() {
    html.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.dataset.i18n); if (v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      var v = t(el.dataset.i18nLabel); if (v) el.setAttribute("aria-label", v);
    });
    var title = t("meta.title." + page); if (title) document.title = title;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
    render();
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
  function mark(p) { return '<span class="item__mark" aria-hidden="true">' + p.name.charAt(0) + "</span>"; }

  function render() {
    var list = document.getElementById("work-list");
    if (list) {
      list.innerHTML = "";
      SITE.projects.forEach(function (p, i) {
        var a = document.createElement("a");
        a.className = "item in"; a.href = p.repo; a.target = "_blank"; a.rel = "noopener";
        a.style.setProperty("--d", (0.25 + i * 0.05) + "s");
        a.innerHTML = mark(p) +
          '<span class="item__text"><span class="item__name">' + p.name + "<small>" + p.stack[0] + "</small></span>" +
          '<span class="item__desc">' + p.short[lang] + "</span></span>" +
          '<span class="item__arrow">' + arrow + "</span>";
        list.appendChild(a);
      });
    }

    var grid = document.getElementById("projects");
    if (grid) {
      grid.innerHTML = "";
      SITE.projects.forEach(function (p, i) {
        var art = document.createElement("article");
        art.className = "project in"; art.id = p.slug;
        art.style.setProperty("--d", (0.15 + i * 0.06) + "s");
        art.innerHTML =
          '<div class="project__top">' + mark(p) +
            '<div class="project__title"><h2>' + p.name + '</h2><span class="project__tag">' + p.tag[lang] + "</span></div>" +
            '<div class="project__meta"><span class="label">' + p.version + '</span><span class="label">' + p.license + "</span></div>" +
          "</div>" +
          '<p class="desc">' + p.short[lang] + "</p>" +
          '<div class="project__foot">' +
            '<div class="chips">' + p.stack.map(function (s) { return '<span class="chip">' + s + "</span>"; }).join("") + "</div>" +
            '<div class="project__links">' +
              '<a class="btn btn--sm btn--primary" href="' + p.repo + '" target="_blank" rel="noopener">' + t("projects.github") + arrow + "</a>" +
              (p.download ? '<a class="btn btn--sm" href="' + p.download + '" target="_blank" rel="noopener">' + t("projects.download") + arrow + "</a>" : "") +
            "</div>" +
          "</div>";
        grid.appendChild(art);
      });
    }
  }

  /* ---------- header shadow ---------- */
  var top = document.querySelector(".top");
  function onScroll() { if (top) top.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- clock (Istanbul) ---------- */
  var clock = document.getElementById("clock");
  if (clock) {
    var fmt = null;
    try { fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Istanbul", hour12: false }); } catch (e) {}
    var tick = function () {
      var d = new Date();
      clock.textContent = fmt ? fmt.format(d) : (pad(d.getHours()) + ":" + pad(d.getMinutes()));
    };
    tick(); setInterval(tick, 15000);
  }

  applyLang();
})();
