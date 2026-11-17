/* =========================================================================
   EDIT YOUR CONTENT HERE
   -------------------------------------------------------------------------
   Every word on the site comes from the objects below. Change them, save,
   refresh. Order matters: the first three experiences and the first three
   projects are the ones shown on the home screen.

   Each experience and project gets its own page at #experience/<slug> or
   #projects/<slug>. A slug is the short id used in that link: lowercase,
   dashes instead of spaces, and unique within its list.
   ========================================================================= */

const LINKS = {
  email: "tristanko1116@gmail.com",                  // just the address
  github: "https://github.com/TristanYIKo",
  linkedin: "https://www.linkedin.com/in/tristan-ko/",
  cv: "",                                            // optional: "cv.pdf" in this folder, or a URL. "" hides it.
};

const PROFILE = {
  name: "Tristan Ko",
  tagline: "*Data* and *engineering*.", // words in *stars* are drawn in the accent red
  roles: ["Management Engineering, Waterloo", "Product analyst, Allstate"],
  bio: "Passionate about solving problems through data and optimization.",
};

const EXPERIENCE = [
  {
    slug: "allstate",
    short: "Allstate",            // name on the home screen
    year: "2026",                 // right-hand label on the home screen
    company: "Allstate Canada",
    title: "Provincial Product Analyst",
    term: "Sep – Dec 2026",
    location: "Markham, ON (remote)",
    summary: "Risk-selection strategy for the Ontario market, alongside the team's recurring performance reporting.",
    highlights: [
      "Analyzed historical claims data to find underperforming customer segments, informing a safer, more profitable pricing strategy for Ontario.",
      "Developed a new reinsurance ceding approach that was adopted for Ontario.",
      "Built Excel models and Power BI dashboards for the team's recurring reports, and moved them onto a platform that refreshes the data automatically.",
      "Automated report data pulls with Python and supported pricing and competitive analysis.",
    ],
    tools: ["Excel", "Power BI", "Python"],
  },
  {
    slug: "mto",
    short: "MTO",
    year: "2026",
    company: "Ontario Ministry of Transportation",
    title: "Technical Analyst",
    term: "Jan – Apr 2026",
    location: "Toronto, ON",
    summary: "Software troubleshooting across internal web applications, and centralized databases to streamline internal tracking.",
    highlights: [
      "Resolved data-flow and communication issues between the frontend, backend server and database to keep internal applications running smoothly.",
      "Wrote database migration scripts to update large sets of records without data loss or errors.",
      "Built a centralized database to track employee work arrangements, replacing scattered spreadsheets with one organized platform.",
    ],
    tools: ["SQL", "Databases", "Web applications"],
  },
  {
    slug: "iovate",
    short: "Iovate",
    year: "2025",
    company: "Iovate Health Sciences",
    title: "Supply Chain Intern",
    term: "May – Aug 2025",
    location: "Oakville, ON",
    summary: "Streamlined supply chain operations with automated inventory tools, data pipelines and performance dashboards.",
    highlights: [
      "Created an automated Excel inventory tool for over 800 products that calculates reorder quantities and schedules, cutting manual planning time by over 90%.",
      "Built Python scripts to upload and sync supply chain data automatically, eliminating manual entry mistakes.",
      "Designed Power BI dashboards for team-wide metrics, and analyzed warehouse shipping errors to reduce fulfillment mistakes by 35%.",
    ],
    tools: ["Excel", "Python", "Power BI"],
  },
];

