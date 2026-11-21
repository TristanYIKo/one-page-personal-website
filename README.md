# One Page Personal Website

A one-screen personal site: plain HTML, CSS and JavaScript, no build step.
The page never scrolls; clicking a section swaps the content in place, and long
lists scroll inside their own panel.

Live: https://www.tristanko.ca (Vercel). A copy also runs on GitHub Pages at
https://tristanyiko.github.io/one-page-personal-website/

## Pages

| Link                     | Shows                                                |
| ------------------------ | ---------------------------------------------------- |
| `#` (home)               | intro, top 3 experiences, top 3 projects             |
| `#experience`            | every role ("view all")                              |
| `#experience/<slug>`     | one role's own page, with previous / next            |
| `#projects`              | every project ("view all")                           |
| `#projects/<slug>`       | one project's own page, with live and GitHub links   |
| `#the-rest`              | the personal page (tiles with hover stories)         |

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
| `THE_REST`   | the personal page: an intro and a grid of tiles                     |

Each role and project has a `slug`, the short id in its link
(`#projects/code-ranch`). Keep it lowercase with dashes, and unique in its list.
In any text, `*stars*` mark words drawn in red.

A role has a one-line `result` (shown on the timeline), a first-person `intro`,
numbered `highlights` (each a `title` and `text`) and `tools` (shown as tags).
Set `current: true` on the role you're in now to fill its timeline marker.

A project has a `summary`, a `stack`, optional `live` and `github` links (`""`
hides one, for example a private repo) and `images`: 16:10 screenshots or GIFs
in `images/projects/`, each with `alt` text. The first image shows first; with
more than one, thumbnails appear underneath. About 1200 x 750 is plenty.

On "the rest", each tile has a short `line` and a longer `story` that appears
on hover (or tap on phones). The Koko and gym tiles have a photo area set by
`photos` (images in `images/rest/`); with several photos the tile crossfades
between them every few seconds, and the dots switch photos by hand. Add
`position: "50% 30%"` to a photo to choose which part shows when it's cropped.

To add a CV, drop the PDF in this folder and set `LINKS.cv = "cv.pdf"`.

The layout shrinks the type a little to fit short screens before a list starts
scrolling, so about four highlights per page keeps everything readable.

Colours, spacing and the mountain heights are CSS variables at the top of `styles.css`.

## Sun and moon

`sky.js` puts a sun or a moon over the mountains on the home page, based on the visitor's own clock:

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

Pushing `main` deploys everywhere: Vercel rebuilds www.tristanko.ca and GitHub
Pages updates its copy, both within a minute or two.

```bash
git add -A
git commit -m "Update content"
git push
```

## Analytics

Vercel Web Analytics is loaded from a small script at the bottom of the `<head>`
in `index.html`. It only runs on tristanko.ca and Vercel URLs, and reports each
section as its own page (`/experience`, `/projects/roastbot`). Visitor numbers
are on the project's Analytics tab in Vercel.
