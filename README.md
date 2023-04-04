<img src="https://user-images.githubusercontent.com/7376450/221054302-923faa8b-19b9-4e90-a856-22d0ab9131c0.png" width="500px" />

# Canopy IIIF

A purely IIIF sourced site generator using Next.js. Canopy is an experimental application that will standup a browseable and searchable digital collections style site entirely from a IIIF Collection and the items it contains.

- [Demo](https://canopy-iiif.vercel.app/)
- [Documentation](https://canopy-iiif.vercel.app/about)

> **Warning**
> Canopy is a work in progress and being built in public.

## Examples

### [Nez Percé (Nimíipuu)](https://canopy-iiif.vercel.app/)

- IIIF Presentation API 3.0
- 119 items
- Provided by Northwestern University Libraries

### [The Botanical photography of Alan S. Heilman](https://canopy-iiif-git-heilman-mathewjordan.vercel.app/)

- IIIF Presentation API 3.0
- 1120 items
- Provided by University of Tennessee Libraries

### [Panoramic Images of Elgin P. Kintner](https://canopy-iiif-git-kintnerexamplesite-mathewjordan.vercel.app/)

- IIIF Presentation API 3.0 w/ navPlace
- 55 items
- Provided by University of Tennessee Libraries

### [The Chimney Tops 2 Wildfires In Memory And Art](https://canopy-iiif-git-rfta-artists-mathewjordan.vercel.app/)

- IIIF Presentation API 3.0 w/ Video Canvases
- 43 items
- Provided by University of Tennessee Libraries

### [Canonici](https://canopy-iiif-git-canonici-mathewjordan.vercel.app/)

- IIIF Presentation API 2.0
- 529 items
- Provided by Bodleian Libraries, University of Oxford

## Roadmap

### Content

- [x] Manifest as a `/work/` page
- [ ] Collection as a `/collection/` page
- [ ] `seeAlso` OR `rendering` support for `text/markdown` as supplemental content
- [ ] Documentation for best-practice incorporating non-IIIF front matter
- [x] Homepage metadata sliders

### Data Aggregration

- [x] Collection of Manifests (i.e. `depth === 1`)
- [ ] Collection of Collections (i.e. `depth > 1`)
- [x] Harvesting of curated metadata labels
- [ ] Leveraging BCP 47 and internationalization

### Search

- [x] Basic search on label(s)
- [ ] No results language
- [x] Search on summary and metadata entries
- [x] Search page facets on curated metadata
- [x] `next/link` routing from Work metadata to search page facets

### User Interface & Experience

- [x] Fully Responsive
- [x] Continuous scroll & lazy load of search results
- [ ] Custom theme support

### Configuration

- [x] Localization preferences
- [x] Site title label override
- [ ] Slug pattern options

## Setup

### Install Dependencies

```shell
# installation
npm i
```

### Running in Development

```shell
# development
npm run dev
```

### Building in Production

```shell
# build
npm run build
```

## Configuration

Canopy IIIF uses a default configuration `config/.default/canopy.default.json` for demonstration purposes if a custom one is not set. The build process will read from a custom configuration file at `config/canopy.json` if it exists. Please review [configuration documentation](https://canopy-iiif.vercel.app/about) for customization of Canopy IIIF.

