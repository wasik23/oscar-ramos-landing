# Oscar Ramos Landing Page

Standalone local repo for the Oscar Ramos custom WEEX registration landing page.

## Tech Constraints

- Raw HTML
- Raw JavaScript
- Less compiled to CSS
- No React, Next.js, TypeScript, or framework runtime

## Project Structure

```text
src/
  index.html
  js/
  less/
  assets/
    images/
    icons/
dist/
  css/
PRD.md
```

## Local Commands

Install dependencies:

```bash
npm install
```

Compile Less once:

```bash
npm run build:css
```

Run local dev server with Less watch:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Implementation Order

1. Confirm final copy, links, and assets from PRD/Figma.
2. Add the raw HTML structure in `src/index.html`.
3. Add Less layout/styling in `src/less/main.less`.
4. Add small JavaScript behavior in `src/js/main.js`.
5. Verify desktop, tablet, and mobile breakpoints.
