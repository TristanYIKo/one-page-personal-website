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

// Experience, newest first. The first three show on the home screen.
// In any text, *stars* mark words drawn in the accent red.
const EXPERIENCE = [
  {
    slug: "allstate",
    short: "Allstate",          // home screen name
    year: "2026",               // home screen year
    current: true,              // filled marker on the timeline
    company: "Allstate Canada",
    title: "Provincial Product Analyst",
    term: "Fall 2026",          // right side of the timeline
    when: "Sep – Dec 2026",     // top line of the role's page
    where: "Remote",
    result: "Built a reinsurance ceding approach adopted for Ontario.", // one line on the timeline
    intro: "I was on the Ontario product team, which owns pricing, product rules and performance reporting. My work sat between the data and the decisions.",
    highlights: [
      { title: "Reinsurance ceding approach", text: "Used claims data to find unprofitable segments and designed a new way to cede them. Presented to leadership and *adopted for Ontario*." },
      { title: "Automated reporting", text: "Rebuilt the team's recurring performance reports in Python so the data pulls and analysis run on their own instead of by hand." },
      { title: "Dashboards and pricing support", text: "Maintained the Excel models and Power BI dashboards the team uses, and supported pricing and competitive analysis." },
    ],
    tools: ["Python", "Power BI", "Excel", "SQL"],
  },
  {
    slug: "mto",
    short: "MTO",
    year: "2026",
    company: "Ministry of Transportation",
    title: "Technical Analyst",
    term: "Winter 2026",
    when: "Jan – Apr 2026",
    where: "Toronto, ON",
    result: "Replaced scattered spreadsheets with one central database for tracking work arrangements.",
    intro: "I worked on the Ministry's internal web applications: keeping them running, fixing what broke between the layers, and building the databases behind them.",
    highlights: [
      { title: "Keeping internal apps running", text: "Traced and resolved data-flow and communication issues between the frontend, the backend server and the database." },
      { title: "Safe database migrations", text: "Wrote migration scripts that updated large sets of records *without data loss or errors*." },
      { title: "Work-arrangement tracker", text: "Built a centralized database to track employee work arrangements, *replacing scattered spreadsheets* with one organized platform." },
    ],
    tools: ["Angular", "Spring Boot"],
  },
  {
    slug: "iovate",
    short: "Iovate",
    year: "2025",
    company: "Iovate",
    title: "Supply Chain Intern",
    term: "Summer 2025",
    when: "May – Aug 2025",
    where: "Oakville, ON",
    result: "Cut manual inventory planning time by over 90% with an automated reorder tool.",
    intro: "I was on the supply chain team at Iovate Health Sciences, building tools that took manual planning and data entry off the team's plate.",
    highlights: [
      { title: "Automated inventory planning", text: "Built an Excel tool covering more than 800 products that calculates reorder quantities and schedules, *cutting manual planning time by over 90%*." },
      { title: "Data that syncs itself", text: "Wrote Python scripts that upload and sync supply chain data automatically, eliminating manual entry mistakes." },
      { title: "Dashboards and fulfillment", text: "Designed Power BI dashboards for team-wide metrics and analyzed warehouse shipping errors to *reduce fulfillment mistakes by 35%*." },
    ],
    tools: ["Excel", "SQL", "Python", "Power BI"],
  },
];

