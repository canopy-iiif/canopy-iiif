const { getRepresentativeImage } = require("../iiif/image");

module.exports.getManifestThumbnail = async (manifest) => {
  try {
    /**
     * First, attempt to use the thumbnail property of the manifest.
     */
    if (manifest.thumbnail && manifest.thumbnail.length > 0)
      return manifest.thumbnail;

    if (manifest.items.length > 0) {
      const canvas = manifest.items[0];
      const canvasAnnotation = canvas.items[0].items[0];
      /**
       * Next, attempt to use the thumbnail property of the first item in the manifest.
       */
      if (canvas.thumbnail && canvas.thumbnail.length > 0)
        return canvas.thumbnail;

      /**
       * Finally, attempt generate a thumbnail from the first canvas in the first item in the manifest.
       */
      if (canvasAnnotation.body.type === "Image") {
        const { best } = await getRepresentativeImage(canvas, 400);
        return [
          {
            id: best.id,
            type: "Image",
            format: "image/jpeg",
            width: best.width,
            height: best.height,
          },
        ];
      }
    }
  } catch {
    /**
     * If all else fails, return an empty array as a thumbnail.
     */
    console.log(`Thumbnail could not be generated for: ${manifest}`);
    return [];
  }
};
