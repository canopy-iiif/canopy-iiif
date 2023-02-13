import { Manifest } from "@iiif/presentation-3";

export const getBounds = (items) => {
  return items.map(
    (item) => {
      const pointFeatures = item.navPlace.features.filter(
        (feature) => feature.geometry.type === "Point")
      const manifestCoordinates = pointFeatures.map((feature) => feature.geometry.coordinates)
      // This isn't exactly right.  Fix.
      return [...manifestCoordinates].shift()
    }
  )
}

export const getFeatures = (manifests: [Manifest]) => {
  return manifests.map(
    (manifest) => {
      // Spread this ...
      return ({
        id: manifest.id,
        thumbnail: manifest.thumbnail,
        label: manifest.label,
        slug: `works/${manifest.slug}`,
        features: manifest.navPlace.features.filter(
          (feature) => feature.geometry.type === "Point"),
      })
    }
  );
};