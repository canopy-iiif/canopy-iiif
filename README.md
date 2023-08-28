# Canopy IIIF

A purely IIIF sourced static site generator using Next.js. Canopy is an application that will build a browseable and searchable digital collections style static site entirely from a IIIF Collection and the items it contains.

- [Demo (Vercel)](https://canopy-iiif.vercel.app/)
- [Demo (Static)](https://canopy-iiif.github.io/canopy-iiif/)
- [Documentation](https://canopy-iiif.vercel.app/about)

> **Warning**
> Canopy is a work in progress and being built in public.

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
