# Canopy IIIF

A purely IIIF sourced static site generator using Next.js. Canopy is an application that will build a browseable and searchable digital collections style static site entirely from a IIIF Collection and the items it contains.

- [Demo (Vercel)](https://canopy-iiif.vercel.app/)
- [Demo (Static)](https://canopy-iiif.github.io/canopy-iiif/)
- [Documentation](https://canopy-iiif.vercel.app/about)

> **Warning**
> Canopy is a work in progress and being built in public.

## Examples

### [Nez Perce](https://canopy-iiif-git-nez-perce-iiif.vercel.app/)

- IIIF Presentation API 3.0
- 119 items
- Provided by Northwestern University Libraries

### [William Cox Cochran Photographic Collection](https://canopy-iiif.vercel.app/)

- IIIF Presentation API 3.0
- 90 items
- Provided by University of Tennessee Libraries
- `navPlace` + Map

### [The Botanical photography of Alan S. Heilman](https://canopy-iiif-git-heilman-mathewjordan.vercel.app/)

- IIIF Presentation API 3.0
- 1120 items
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

## License

This project is [licensed](https://github.com/canopy-iiif/canopy-iiif/blob/main/LICENSE) under the MIT License.
