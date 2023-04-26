import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import MANIFESTS from "@/.canopy/manifests.json";

const EmbedCard = ({ id }: { id: string }) => {
  const [resource, setResource] = useState<any>();

  useEffect(() => {
    const item = MANIFESTS.find((manifest) => manifest.id === id);

    if (item)
      setResource({
        id: id,
        type: "Manifest",
        label: item.label,
        thumbnail: item.thumbnail,
        homepage: [
          {
            id: `/works/${item.slug}`,
            label: item.label,
            type: "Text",
          },
        ],
      });
  }, [id]);

  if (!resource) return null;

  return <Card resource={resource} />;
};

export default EmbedCard;
