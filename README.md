
# Canopy IIIF

A purely IIIF sourced site generator using Next.js. Canopy is an experimental application that will standup a browseable and searchable digital collections style site entirely from a IIIF Collection and the items it contains.

> **Warning**
> Canopy is a work in progress and being built in public.

### Examples: [Nez Perce](https://canopy-iiif.vercel.app/), [Heilman](https://canopy-iiif-git-heilman-mathewjordan.vercel.app/)

![image](https://user-images.githubusercontent.com/7376450/199378560-7c6b28f3-074a-4e72-9d86-4381066cc8e4.png)

![image](https://user-images.githubusercontent.com/7376450/199379791-08c54572-4d55-40a8-baee-f2c1dde5f0ac.png)

## Roadmap

### Content
- [x] Manifest as a `/work/` page
- [ ] Collection as a `/collection/` page
- [ ] `seeAlso` OR `rendering` support for `text/markdown` as supplemental content

### Data Aggregration
- [x] Collection of Manifests (i.e. `depth === 1`) 
- [ ] Collection of Collections (i.e. `depth > 1`)
- [x] Harvesting of curated metadata labels

### Search
- [ ] Basic search on label(s)
- [ ] Complex search on summary and metadata
- [ ] Search page facets on curated metadata
- [ ] `next/link` routing from Work metadata to search page facets

### User Experience
- [ ] Fully Responsive
- [ ] Lazy load search results
- [ ] Custom theme support
- [x] Dark mode

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
  collection: "https://canopy-iiif.vercel.app/fixtures/iiif/collection/nez-perce.json",
  featured: [
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/02-lawyer.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/08-map-territory.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/14-joseph-dead-feast-lodge.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection: "https://canopy-iiif.vercel.app/fixtures/iiif/collection/nez-perce.json",
  featured: [
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/02-lawyer.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/08-map-territory.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/14-joseph-dead-feast-lodge.json",
  ],
  metadata: ["Date", "Subject"],
};
```
