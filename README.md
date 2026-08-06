# Saba Grigolia — Portfolio

A single-page portfolio built with React 19 + Vite. Cold, dark theme with a
custom animated "network field" as the signature visual — a nod to the
networking/robotics work in the Projects section.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The static site is output to `dist/`.

## Before you publish — things to edit

- **Contact email** — `src/components/Contact.jsx` has a placeholder
  (`your.email@example.com`). Swap it for your real address.
- **Project links** — `src/components/Projects.jsx` has a `PROJECTS` array.
  The Async Race repo/demo links are filled in; add `repo`/`demo` URLs for
  Duckietown Convoying and the chat protocol project once/if they're public.
- **Resume/CV** — there's no download link yet. If you want one, drop a PDF
  in `public/` and link it from the hero or contact section.

## Deploy to GitHub Pages

Same pattern as your other repos (GitHub Actions -> Pages):

1. Push this project to a new GitHub repo.
2. In `vite.config.js`, set `base: '/<repo-name>/'` (skip this if deploying
   to a `<username>.github.io` root repo).
3. Add a workflow (`.github/workflows/deploy.yml`) that runs `npm run build`
   and publishes `dist/` to the `gh-pages` branch, or use the
   `actions/deploy-pages` action directly.
4. Enable Pages in the repo settings, pointing at the built output.

## Structure

```
src/
  components/   one component per section, each with its own .css
  styles/       global.css - color/type tokens and shared utility classes
  App.jsx       assembles the page
  main.jsx      React entry point
```

Sections: Nav, Hero, About, Skills, Projects, Education, Contact, Footer.
