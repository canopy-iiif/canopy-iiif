import { getCollectionData } from "@/services/iiif";

export default async (req, res) => {
  getCollectionData().then((tree) => {
    Promise.all(tree)
      .then((values) => {
        let items = [];
        values.forEach((results) => {
          if (results)
            results.items.forEach((element) => {
              items.push(element);
            });
        });

        let manifests = items.filter((item) => item.type === "Manifest");
        if (req.query.q)
          manifests = req.query.q
            ? manifests.filter((manifest) =>
                manifest.label[0].toLowerCase().includes(req.query.q)
              )
            : [];

        const results = manifests.map((manifest) => manifest.id);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ results }));
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
      });
  });
};
