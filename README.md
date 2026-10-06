# Verdane Pharma - static website

A multi-page static site (no build step, no dependencies).

## Run
Open `index.html` in a browser, or run `python -m http.server 8000` from this
folder and visit `http://localhost:8000/`. You can also deploy the folder to a
static host such as Netlify or GitHub Pages.

## Structure
- `index.html` - home page and medicine browser
- `about.html` - company information
- `contact.html` - contact details
- `style.css` - shared styling
- `script.js` - medicine content, inline SVG artwork, and routing
- `images/` - optional image assets; the current illustrations are generated inline

## Add a medicine
1. Add an object to `M` in `script.js`.
2. Add a matching `id` entry to `IMG` in `script.js` (colour, pack type, label).

Sample company and content only; not medical advice.
