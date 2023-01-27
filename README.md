
# Canopy IIIF

A purely IIIF sourced site generator using Next.js. Canopy is an experimental application that will standup a browseable and searchable digital collections style site entirely from a IIIF Collection and the items it contains.

> **Warning**
> Canopy is a work in progress and being built in public.

## Examples 

### [Nez Percé (Nimíipuu)](https://canopy-iiif.vercel.app/)
- IIIF Presentation API 3.0
- 81 items
- Provided by Northwestern University Libraries

<img src="https://user-images.githubusercontent.com/7376450/201527692-745abc6e-4c6b-4367-aa8c-6cb31d749a95.png" width="300px" />

### [The Botanical photography of Alan S. Heilman](https://canopy-iiif-git-heilman-mathewjordan.vercel.app/)
- IIIF Presentation API 3.0
- 1120 items
- Provided by University of Tennessee Libraries

<img src="https://user-images.githubusercontent.com/7376450/201527565-243437c8-bb90-408b-82fa-d8798478c9ee.png" width="300px" />

### [Images of East Tennessee](https://canopy-iiif-git-tenncities-mathewjordan.vercel.app/)
- IIIF Presentation API 3.0
- 493 items
- Provided by University of Tennessee Libraries

<img src="https://user-images.githubusercontent.com/7376450/201527467-f22568a0-9ac8-4b18-9180-69710c16a65a.png" width="300px" />

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
- [x] Search on summary and metadata entries
- [ ] Search page facets on curated metadata
- [ ] `next/link` routing from Work metadata to search page facets

### User Interface & Experience
- [ ] Fully Responsive
- [x] Continuous scroll & lazy load of search results
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
