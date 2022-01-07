import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getLabel } from "../../hooks/getLabel";
import { getManifestById } from "../../pages/api/iiif";
import { Item } from "./Ribbon.styled";

const RibbonItem = ({ data }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    getManifestById(data.representative).then((json) => {
      setItem(json);
    });
  }, []);

  if (!item) return <></>;

  let resource = null;

  if (item.items) resource = item.items[0].items[0].items[0].body;

  return (
    <Item>
      <Card
        key={data.id}
        label={data.value}
        path={``}
        context={`${data.count} Items`}
        resource={resource}
        isCover
      />
    </Item>
  );
};

export default RibbonItem;
