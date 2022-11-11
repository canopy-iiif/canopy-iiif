
# Canopy IIIF

A purely IIIF sourced site generator using Next.js. Canopy is an experimental application that will standup a browseable and searchable digital collections style site entirely from a IIIF Collection and the items it contains.

> **Warning**
> Canopy is a work in progress and being built in public.

## Examples 

### [Nez Percé (Nimíipuu)](https://canopy-iiif.vercel.app/)
- IIIF Presentation API 3.0
- 15 items
- Provided by Northwestern University Libraries

### [The Botanical photography of Alan S. Heilman](https://canopy-iiif-git-heilman-mathewjordan.vercel.app/)
- IIIF Presentation API 3.0
- 1120 items
- Provided by University of Tennessee Libraries

### [Rise of Literacy](https://canopy-iiif-git-nls-mathewjordan.vercel.app/)
- IIIF Presentation API 2.0
- 48 items
- Provided by National Library of Scotland

![image](https://user-images.githubusercontent.com/7376450/201317777-0d46a3d6-1eea-41bb-ae04-41eeba9a3c5c.png)

## Roadmap

### Content
- [x] Manifest as a `/work/` page
- [ ] Collection as a `/collection/` page
- [ ] `seeAlso` OR `rendering` support for `text/markdown` as supplemental content
- [ ] Documentation for best-practice incorporating non-IIIF front matter
- [ ] Homepage metadata sliders

### Data Aggregration
- [x] Collection of Manifests (i.e. `depth === 1`) 
- [ ] Collection of Collections (i.e. `depth > 1`)
- [x] Harvesting of curated metadata labels
- [ ] Leveraging BCP 47 and internationalization

### Search
- [x] Basic search on label(s)
- [ ] No results language
- [ ] Complex search on summary and metadata
- [ ] Search page facets on curated metadata
- [ ] `next/link` routing from Work metadata to search page facets

### User Interface & Experience
- [ ] Fully Responsive
- [ ] Lazy load search results
- [ ] Custom theme support

### Configuration
- [ ] Localization preferences
- [ ] Site title label override
- [ ] Slug pattern options

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
