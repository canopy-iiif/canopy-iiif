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
    items.forEach((item) => buildManifest(collection, item));
  });
};

const buildManifest = async (collection, item) =>
  collection.createManifest(item.id, (manifest) => {
    manifest.addLabel(item.label, "none");
    manifest.addSummary(item.summary, "none");
    manifest.addThumbnail({
      id: "https://en.wikipedia.org/wiki/Ege_Bamyas%C4%B1#/media/File:Egebamyasialbumcover.jpg",
      type: "Image",
    });
  });

export { buildCollection };
