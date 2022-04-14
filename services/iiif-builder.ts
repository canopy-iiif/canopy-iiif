import { IIIFBuilder } from "iiif-builder";

const buildCollection = (data) => {
  const { id, label, summary, homepage, items } = data;

  const builder = new IIIFBuilder();

  return builder.createCollection(id, (collection) => {
    collection.addLabel(label, "none");
    collection.addSummary(summary, "none");
    collection.setHomepage({
      id: homepage,
    });
    items.forEach((item) => {
      collection.createManifest(item.id, (manifest) => {
        manifest.addLabel(item.label, "none");
        manifest.addSummary(item.summary, "none");
        manifest.setHomepage({
          id: homepage,
        });
        manifest.addThumbnail({
          id: "item.id",
        });
      });
    });
  });
};

export { buildCollection };