// Projects. The first three show on the home screen.
// "live" and "github" are optional: "" hides that link (e.g. a private repo).
// "images" are 16:10 screenshots or GIFs in images/projects/, first one shown first.
const PROJECTS = [
  {
    slug: "code-ranch",
    short: "Code Ranch",          // home screen name
    tag: "Web",                   // home screen label
    name: "Code Ranch",
    kind: "Web app · Typing game",
    summary: "A cowboy typing game where you beat bandits by typing real code, fast.",
    stack: ["Next.js", "React", "Supabase"],
    live: "https://code-ranch.vercel.app/",
    github: "",                   // repo is private
    images: [
      { src: "images/projects/code-ranch-1.webp", alt: "Code Ranch home page: a cowboy faces a bandit with code over his head" },
      { src: "images/projects/code-ranch-2.webp", alt: "Ranch level panel with daily and weekly tasks" },
      { src: "images/projects/code-ranch-3.webp", alt: "Global leaderboard ranked by average WPM" },
      { src: "images/projects/code-ranch-4.webp", alt: "Friends list with each friend's level" },
      { src: "images/projects/code-ranch-5.webp", alt: "Practice duel against a bot, racing through a Python snippet" },
      { src: "images/projects/code-ranch-6.webp", alt: "A 60-second round, typing the line over the bandit's head" },
    ],
  },
  {
    slug: "factorfive",
    short: "FactorFive",
    tag: "Finance",
    name: "FactorFive",
    kind: "Web app · Equity analysis",
    summary: "Five-factor stock analysis that benchmarks a company against size-matched industry peers, and shows its work.",
    stack: ["Next.js", "TypeScript", "Finnhub API"],
    live: "https://factor-five.vercel.app/",
    github: "https://github.com/TristanYIKo/FactorFive",
    images: [
      { src: "images/projects/factorfive-1.webp", alt: "FactorFive home page with an example score of 70" },
      { src: "images/projects/factorfive-2.webp", alt: "FactorFive analysis of Apple (AAPL) with a score of 50" },
      { src: "images/projects/factorfive-3.webp", alt: "FactorFive market calendar in month view" },
      { src: "images/projects/factorfive-4.webp", alt: "FactorFive market calendar listing upcoming releases and holidays" },
    ],
  },
  {
    slug: "roastbot",
    short: "RoastBot",
    tag: "AI",
    name: "RoastBot",
    kind: "Web app · AI resume review",
    summary: "AI resume review that gives a score for the field you're targeting, a roast, and the fixes that matter most.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Gemini API"],
    live: "https://roastbot-three.vercel.app/",
    github: "https://github.com/TristanYIKo/AIResumeRoaster",
    images: [
      { src: "images/projects/roastbot-1.webp", alt: "RoastBot home page: pick a field and drop in a resume" },
      { src: "images/projects/roastbot-2.webp", alt: "RoastBot working through a software resume step by step" },
      { src: "images/projects/roastbot-3.webp", alt: "A software resume scored 88 out of 100, with the roast underneath" },
      { src: "images/projects/roastbot-4.webp", alt: "The three fixes to make first, beside the score for each category" },
    ],
  },
];

