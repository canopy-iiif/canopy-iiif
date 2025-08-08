# Canopy Static Site Starter

This project is a minimal static site generator using **React** and **MDX**.

- Write pages in [`pages/`](pages/) as `.mdx` files.
- Run `npm run build` to compile them into static HTML in `dist/`.
- Generated pages contain only the markup you author, keeping output sizes small.

This starter replaces the previous Next.js structure in `old.nextjs.structure/`.

## IIIF Collection generation

Use `lib/iiif.js` to create simple HTML pages from a IIIF Collection JSON:

```bash
node lib/iiif.js example-collection.json
```

Pages are written to `dist/iiif/`.
