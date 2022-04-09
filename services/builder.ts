import { IIIFBuilder } from "iiif-builder";

const buildCollection = (label: string[], summary?: string[]) => {
  const builder = new IIIFBuilder();
  return builder.createCollection(
    "http://localhost:5001/api/collection",
    (collection) => {
      collection.addLabel(label, "none");
      collection.addSummary(summary, "none");
      collection.setHomepage({
        id: "http://localhost:5001/api/collection",
      });
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
      collection.createManifest(
        "https://iiif.stack.rdc.library.northwestern.edu/public/56/e2/05/7a/-d/db/8-/42/cf/-9/47/8-/3c/1a/23/a4/8d/58-manifest.json",
        (manifest) => {
          manifest.addLabel("Item 1", "none");
          manifest.addSummary("stuff", "none");
          manifest.setHomepage({
            id: "http://localhost:5001/manifest/url",
          });
          manifest.addThumbnail({
            id: "http://localhost:5001/manifest/url",
          });
        }
      );
    }
  );
};

export { buildCollection };
