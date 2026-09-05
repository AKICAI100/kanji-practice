# Kanji Garden

Kanji Garden is a child-friendly kanji learning web app for the 182 requested study items. Its English-first interface supports tracing, free writing, readings, quizzes, a collection, and progress tracking.

## Files

- `index.html` — app screens and accessible interface
- `style.css` — responsive iPhone/desktop design
- `kanji-data.js` — ordered 182-item learning data
- `tracing.js` — pointer/touch canvas drawing
- `progress.js` — local progress storage
- `app.js` — navigation, lessons, quizzes, and UI behavior
- `assets/pig-mascot.svg` — original mascot artwork

## Run locally

Open `index.html` directly in a modern browser. For the most consistent behavior, serve the folder with any static server, for example `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Publish with GitHub Pages

Push these files to a GitHub repository. In **Settings → Pages**, select **Deploy from a branch**, choose the branch containing these files and the root folder, then save. No build step is required.

## Progress data

Practice counts, learned status, recent items, and quiz scores are saved in the browser with `localStorage` under `kanjiGardenProgress.v1`. Progress stays on that device/browser after the page is closed.

## Stroke order

The app never invents stroke order. It provides a pale font guide and touch/mouse drawing for every item. The data model includes a reserved `strokes` field so a verified external stroke-order source can be connected later; until then, the Watch button clearly explains that verified stroke data is unavailable.
