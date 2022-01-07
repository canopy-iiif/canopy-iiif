import React, { useEffect, useState } from "react";
import { getLabel } from "../../hooks/getLabel";
import { getManifestById } from "../../pages/api/iiif";
import Card from "../Card/Card";
import { Item } from "./Grid.styled";

const GridItem = ({ data }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    getManifestById(data.id).then((json) => {
      setItem(json);
    });
  }, []);

  let resource = null;

  if (!item) return <></>;

  /**
   * @todo: handle this better
   */
  if (item.items) resource = item.items[0].items[0].items[0].body;

  if (item.sequences)
    resource = item.sequences[0].canvases[0].images[0].resource;

  return (
    <Item className="can-grid-column">
      <Card
        key={data.id}
        label={getLabel(item.label)}
        path={`/manifest/${data.slug}`}
        resource={resource}
      />
    </Item>
  );
};

export default GridItem;
