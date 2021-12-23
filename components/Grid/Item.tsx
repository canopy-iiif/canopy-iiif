import React, { useEffect, useState } from "react";
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

  if (item) resource = item.items[0].items[0].items[0].body;

  return (
    <Item>
      <Card
        key={data.id}
        label={data.label}
        path={`/manifest/${data.slug}`}
        resource={resource}
      />
    </Item>
  );
};

export default GridItem;
