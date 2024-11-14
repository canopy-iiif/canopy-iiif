# Canopy IIIF

An open-source static site generator designed for fast creation, contextualization, and customization of a discovery-focused digital scholarship and collections website using [IIIF](https://iiif.io/) APIs.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/canopy-iiif/canopy-iiif)

- [Demo (Static)](https://canopy-iiif.github.io/canopy-iiif/)
- [Demo (Vercel SSR)](https://canopy-iiif.vercel.app/)
- [Documentation](https://canopy-iiif.github.io/docs/)

![collage of canopy iiif views](https://github.com/canopy-iiif/canopy-iiif/assets/7376450/1779a0ce-1f62-4e9b-8186-110264c81bba)

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
