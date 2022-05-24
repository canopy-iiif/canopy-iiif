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

const config = {
  collection: "https://can-the.vercel.app/iiif/collection/north-american.json",
  title: "The North Americans",
  hero: [
    "https://can-the.vercel.app/iiif/manifest/apache/04-apache-camp.json",
    "https://can-the.vercel.app/iiif/manifest/nez-perce/08-map-territory.json",
  ],
  metadata: ["Subject", "Date", "Dimensions"],
};

/**
 * Configuration built by `npm run dev`
 */
const dev = {
  collection: "http://localhost:5001/iiif-dev/collection/north-american.json",
  title: "The North Americans",
  hero: [
    "http://localhost:5001/iiif-dev/manifest/apache/04-apache-camp.json",
    "http://localhost:5001/iiif-dev/manifest/nez-perce/08-map-territory.json",
    "http://localhost:5001/iiif-dev/manifest/tsawatenok/05-tsawatenok-house-front.json",
  ],
  metadata: ["Subject", "Date", "Dimensions"],
};

exports.config = config;
exports.dev = dev;
```
