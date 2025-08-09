## Senior CodeHub Landing — Next.js

- dev: `npm run dev`
- build: `npm run build`
- start: `npm start`

Structure:

- `app/` App Router with `layout.jsx`, `page.jsx`, global CSS in `app/globals.css`
- `components/` split UI components (NavBar, Hero, etc.)

Note: legacy Vite entry files were removed. Global styles were migrated from `src/index.css` via import in `app/globals.css`.
