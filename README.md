# Kanji Garden

Kanji Garden is a child-friendly kanji learning web app for the 182 requested study items. Its English-first interface supports tracing, free writing, readings, quizzes, a collection, and progress tracking.

## Files

- `index.html` — app screens and accessible interface
- `style.css` — responsive iPhone/desktop design
- `kanji-data.js` — ordered 182-item learning data
- `tracing.js` — pointer/touch canvas drawing
- `stroke-data/kanjivg-strokes.js` — local KanjiVG stroke paths and number positions
- `tools/sync-kanjivg.mjs` — regenerates the local subset and coverage audit
- `progress.js` — local progress storage
- `app.js` — navigation, lessons, quizzes, and UI behavior
- `assets/pig-mascot.svg` — original mascot artwork

## Run locally

Open `index.html` directly in a modern browser. For the most consistent behavior, serve the folder with any static server, for example `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Publish with GitHub Pages

Push these files to a GitHub repository. In **Settings → Pages**, select **Deploy from a branch**, choose the branch containing these files and the root folder, then save. No build step is required.

## Progress data

Practice counts, learned status, recent items, and quiz scores are saved in the browser with `localStorage` under `kanjiGardenProgress.v1`. Progress stays on that device/browser after the page is closed.

## Stroke order and KanjiVG

Guided Strokes uses a local subset of [KanjiVG](https://kanjivg.tagaini.net/) so it works offline. KanjiVG is copyright © 2009–2026 Ulrich Apel and contributors and is released under the [Creative Commons Attribution-ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-sa/3.0/). This attribution and license apply to the KanjiVG-derived files in `stroke-data/`; they do not change the license of unrelated Kanji Garden code or assets.

After changing `kanji-data.js`, run `node tools/sync-kanjivg.mjs`. The script derives each filename from the character's Unicode code point, downloads only the required official SVG files, generates the local runtime subset, and writes `stroke-data/coverage.json`. It exits with an error when any ordinary kanji is unavailable. The iteration mark `々` is reported separately.
