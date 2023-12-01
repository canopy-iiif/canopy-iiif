# Canopy IIIF

A purely IIIF sourced static site generator using Next.js. Canopy is an application that will build a browseable and searchable digital collections style static site entirely from a IIIF Collection and the items it contains.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/canopy-iiif/canopy-iiif)

- [Demo (Static)](https://canopy-iiif.github.io/canopy-iiif/)
- [Demo (Vercel)](https://canopy-iiif.vercel.app/)
- [Documentation](https://canopy-iiif.github.io/docs/)

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

## Tests

To run Jest unit tests:

```shell
npm run test
```

## Configuration

Canopy IIIF uses a default configuration `config/.default/canopy.default.json` for demonstration purposes if a custom one is not set. The build process will read from a custom configuration file at `config/canopy.json` if it exists. See the [Create a Canopy Project guide](https://canopy-iiif.github.io/docs/get-started) for detailed step-by-step instructions.

## License

This project is [licensed](https://github.com/canopy-iiif/canopy-iiif/blob/main/LICENSE) under the MIT License.