// The #the-rest page: a grid of tiles. Hovering over a tile swaps its
// short line for the longer "story" (optional: leave it out and the tile
// just shows its line). Rewrite any of these in your own words.
//   photos: images in images/rest/. Only the Koko and gym tiles have a photo
//           area; with more than one photo the tile cycles through them.
const THE_REST = {
  intro: "A few things I spend time on outside of work.",
  tiles: [
    {
      id: "koko", title: "Koko", note: "our queen",
      line: "Loves food.",
      story: "Will bark at you unless you have food.",
      photos: [
        { src: "images/rest/koko.webp", alt: "Koko, a small white dog, resting on a grey couch", position: "50% 42%" },
      ],
    },
    {
      id: "snowboarding", title: "snowboarding",
      line: "Since I was 6.",
      story: "The reason I look forward to winter.",
    },
    {
      id: "food", title: "food",
      line: "Trying new places.",
      story: "Always looking for somewhere new to eat. Happy to share recommendations.",
    },
    {
      id: "gym", title: "gym",
      line: "Strength training.",
      story: "Where you'll find me every day.",
      photos: [
        { src: "images/rest/gym.webp", alt: "Mirror selfie at the gym in a grey training shirt", position: "50% 32%" },
      ],
    },
    {
      id: "taekwondo", title: "taekwondo",
      line: "Growing up.",
    },
    {
      id: "poker", title: "poker",
      line: "With friends.",
    },
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

  const chips = (items, label) =>
    h("ul", { class: "chips", "aria-label": label }, items.map((t) => h("li", {}, t)));

  // Previous / next along the bottom of a role or project page.
  function pager(kind, items, i) {
    if (items.length < 2) return null;
    const prev = items[(i - 1 + items.length) % items.length];
    const next = items[(i + 1) % items.length];
    const noun = kind === "experience" ? "role" : "project";
    return h("nav", { class: "pager", "aria-label": `Other ${kind}`, "data-a": true },
      h("a", { href: `#${kind}/${prev.slug}`, "aria-label": `Previous ${noun}: ${prev.short}` }, arrow("←"), " ", prev.short),
      h("span", { class: "pager-count" }, `${i + 1} / ${items.length}`),
      h("a", { href: `#${kind}/${next.slug}`, "aria-label": `Next ${noun}: ${next.short}` }, next.short, " ", arrow()));
  }

  // #experience: every role on a timeline. The current role has a filled marker.
  function experienceList() {
    return section("experience", "t-experience",
      backButton(),
      h("h2", { class: "view-title list-title", id: "t-experience", tabindex: "-1", "data-a": true }, "Experience"),
      h("div", { class: "scroll" },
        h("ol", { class: "timeline" }, EXPERIENCE.map((x) =>
          h("li", { class: x.current ? "tl-item is-current" : "tl-item", "data-a": true },
            h("span", { class: "tl-mark", "aria-hidden": "true" }),
            h("a", { class: "tl-link", href: `#experience/${x.slug}` },
              h("div", { class: "tl-head" },
                h("p", { class: "tl-who" },
                  h("span", { class: "tl-company" }, x.company),
                  h("span", { class: "tl-role" }, x.title)),
                h("span", { class: "tl-term" }, x.term)),
              h("p", { class: "tl-result" }, accented(x.result)),
              h("div", { class: "tl-foot" },
                chips(x.tools, "Tools"),
                h("span", { class: "tl-more" }, "more ",
                  h("span", { class: "plus", "aria-hidden": "true" }, "+"),
                  h("span", { class: "sr-only" }, ` about ${x.company}`)))))))));
  }

  // #experience/<slug>: one role, with numbered highlights.
  function rolePage(x, i) {
    const id = `t-experience-${x.slug}`;
    return section(`experience/${x.slug}`, id,
      backButton(),
      h("header", { class: "role-head", "data-a": true },
        h("p", { class: "eyebrow" }, [x.when, x.where].filter(Boolean).join(" · ")),
        h("h2", { class: "view-title role-title", id, tabindex: "-1" },
          x.company, " ", h("span", { class: "role-name" }, x.title))),
      h("div", { class: "scroll" },
        h("p", { class: "role-intro", "data-a": true }, accented(x.intro)),
        h("ol", { class: "numbered" }, x.highlights.map((hl, k) =>
          h("li", { "data-a": true },
            h("span", { class: "num", "aria-hidden": "true" }, String(k + 1).padStart(2, "0")),
            h("div", {},
              h("h3", { class: "hl-title" }, hl.title),
              h("p", { class: "hl-text" }, accented(hl.text)))))),
        x.tools && x.tools.length && h("div", { class: "tools-row", "data-a": true },
          h("span", { class: "tools-label" }, "tools"), chips(x.tools, "Tools"))),
      pager("experience", EXPERIENCE, i));
  }

  // #projects: every project as a card.
  function projectList() {
    return section("projects", "t-projects",
      backButton(),
      h("h2", { class: "view-title list-title", id: "t-projects", tabindex: "-1", "data-a": true }, "Projects"),
      h("div", { class: "scroll" },
        h("ul", { class: "cards cards-projects" }, PROJECTS.map((p) => h("li", { "data-a": true },
          h("a", { class: "card", href: `#projects/${p.slug}` },
            p.images && p.images[0] && h("span", { class: "card-shot" },
              h("img", { src: p.images[0].src, alt: "", width: 1200, height: 750, loading: "lazy", decoding: "async" })),
            h("div", { class: "card-head" },
              h("span", { class: "card-title" }, p.name),
              h("span", { class: "card-meta" }, p.tag)),
            h("p", { class: "card-blurb" }, p.summary),
            h("span", { class: "card-cta" }, "view project ", arrow(),
              h("span", { class: "sr-only" }, `: ${p.name}`))))))));
  }

  // Screenshot frame (a small browser window) with thumbnails underneath.
  function gallery(p) {
    const imgs = p.images || [];
    const first = imgs[0];
    const screen = first
      ? h("img", { class: "shot", src: first.src, alt: first.alt, width: 1200, height: 750, loading: "lazy", decoding: "async" })
      : h("p", { class: "screen-empty" }, "screenshot coming soon");
    return h("div", { class: "gallery", "data-a": true },
      h("div", { class: "frame" },
        h("div", { class: "window" },
          h("div", { class: "window-bar", "aria-hidden": "true" }, h("i"), h("i"), h("i")),
          h("div", { class: "screen" }, screen))),
      imgs.length > 1 && h("div", { class: imgs.length > 4 ? "thumbs thumbs-many" : "thumbs", role: "group", "aria-label": `${p.name} screenshots` },
        imgs.map((im, k) => h("button", {
          type: "button", class: "thumb", "aria-pressed": k === 0 ? "true" : "false",
          "aria-label": `Screenshot ${k + 1}: ${im.alt}`, "data-src": im.src, "data-alt": im.alt,
        }, h("img", { src: im.src, alt: "", width: 1200, height: 750, loading: "lazy", decoding: "async" })))));
  }

  // #projects/<slug>: screenshots on the left, the story on the right.
  function projectPage(p, i) {
    const id = `t-projects-${p.slug}`;
    const links = [
      !isEmpty(p.live) && outLink(p.live, ["live site ", arrow("↗")], { class: "item-link is-primary", "aria-label": `${p.name} live site (opens in a new tab)` }),
      !isEmpty(p.github) && outLink(p.github, ["github ", arrow("↗")], { class: "item-link", "aria-label": `${p.name} on GitHub (opens in a new tab)` }),
    ].filter(Boolean);
    const view = section(`projects/${p.slug}`, id,
      backButton(),
      h("div", { class: "scroll" },
        h("div", { class: "pj-layout" },
          gallery(p),
          h("div", { class: "pj-info", "data-a": true },
            h("p", { class: "eyebrow" }, p.kind),
            h("h2", { class: "view-title pj-title", id, tabindex: "-1" }, p.name),
            h("p", { class: "pj-summary" }, p.summary),
            p.stack && p.stack.length && h("p", { class: "pj-stack" }, p.stack.join(" · ")),
            links.length && h("p", { class: "item-links" }, links)))),
      pager("projects", PROJECTS, i));
    view.classList.add("view-project");
    return view;
  }

  // #the-rest: intro on the left, tiles on the right.
  function restTile(t) {
    const photos = t.photos || null;
    const story = t.story ? h("p", { class: "tile-story" }, t.story) : null;
    const photoArea = photos && h("div", { class: "tile-photo" },
      photos.length
        ? photos.map((p, k) => h("img", {
            class: k === 0 ? "is-shown" : null, src: p.src, alt: p.alt || t.title,
            style: p.position ? `object-position: ${p.position}` : null,
            loading: "lazy", decoding: "async",
          }))
        : h("span", { class: "tile-placeholder" }, "photo"),
      photos.length > 1 && h("div", { class: "tile-dots", role: "group", "aria-label": `${t.title} photos` },
        photos.map((_, k) => h("button", {
          type: "button", class: "tile-dot", "aria-label": `Photo ${k + 1} of ${photos.length}`,
          "aria-pressed": k === 0 ? "true" : "false", "data-index": k,
        }))),
      story);
    return h("article", {
      class: `tile tile-${t.id}${photos ? " has-photo" : ""}${story ? " has-story" : ""}`,
      tabindex: story ? "0" : null, "data-a": true,
    },
      photoArea,
      h("div", { class: "tile-body" },
        h("h3", { class: "tile-title" }, t.title,
          t.note && h("span", { class: "tile-note" }, ` · ${t.note}`)),
        h("div", { class: "tile-text" },
          h("p", { class: "tile-line" }, t.line),
          !photos && story)),
      h("span", { class: "tile-mark", "aria-hidden": "true" }));
  }

  // Show photo `k` in a tile that has several.
  function showTilePhoto(tile, k) {
    const imgs = tile.querySelectorAll(".tile-photo img");
    const dots = tile.querySelectorAll(".tile-dot");
    imgs.forEach((im, i) => im.classList.toggle("is-shown", i === k));
    dots.forEach((d, i) => d.setAttribute("aria-pressed", String(i === k)));
  }

  // Multi-photo tiles crossfade slowly while the page is open (opacity only, so
  // it also runs with reduced motion), never while someone is on the tile.
  setInterval(() => {
    if (document.hidden) return;
    stage.querySelectorAll("#view-the-rest:not([hidden]) .tile-dots").forEach((dots) => {
      const tile = dots.closest(".tile");
      if (tile.matches(":hover, :focus-visible")) return;
      const n = dots.children.length;
      const cur = [...dots.children].findIndex((d) => d.getAttribute("aria-pressed") === "true");
      showTilePhoto(tile, (cur + 1) % n);
    });
  }, 4200);

  function restPage() {
    const view = section("the-rest", "t-the-rest",
      h("div", { class: "scroll" },
        h("div", { class: "rest-layout" },
          h("div", { class: "rest-side" },
            backButton(),
            h("h2", { class: "view-title rest-title", id: "t-the-rest", tabindex: "-1", "data-a": true }, "The rest"),
            h("p", { class: "rest-intro", "data-a": true }, THE_REST.intro),
            h("p", { class: "rest-hint", "data-a": true },
              h("span", { class: "hint-hover" }, "hover a tile for the story"),
              h("span", { class: "hint-tap" }, "tap a tile for the story"))),
          h("div", { class: "tiles" }, THE_REST.tiles.map(restTile)))));
    view.classList.add("view-rest");
    return view;
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
      experienceList(),
      ...EXPERIENCE.map(rolePage),
      projectList(),
      ...PROJECTS.map(projectPage),
      restPage(),
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

    // Analytics: Vercel's script only counts a page when the URL path changes,
    // and every section here lives at "/", so report section changes by hand.
    // (The first load is counted by the script itself.)
    if (!initial && typeof window.va === "function") window.va("pageview", { path: "/" + route });

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
    if (e.target.closest(".back")) { go(""); return; }
    const thumb = e.target.closest(".thumb");
    if (thumb) showShot(thumb);
    const dot = e.target.closest(".tile-dot");
    if (dot) { showTilePhoto(dot.closest(".tile"), Number(dot.dataset.index)); return; }
  });

  function showShot(thumb) {
    const gal = thumb.closest(".gallery");
    const shot = gal.querySelector(".shot");
    if (!shot || thumb.getAttribute("aria-pressed") === "true") return;
    gal.querySelectorAll(".thumb").forEach((t) => t.setAttribute("aria-pressed", String(t === thumb)));
    shot.classList.add("is-swapping");
    setTimeout(() => {
      const done = () => shot.classList.remove("is-swapping");
      shot.addEventListener("load", done, { once: true });
      shot.src = thumb.dataset.src;
      shot.alt = thumb.dataset.alt;
      if (shot.complete) done();
    }, reducedMotion.matches ? 0 : 140);
  }

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
      setTimeout(() => document.body.classList.remove("is-first"), 1100);
    }, reducedMotion.matches ? 40 : 140);
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(start);
    setTimeout(start, 1000); // never hold the page for a slow font
  } else {
    start();
  }
})();
