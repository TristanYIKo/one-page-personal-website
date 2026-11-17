# One Page Personal Website

A one-screen personal site: plain HTML, CSS and JavaScript, no build step.
The page never scrolls; clicking a section swaps the content in place, and long
lists scroll inside their own panel.

Live: https://tristanyiko.github.io/one-page-personal-website/

## Pages

| Link                     | Shows                                                |
| ------------------------ | ---------------------------------------------------- |
| `#` (home)               | intro, top 3 experiences, top 3 projects             |
| `#experience`            | every role ("view all")                              |
| `#experience/<slug>`     | one role's own page, with previous / next            |
| `#projects`              | every project ("view all")                           |
| `#projects/<slug>`       | one project's own page, with live and GitHub links   |
| `#the-rest`              | the personal page                                    |

Every "← back" button (and the Escape key) returns to the home screen; the
browser back button retraces your steps.

## Edit the content

All text and links live at the top of `script.js`, under **EDIT YOUR CONTENT HERE**:

| Object       | What it controls                                                    |
| ------------ | ------------------------------------------------------------------- |
| `LINKS`      | email, GitHub, LinkedIn, and an optional CV PDF                     |
| `PROFILE`    | name, tagline (`*stars*` mark the red words), roles, bio            |
| `EXPERIENCE` | roles, newest first; the first three show on the home screen       |
| `PROJECTS`   | projects; the first three show on the home screen                   |
| `THE_REST`   | the personal page                                                   |

Each role and project has a `slug`, the short id in its link
(`#projects/code-ranch`). Keep it lowercase with dashes, and unique in its list.
A project's `live` and `github` links are optional: set either to `""` to hide it
(for example, a private repo).

To add a CV, drop the PDF in this folder and set `LINKS.cv = "cv.pdf"`.

The layout shrinks the type a little to fit short screens before a list starts
scrolling, so about four highlights per page keeps everything readable.

Colours, spacing and the mountain heights are CSS variables at the top of `styles.css`.

## Sun and moon

`sky.js` puts a sun or a moon over the mountains based on the visitor's own clock:

- **Day:** the sun follows its real path through their sky. Its position comes
  from their local time and an approximate location taken from their time zone
  (no location prompt). It rises and sets behind the peaks.
- **Night:** the moon crosses from sunset to sunrise, highest around the middle
  of the night, in tonight's real phase.
- When it drifts behind the text it fades to a soft wash so nothing gets hard to read.

To change how high the arcs ride, edit `ARC_LIFT` (sun, 1 = true scale) and
`MOON_PEAK` near the middle of `sky.js`.

Preview any time by adding `?time=` to the URL, e.g. `index.html?time=07:30` or
`?time=2026-06-21T13:00`.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

then visit http://localhost:8000.

## Redeploy

GitHub Pages serves the `main` branch root, so pushing is deploying:

```bash
git add -A
git commit -m "Update content"
git push
```

The live site updates a minute or two later.
