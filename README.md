# One Page Personal Website

A one-screen personal site: plain HTML, CSS and JavaScript, no build step.
It never scrolls; clicking a section swaps the content in place.

Live: https://tristanyiko.github.io/one-page-personal-website/

## Edit the content

All text and links live at the top of `script.js`, under **EDIT YOUR CONTENT HERE**:

| Object       | What it controls                                              |
| ------------ | ------------------------------------------------------------- |
| `LINKS`      | email, GitHub, LinkedIn, and an optional CV PDF               |
| `PROFILE`    | name, tagline (`*stars*` mark the red words), roles, bio      |
| `EXPERIENCE` | roles; the first three show on the home screen                |
| `PROJECTS`   | projects and their GitHub links; the first three show on home |
| `THE_REST`   | the personal page                                             |

Anything still set to `"TODO"` is a placeholder. It shows on the page as-is, and
placeholder links do nothing, so they are easy to find.

To add a CV, drop the PDF in this folder and set `LINKS.cv = "cv.pdf"`.

Keep each section to about four items. The layout shrinks the type to fit short
screens, but the more you add, the smaller it gets.

Colours, spacing and the mountain heights are CSS variables at the top of `styles.css`.

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
