import React, { useEffect, useState } from "react";
import { getLabel } from "@/hooks/getLabel";
import { getJsonByURI } from "@/services/utils";
import { getPresentation3 } from "@/services/iiif/context";
import Card from "@/components/Card/Card";
import { Item } from "@/components/Grid/Grid.styled";

const GridItem = ({ data }) => {
  const [item, setItem] = useState();
  const path = data.homepage[0].id;

  useEffect(() => {
    getJsonByURI(data.id).then((json) => setItem(getPresentation3(json)));
  }, []);

  let resource = null;

  if (!item) return <></>;

  /**
   * @todo: handle this better
   */
  if (item.items) resource = item.items[0].items[0].items[0].body;

  const aspectRatio = resource.width / resource.height;

  return (
    <Item>
      <Card
        key={data.id}
        label={getLabel(item?.label)}
        path={path}
        resource={resource}
        aspectRatio={aspectRatio}
      />
    </Item>
  );
};

export default GridItem;