// "live" and "github" are optional: leave "" to hide that link (e.g. private repos).
const PROJECTS = [
  {
    slug: "code-ranch",
    short: "Code Ranch",          // name on the home screen
    tag: "Web",                   // right-hand label on the home screen
    name: "Code Ranch",
    kind: "Typing game · Web app",
    summary: "A cowboy-themed typing game where you take down bandits by typing real programming syntax with speed and accuracy.",
    highlights: [
      "High-noon duels settled by typing real lines of code against the clock.",
      "Built to feel instant, with under 100ms latency on every keystroke.",
      "Backed by Supabase (Postgres) for accounts and game data.",
      "Next up: multiplayer shootouts, ranked leaderboards and new wanted posters.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    live: "https://code-ranch.vercel.app/",
    github: "",
  },
  {
    slug: "factorfive",
    short: "FactorFive",
    tag: "Finance",
    name: "FactorFive",
    kind: "Equity analysis · Web app",
    summary: "Five-factor stock analysis, benchmarked against size-matched industry peers and the market a company actually trades in.",
    highlights: [
      "Scores a ticker 0 to 100 across growth, profitability, valuation, quality and analyst sentiment.",
      "Every score shows its work: peer count, cohort quality and a confidence rating sit right beside it.",
      "Relative strength against the S&P 500, a risk profile, news sentiment and a market calendar.",
      "Hand-rolled SVG charts, with warm requests answering in about 43ms.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Finnhub API"],
    live: "https://factor-five.vercel.app/",
    github: "https://github.com/TristanYIKo/FactorFive",
  },
  {
    slug: "roastbot",
    short: "RoastBot",
    tag: "AI",
    name: "RoastBot",
    kind: "AI resume feedback · Web app",
    summary: "A playful AI resume roaster that turns brutal feedback into friendly, actionable career advice.",
    highlights: [
      "Upload a PDF, DOCX or TXT resume; it is parsed on the server.",
      "A custom Google Gemini prompt returns structured JSON for the whole review.",
      "Three panels: a comedic Roast, a grounded Reality Check, and Quick Fixes with specific edits.",
      "Built after a run of applications with no callbacks, to get honest feedback without the awkwardness.",
    ],
    stack: ["Next.js", "React", "Framer Motion", "Gemini API"],
    live: "https://roastbot-three.vercel.app/",
    github: "https://github.com/TristanYIKo/AIResumeRoaster",
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

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const OUT_MS = 190;          // how long the outgoing view takes to fade
  const MAX_STAGGER_STEPS = 14; // long lists stop adding delay after this many items

  const stage = document.getElementById("stage");
  const isEmpty = (v) => !v || /^\s*TODO/i.test(v);

  /* ---------- tiny DOM helper: h("p", { class: "x" }, "text", node) ---------- */

  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === "class") node.className = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  const arrow = (dir = "→") => h("span", { class: "arrow", "aria-hidden": "true" }, dir);

  function outLink(href, label, attrs = {}) {
    const external = /^https?:/i.test(href);
    return h("a", {
      ...attrs,
      href,
      target: external ? "_blank" : null,
      rel: external ? "noopener noreferrer" : null,
    }, label);
  }

  // "*Data* and *engineering*." -> Data (red) and engineering (red).
  const accented = (str) =>
    str.split(/(\*[^*]+\*)/).filter(Boolean).map((part) =>
      part.startsWith("*") ? h("em", {}, part.slice(1, -1)) : part);

  const slot = (name) => document.querySelector(`[data-slot="${name}"]`);

  /* ---------- views ---------- */

  // Every back button returns to the home screen.
  function backButton() {
    return h("button", { class: "back", type: "button", "aria-label": "Back to home" },
      arrow("←"), " back");
  }

  function section(route, labelId, ...children) {
    return h("section", {
      class: "view view-detail",
      id: `view-${route.replace("/", "-")}`,
      "data-route": route,
      "aria-labelledby": labelId,
      hidden: true,
    }, children);
  }

  // The consolidated list behind "view all".
  function listView(kind, items, card) {
    const title = kind === "experience" ? "Experience" : "Projects";
    const count = `${items.length} ${kind === "experience" ? (items.length === 1 ? "role" : "roles") : (items.length === 1 ? "project" : "projects")}`;
    return section(kind, `t-${kind}`,
      backButton(),
      h("div", { class: "list-head", "data-a": true },
        h("h2", { class: "view-title", id: `t-${kind}`, tabindex: "-1" }, title),
        h("span", { class: "count" }, count)),
      h("div", { class: "scroll" },
        h("ul", { class: `cards cards-${kind}` }, items.map((it) => h("li", { "data-a": true }, card(it))))));
  }

  function xpCard(x) {
    return h("a", { class: "card", href: `#experience/${x.slug}`, "aria-label": `${x.company}, ${x.title}. View role` },
      h("div", { class: "card-head" },
        h("span", { class: "card-title" }, x.company),
        h("span", { class: "card-meta" }, x.term)),
      h("p", { class: "card-sub" }, x.title),
      h("p", { class: "card-blurb" }, x.summary),
      h("span", { class: "card-cta" }, "view role ", arrow()));
  }

  function pjCard(p) {
    return h("a", { class: "card", href: `#projects/${p.slug}`, "aria-label": `${p.name}. View project` },
      h("div", { class: "card-head" },
        h("span", { class: "card-title" }, p.name),
        h("span", { class: "card-meta" }, p.tag)),
      h("p", { class: "card-sub" }, p.kind),
      h("p", { class: "card-blurb" }, p.summary),
      h("span", { class: "card-cta" }, "view project ", arrow()));
  }

  // A role's or project's own page, with previous/next links along the bottom.
  function itemView(kind, items, i, head, body) {
    const it = items[i];
    const route = `${kind}/${it.slug}`;
    const titleId = `t-${kind}-${it.slug}`;
    const prev = items[(i - 1 + items.length) % items.length];
    const next = items[(i + 1) % items.length];
    const nameOf = (x) => x.short || x.name;
    const noun = kind === "experience" ? "role" : "project";

    return section(route, titleId,
      backButton(),
      h("header", { class: "item-head", "data-a": true },
        h("p", { class: "eyebrow" }, head.eyebrow),
        h("h2", { class: "view-title", id: titleId, tabindex: "-1" }, head.title),
        h("p", { class: "item-sub" }, head.sub)),
      h("div", { class: "scroll" }, body),
      items.length > 1 && h("nav", { class: "pager", "aria-label": `Other ${kind}`, "data-a": true },
        h("a", { href: `#${kind}/${prev.slug}`, "aria-label": `Previous ${noun}: ${nameOf(prev)}` }, arrow("←"), " ", nameOf(prev)),
        h("span", { class: "pager-count" }, `${i + 1} / ${items.length}`),
        h("a", { href: `#${kind}/${next.slug}`, "aria-label": `Next ${noun}: ${nameOf(next)}` }, nameOf(next), " ", arrow())));
  }

  function itemBody(summary, highlights, label, tags, links) {
    return [
      summary && h("p", { class: "item-summary", "data-a": true }, summary),
      highlights && highlights.length && h("ul", { class: "highlights" },
        highlights.map((t) => h("li", { "data-a": true }, t))),
      tags && tags.length && h("p", { class: "tags", "data-a": true },
        h("span", { class: "tags-label" }, label), tags.join(" · ")),
      links && links.length && h("p", { class: "item-links", "data-a": true }, links),
    ];
  }

  function render() {
    // home
    document.getElementById("home-name").textContent = PROFILE.name;
    document.title = PROFILE.name;
    slot("tagline").replaceChildren(...accented(PROFILE.tagline));
    slot("roles").replaceChildren(...PROFILE.roles.flatMap((r, i) => [
      i ? h("span", { class: "sep", "aria-hidden": "true" }, "·") : null,
      h("span", { class: "role" }, r),
    ]).filter(Boolean));
    slot("bio").textContent = PROFILE.bio;

    const homeRow = (href, label, meta, aria) => h("li", { "data-a": true },
      h("a", { class: "row", href, "aria-label": aria },
        h("span", { class: "label" }, label),
        h("span", { class: "meta" }, meta)));

    slot("home-experience").replaceChildren(...EXPERIENCE.slice(0, 3).map((x) =>
      homeRow(`#experience/${x.slug}`, x.short, x.year, `${x.company}, ${x.title}, ${x.year}`)));
    slot("home-projects").replaceChildren(...PROJECTS.slice(0, 3).map((p) =>
      homeRow(`#projects/${p.slug}`, p.short, p.tag, `${p.name}, ${p.tag}`)));

    // lists, item pages, the rest
    const views = [
      listView("experience", EXPERIENCE, xpCard),
      ...EXPERIENCE.map((x, i) => itemView("experience", EXPERIENCE, i,
        { eyebrow: `${x.term} · ${x.location}`, title: x.company, sub: x.title },
        itemBody(x.summary, x.highlights, "tools", x.tools))),
      listView("projects", PROJECTS, pjCard),
      ...PROJECTS.map((p, i) => itemView("projects", PROJECTS, i,
        { eyebrow: p.kind, title: p.name, sub: p.summary },
        itemBody(null, p.highlights, "built with", p.stack, [
          !isEmpty(p.live) && outLink(p.live, ["live site ", arrow("↗")], { class: "item-link", "aria-label": `${p.name} live site (opens in a new tab)` }),
          !isEmpty(p.github) && outLink(p.github, ["github ", arrow("↗")], { class: "item-link", "aria-label": `${p.name} on GitHub (opens in a new tab)` }),
        ].filter(Boolean)))),
      section("the-rest", "t-the-rest",
        backButton(),
        h("h2", { class: "view-title", id: "t-the-rest", tabindex: "-1", "data-a": true }, "The rest"),
        h("div", { class: "scroll" },
          h("p", { class: "rest-intro", "data-a": true }, THE_REST.intro),
          h("dl", { class: "rest" }, THE_REST.items.map((it) =>
            h("div", { "data-a": true }, h("dt", {}, it.label), h("dd", {}, it.text)))))),
    ];
    stage.append(...views);

    // contact links
    const contact = [
      ["email", isEmpty(LINKS.email) ? "" : `mailto:${LINKS.email}`],
      ["github", LINKS.github],
      ["linkedin", LINKS.linkedin],
      ["cv", LINKS.cv],
    ].filter(([, href]) => !isEmpty(href));
    slot("links").replaceChildren(...contact.flatMap(([label, href], i) => [
      i ? h("span", { class: "dot", "aria-hidden": "true" }, "·") : null,
      outLink(href, label, label === "email" ? { "aria-label": `Email ${LINKS.email}` } : {}),
    ]).filter(Boolean));

    // stagger order: each view's animated pieces get an index in reading order
    stage.querySelectorAll(".view").forEach((view) => {
      view.querySelectorAll("[data-a]").forEach((el, i) => {
        el.style.setProperty("--i", Math.min(i + 1, MAX_STAGGER_STEPS));
      });
    });
  }

  /* ---------- fit: shrink a view's type until it fits; long lists scroll inside ---------- */

  function fit(view) {
    if (!view || view.hidden) return;
    const scroller = view.querySelector(".scroll");
    const cs = getComputedStyle(stage);
    const room = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const overflowing = () => scroller
      ? scroller.scrollHeight > scroller.clientHeight + 1
      : view.scrollHeight > room + 1;
    const min = scroller ? 0.86 : 0.6;

    let f = 1;
    view.style.setProperty("--fit", "1");
    while (overflowing() && f > min) {
      f -= 0.02;
      view.style.setProperty("--fit", f.toFixed(2));
    }
    if (scroller) {
      scroller.scrollTop = 0;
      scroller.classList.toggle("is-scrollable", overflowing());
      scroller.classList.remove("at-end");
    }
  }

  stage.addEventListener("scroll", (e) => {
    const s = e.target;
    if (!s.classList || !s.classList.contains("scroll")) return;
    s.classList.toggle("at-end", s.scrollTop + s.clientHeight >= s.scrollHeight - 2);
  }, true);

  /* ---------- hash router: fade the old view out, stagger the new one in ---------- */

  let current = null;
  let swapTimer = 0;

  const viewFor = (route) => document.getElementById(route ? `view-${route.replace("/", "-")}` : "view-home");
  const routeFromHash = () => {
    const r = decodeURIComponent(location.hash.slice(1)).replace(/^\/+|\/+$/g, "");
    return r && r !== "home" && viewFor(r) ? r : "";
  };

  function show(route, { initial = false } = {}) {
    if (route === current) return;
    const prev = current === null ? null : viewFor(current);
    const next = viewFor(route);
    current = route;
    clearTimeout(swapTimer);

    // the mountains start moving straight away, alongside the fade-out
    document.body.classList.toggle("is-detail", route !== "");

    const swap = () => {
      stage.querySelectorAll(".view").forEach((v) => {
        if (v !== next) { v.hidden = true; v.classList.remove("is-in", "is-out"); }
      });
      next.classList.remove("is-in", "is-out");
      document.body.dataset.view = route || "home";
      next.hidden = false;
      fit(next);
      void next.offsetWidth; // commit the hidden starting state before animating in
      next.classList.add("is-in");
      if (!initial) {
        const target = next.querySelector("[tabindex='-1']");
        if (target) target.focus({ preventScroll: true });
      }
    };

    if (prev && prev !== next && !prev.hidden) {
      prev.classList.add("is-out");
      swapTimer = setTimeout(swap, reducedMotion.matches ? 120 : OUT_MS);
    } else {
      swap();
    }
  }

  function go(route) {
    if (route) {
      location.hash = route;
    } else {
      if (location.hash) history.pushState(null, "", location.pathname + location.search);
      show("");
    }
  }

  /* ---------- wire up ---------- */

  render();

  stage.addEventListener("click", (e) => {
    if (e.target.closest(".back")) go("");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && current) go("");
  });

  window.addEventListener("hashchange", () => show(routeFromHash()));
  window.addEventListener("popstate", () => show(routeFromHash()));

  let raf = 0;
  const refit = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => fit(viewFor(current)));
  };
  window.addEventListener("resize", refit);
  if (window.visualViewport) window.visualViewport.addEventListener("resize", refit);

  // Opening sequence: wait for the font (so nothing reflows mid-animation),
  // then the mountains rise, the seal stamps, and the text staggers in.
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    document.body.classList.remove("is-loading");
    const route = routeFromHash();
    document.body.classList.toggle("is-detail", route !== "");
    setTimeout(() => {
      show(route, { initial: true });
      // later navigations use a tighter stagger than the opening
      setTimeout(() => document.body.classList.remove("is-first"), 1400);
    }, reducedMotion.matches ? 60 : 260);
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(start);
    setTimeout(start, 1500); // never hold the page for a slow font
  } else {
    start();
  }
})();
