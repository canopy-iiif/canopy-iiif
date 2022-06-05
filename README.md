<img width="90" alt="image" src="https://iiif.stack.rdc.library.northwestern.edu/iiif/2/bb9b1011-9d0a-46e0-9769-507e38668f11/95,200,1550,1550/600,/0/default.jpg"> <img width="90" alt="image" src="https://iiif.stack.rdc.library.northwestern.edu/iiif/2/bb9b1011-9d0a-46e0-9769-507e38668f11/482,587,775,775/600,/0/default.jpg"> <img width="90" alt="image" src="https://iiif.stack.rdc.library.northwestern.edu/iiif/2/bb9b1011-9d0a-46e0-9769-507e38668f11/695,808,387,387/600,/0/default.jpg">

# Canopy

### An attempted and mostly pure IIIF Collection site generator using Next.js

_Home food processing jar against background of colorful fresh vegetables, including corn, radishes, and tomatoes._

## Notes

Canopy is an experimental application that will standup a browseable and searchable digital collections style site entirely from a IIIF Collection and the items it contains.

- This the epitome of a work-in-progress.
- Most baselines features are still being proved out.
- It's definitely possible.

## Technical Stuff

```shell
# installation
npm install

# development
npm run dev

# build
npm run build
```

## Configuration

Edit `canopy.config.js`

```jsx
/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection: "https://canopy-iiif.vercel.app/iiif/collection/nez-perce.json",
  title: "Nez Percé (Nimíipuu)",
  hero: [
    "https://canopy-iiif.vercel.app/iiif/manifest/nez-perce/02-lawyer.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection: "https://canopy-iiif.vercel.app/iiif/collection/nez-perce.json",
  title: "Nez Percé (Nimíipuu)",
  hero: [
    "https://canopy-iiif.vercel.app/iiif/manifest/nez-perce/02-lawyer.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Canopy globals regardless of environment
 */
exports.globals = {
  slugify: {
    lower: true,
    strict: true,
    trim: true,
  },
};

```
