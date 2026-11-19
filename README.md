# Learn Math with AI Properly — React migration

Native React implementation of the original `ict-assign2` static site.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## GitHub Pages
The Vite `base` path is configured for `/ict-assign2/`. The included GitHub Actions workflow builds and deploys the `dist/` directory when code is pushed to `main`.

In GitHub repository Settings → Pages, set the build and deployment source to **GitHub Actions**.

## Structure
- `src/components/Sidebar.jsx` — navigation
- `src/components/ContentCard.jsx` — shared content card
- `src/components/Procedure.jsx` — React-controlled reveal/reset/loop interactions
- `src/pages/` — Home, Resource, Justification and Reference pages
