
# Canopy IIIF

A purely IIIF sourced site generator using Next.js. Canopy is an experimental application that will standup a browseable and searchable digital collections style site entirely from a IIIF Collection and the items it contains.

- [Demo](https://canopy-iiif.vercel.app/)
- [Documentation](https://canopy-iiif.vercel.app/about)

> **Warning**
> Canopy is a work in progress and being built in public.

## Examples 

### [Nez Percé (Nimíipuu)](https://canopy-iiif.vercel.app/)
- IIIF Presentation API 3.0
- 81 items
- Provided by Northwestern University Libraries

<img src="https://user-images.githubusercontent.com/7376450/216725866-85ed609d-1e8b-4825-83de-7771cf1bf60e.png" width="400px" />

### [The Botanical photography of Alan S. Heilman](https://canopy-iiif-git-heilman-mathewjordan.vercel.app/)
- IIIF Presentation API 3.0
- 1120 items
- Provided by University of Tennessee Libraries

<img src="https://user-images.githubusercontent.com/7376450/201527565-243437c8-bb90-408b-82fa-d8798478c9ee.png" width="400px" />

### [The Chimney Tops 2 Wildfires In Memory And Art](https://canopy-iiif-git-rfta-artists-mathewjordan.vercel.app/)
- IIIF Presentation API 3.0
- 43 items
- Provided by University of Tennessee Libraries

<img src="https://user-images.githubusercontent.com/7376450/217075076-765ccd39-6949-4c91-b6c3-8017671a66fb.png" width="400px" />

### [Canonici](https://canopy-iiif-git-canonici-mathewjordan.vercel.app/)
- IIIF Presentation API 2.0
- 529 items
- Provided by Bodleian Libraries, University of Oxford

<img src="https://user-images.githubusercontent.com/7376450/216225553-9d8a121a-5705-47a2-8f9b-388bc8dd30b2.png" width="400px" />

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
- [ ] Search page facets on curated metadata
- [x] `next/link` routing from Work metadata to search page facets

### User Interface & Experience
- [ ] Fully Responsive
- [x] Continuous scroll & lazy load of search results
- [ ] Custom theme support

### Configuration
- [ ] Localization preferences
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

Canopy IIIF uses a default configuration `config/.default/canopy.default.json` for demonstration purposes if a custom 
one is not set. The build process reads from a custom configuration file at `config/canopy.json` if it exists.

### Creating a Custom Configuration

In order to create a custom configuration:

1. Find your `config/` directory
2. Rename `canopy.sample.json` to `canopy.json`
3. Update `canopy.json`.  Updates should be made to both the `prod` and `dev` configurations.

### Example Configuration

Both the `prod` and `dev` environments have a configuration. These configurations can match each other; however in some
cases, development speed can be aided by targeting a smaller IIIF Collection `id` as a fixture.

**Important**: The `collection` property is required and must be the `id` of the referenced source IIIF Collection.
Collections of Collections are not currently supported.

```json
{
  "prod": {
    "label": { "none": ["Hobhouse"] },
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"
    ],
    "metadata": ["Extent", "Title", "Date Statement", "Language"]
  },
  "dev": {
    "label": { "none": ["Hobhouse"] },
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"
    ],
    "metadata": ["Extent", "Title", "Date Statement", "Language"]
  }
}
```

### Configuration Options

#### Label as Site Title

The Canopy IIIF site title is the Collection label of the set `collection` resource. You can optionally override this by
providing a valid [Presentation 3.0 label property](https://canopy-iiif.vercel.app/about).

```json lines
"label": { "none": ["Hobhouse"] }
``` 

#### Curating Featured Manifests

You can inform Canopy IIIF of featured Manifests by providing an array of ids. These must be within the referenced
collection resource and the Manifest URIs must be an exact match. These Manifests will render throughout the interface
in featured components.

**Warning**: In the current pre-release, featured Manifests must have an Image body on the first Canvas.

```json lines
"featured": [
  "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
  "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"
]
```

#### Curating Metadata

Curating Metadata allows implementers of Canopy IIIF to select metadata labels that provide use to end users. An optimal
case is a label common to all or most manifests with some in diversity of values across those resources. Metadata labels
that are curated will be automatically included as featured elements on the homepage, the metadata page, linking from 
works, and as facets on the search page.

**Note**: Metadata labels are not yet BCP 47 language code aware; however, aggregation processes will make exact string
comparisons regardless of language code.

```json lines
"metadata": ["Extent", "Title", "Date Statement", "Language"]
```
