# berkaycloud

Personal site of Berkay Ay (ShadesOfDeath). Built the same way the apps are:
no framework, no build step, no analytics. Three HTML files, one stylesheet,
two scripts.

```
index.html          landing: about, rules, selected work, support
projects.html       the work
404.html            not found
assets/css/site.css design system (dark + light, tokens at the top)
assets/js/data.js   all content: projects + EN/TR strings — edit this
assets/js/site.js   behaviour: i18n, theme, clock, project lists
assets/img/         portrait (WebP) and favicon
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8080
```

## Deploy

Static. Drop it on Vercel, Netlify, Cloudflare Pages or GitHub Pages.
`vercel.json` turns on clean URLs (`/projects`) and long cache for assets.

## Editing content

Everything the site says lives in `assets/js/data.js`:

- `projects` — name, repo, download, version, license, stack, and an EN/TR
  tagline and one-line description.
- `i18n.en` / `i18n.tr` — every other string on the site.

To add a project, add an object to `projects`. Both pages pick it up.
