/* =========================================================================
   EDIT YOUR CONTENT HERE
   -------------------------------------------------------------------------
   Every word on the site comes from the objects below. Change them, save,
   refresh. Anything still set to "TODO" is a placeholder: it shows on the
   page as-is (and placeholder links do nothing) so it is easy to spot.
   ========================================================================= */

const LINKS = {
  email: "TODO",     // just the address, e.g. "name@example.com"
  github: "TODO",    // full URL, e.g. "https://github.com/your-handle"
  linkedin: "TODO",  // full URL, e.g. "https://www.linkedin.com/in/your-handle"
  cv: "",            // optional: a PDF in this folder ("cv.pdf") or a URL. "" hides it.
};

const PROFILE = {
  name: "Tristan Ko",
  tagline: "*Data* and *engineering*.", // words in *stars* are drawn in the accent red
  roles: ["Management Engineering, Waterloo", "Product analyst, Allstate"],
  bio: "Passionate about solving problems through data and optimization.",
};

// The home screen shows the first three entries (short name + year).
// The #experience view shows all of them. Keep it to about four.
const EXPERIENCE = [
  {
    short: "Allstate",
    year: "2026",
    company: "Allstate Canada",
    title: "Provincial Product Analyst",
    term: "Fall 2026",
    blurb: "Excel models and Power BI dashboards for reporting, Python automation of data pulls, and pricing and competitive analysis. Built a new reinsurance ceding approach adopted for Ontario.",
  },
  {
    short: "MTO",
    year: "TODO",
    company: "Ontario Ministry of Transportation",
    title: "Technical Analyst",
    term: "TODO",
    blurb: "TODO: one or two lines on what you did.",
  },
  {
    short: "Iovate",
    year: "TODO",
    company: "Iovate Health Sciences",
    title: "Supply Chain Intern",
    term: "TODO",
    blurb: "TODO: one or two lines on what you did.",
  },
  {
    short: "UW Orbital",
    year: "",
    company: "UW Orbital",
    title: "Firmware Developer",
    term: "Design team",
    blurb: "Firmware for Waterloo's student satellite design team.",
  },
];

// The home screen shows the first three (short name + tag).
// "link" is the GitHub URL for each project.
const PROJECTS = [
  {
    short: "Earnings call analyzer",
    tag: "NLP",
    name: "Earnings Call Signal Analyzer",
    stack: "NLP · Python",
    blurb: "Tests whether management's tone on earnings calls predicts the stock's move after earnings.",
    link: "TODO",
  },
  {
    short: "Housing forecaster",
    tag: "ML",
    name: "Toronto Housing Price Forecaster",
    stack: "ML · XGBoost",
    blurb: "An XGBoost model trained on a large dataset of Toronto home sales to forecast prices.",
    link: "TODO",
  },
  {
    short: "Stock classifier",
    tag: "ML",
    name: "Stock Direction Classifier",
    stack: "ML · Python",
    blurb: "Predicts market direction using time-based cross-validation, with no look-ahead bias.",
    link: "TODO",
  },
  {
    short: "Code Ranch",
    tag: "Web",
    name: "Code Ranch",
    stack: "Web app",
    blurb: "A web app built to feel instant, with under 100ms latency.",
    link: "TODO",
  },
];

// The #the-rest view. Placeholder text: rewrite it in your own words.
const THE_REST = {
  intro: "Away from spreadsheets and models, this is where the time goes.",
  items: [
    { label: "gym", text: "Most mornings start with a lift. Consistency over intensity." },
    { label: "golf", text: "Chasing a lower handicap one range bucket at a time." },
    { label: "football", text: "Playing whenever I can, watching whenever I can't." },
  ],
};

/* ======================= END OF EDITABLE CONTENT ======================== */


