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

## Structure

```
src/
  components/   one component per section, each with its own .css
  styles/       global.css - color/type tokens and shared utility classes
  App.jsx       assembles the page
  main.jsx      React entry point
```

Sections: Nav, Hero, About, Skills, Projects, Education, Contact, Footer.
