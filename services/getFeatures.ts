import { Manifest } from "@iiif/presentation-3";

export const getBounds = (items: any) => {
  const boundsPerItem = items.map((item: any) => {
    const pointFeatures = item.features.filter(
      (feature: any) => feature.geometry.type === "Point"
    );
    const manifestCoordinates = pointFeatures.map(
      (feature: any) => [feature.geometry.coordinates[1], feature.geometry.coordinates[0]]
    );
    return [...manifestCoordinates];
  });
  return [].concat(...boundsPerItem);
};

export const getCenter = (items: [number, number][]) => {
  const highest_long = Math.max(...items.map(subArray => subArray[1]));
  const lowest_long = Math.min(...items.map(subArray => subArray[1]));
  const highest_lat = Math.max(...items.map(subArray => subArray[0]));
  const lowest_lat = Math.min(...items.map(subArray => subArray[0]));
  return [(highest_lat + lowest_lat)/2, (highest_long + lowest_long)/2]
}

export const getFeatures = (manifests: [Manifest]) => {
  return manifests.map((manifest: any) => {
    // Spread this ...
    return {
      id: manifest.id,
      thumbnail: manifest.thumbnail,
      label: manifest.label,
      slug: `works/${manifest.slug}`,
      features: manifest.navPlace.features.filter(
        (feature: any) => feature.geometry.type === "Point"
      ),
    };
  });
};