(() => {
  "use strict";

  const VIEWS = ["home", "experience", "projects", "the-rest"];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fadeMs = () => (reducedMotion.matches ? 120 : 240);

  const isTodo = (v) => !v || /^\s*TODO/i.test(v);

  // Tiny element helper: h("p", { class: "x" }, "text", childNode)
  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === "class") node.className = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  // An outbound link, or an inert placeholder if the value is still TODO.
  function link(href, text, attrs = {}) {
    if (isTodo(href)) {
      return h("a", { ...attrs, href: "#", "data-todo": true, title: "Placeholder: set this link in script.js" }, text);
    }
    const external = /^https?:/i.test(href);
    return h("a", { ...attrs, href, target: external ? "_blank" : null, rel: external ? "noopener" : null }, text);
  }

  // "*Data* and *engineering*." -> Data (red) and engineering (red).
  function accented(str) {
    return str.split(/(\*[^*]+\*)/).filter(Boolean).map((part) =>
      part.startsWith("*") ? h("em", {}, part.slice(1, -1)) : part
    );
  }

  const slot = (name) => document.querySelector(`[data-slot="${name}"]`);

  function render() {
    document.getElementById("home-name").textContent = PROFILE.name;
    document.title = PROFILE.name;
    slot("tagline").replaceChildren(...accented(PROFILE.tagline));

    const roles = [];
    PROFILE.roles.forEach((r, i) => {
      if (i) roles.push(h("span", { class: "sep", "aria-hidden": "true" }, "·"));
      roles.push(h("span", { class: "role" }, r));
    });
    slot("roles").replaceChildren(...roles);
    slot("bio").textContent = PROFILE.bio;

    slot("home-experience").replaceChildren(
      ...EXPERIENCE.slice(0, 3).map((x) =>
        h("li", {}, h("a", { class: "row", href: "#experience" },
          h("span", { class: "label" }, x.short),
          h("span", { class: "meta" }, x.year)))
      )
    );
    slot("home-projects").replaceChildren(
      ...PROJECTS.slice(0, 3).map((p) =>
        h("li", {}, h("a", { class: "row", href: "#projects" },
          h("span", { class: "label" }, p.short),
          h("span", { class: "meta" }, p.tag)))
      )
    );

    slot("experience").replaceChildren(
      ...EXPERIENCE.map((x) =>
        h("li", { class: "xp-item" },
          h("div", { class: "xp-head" },
            h("p", {}, h("span", { class: "xp-who" }, x.company), h("span", { class: "xp-role" }, x.title)),
            h("span", { class: "xp-term" }, x.term)),
          h("p", { class: "xp-blurb" }, x.blurb))
      )
    );

    slot("projects").replaceChildren(
      ...PROJECTS.map((p) =>
        h("li", { class: "pj-item" },
          h("div", { class: "pj-head" },
            h("span", { class: "pj-name" }, p.name),
            h("span", { class: "pj-stack" }, p.stack)),
          h("p", { class: "pj-blurb" }, p.blurb),
          link(p.link, ["github ", h("span", { "aria-hidden": "true" }, "→")], {
            class: "pj-link",
            "aria-label": `${p.name} on GitHub`,
          }))
      )
    );

    slot("rest-intro").textContent = THE_REST.intro;
    slot("rest").replaceChildren(
      ...THE_REST.items.map((it) => h("div", {}, h("dt", {}, it.label), h("dd", {}, it.text)))
    );

    const contact = [
      ["email", isTodo(LINKS.email) ? LINKS.email : `mailto:${LINKS.email}`],
      ["github", LINKS.github],
      ["linkedin", LINKS.linkedin],
    ];
    if (LINKS.cv) contact.push(["cv", LINKS.cv]);
    const nav = slot("links");
    nav.replaceChildren();
    contact.forEach(([label, href], i) => {
      if (i) nav.append(h("span", { class: "dot", "aria-hidden": "true" }, "·"));
      nav.append(link(href, label));
    });
  }

  /* ---------- fit: shrink a view's type until it fits the screen ---------- */

  const stage = document.getElementById("stage");

  function fit(view) {
    if (!view || view.hidden) return;
    const cs = getComputedStyle(stage);
    const room = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    let f = 1;
    view.style.setProperty("--fit", "1");
    while (view.scrollHeight > room && f > 0.6) {
      f -= 0.03;
      view.style.setProperty("--fit", f.toFixed(2));
    }
  }

  /* ---------- hash router with a short fade ---------- */

  let current = null;
  let swapTimer = 0;

  const viewEl = (name) => document.getElementById(`view-${name}`);
  const viewFromHash = () => {
    const name = decodeURIComponent(location.hash.slice(1));
    return VIEWS.includes(name) ? name : "home";
  };

  function show(name, initial = false) {
    if (name === current) return;
    const prev = current ? viewEl(current) : null;
    const next = viewEl(name);
    current = name;
    clearTimeout(swapTimer);

    // mountains start moving straight away, alongside the fade-out
    document.body.classList.toggle("is-detail", name !== "home");

    const swap = () => {
      for (const v of VIEWS.map(viewEl)) {
        if (v !== next) { v.hidden = true; v.classList.remove("is-active"); }
      }
      document.body.dataset.view = name;
      next.hidden = false;
      fit(next);
      requestAnimationFrame(() => requestAnimationFrame(() => next.classList.add("is-active")));
      if (!initial) {
        const target = next.querySelector("[tabindex='-1']");
        if (target) target.focus({ preventScroll: true });
      }
    };

    if (prev && !initial) {
      prev.classList.remove("is-active");
      swapTimer = setTimeout(swap, fadeMs());
    } else {
      swap();
    }
  }

  function goHome() {
    if (location.hash) history.pushState(null, "", location.pathname + location.search);
    show("home");
  }

  /* ---------- wire up ---------- */

  render();

  document.querySelectorAll(".back").forEach((b) => b.addEventListener("click", goHome));

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-todo]");
    if (a) e.preventDefault();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && current !== "home") goHome();
  });

  window.addEventListener("hashchange", () => show(viewFromHash()));
  window.addEventListener("popstate", () => show(viewFromHash()));

  let raf = 0;
  const refit = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => fit(viewEl(current)));
  };
  window.addEventListener("resize", refit);
  if (window.visualViewport) window.visualViewport.addEventListener("resize", refit);

  show(viewFromHash(), true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
})();
