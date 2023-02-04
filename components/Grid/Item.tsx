import React, { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import { getJsonByURI } from "@/services/utils";
import { GridItem as ItemStyled } from "@/components/Grid/Grid.styled";
import { getLabel } from "@/hooks/getLabel";
import { getPresentation3 } from "@/services/iiif/context";

const GridItem = ({ data }) => {
  const [item, setItem] = useState();
  const path = data.homepage[0].id;

  useEffect(() => {
    getJsonByURI(data.id).then((json) => setItem(getPresentation3(json)));
  }, []);

  let resource;

  if (!item) return <></>;

  /**
   * @todo: handle this better
   */
  if (item.items) resource = item.items[0].items[0].items[0].body;

  const aspectRatio = resource.width / resource.height;

  return (
    <ItemStyled>
      <Card
        key={data.id}
        label={getLabel(item?.label)}
        path={path}
        resource={data.thumbnail}
        aspectRatio={aspectRatio}
      />
    </ItemStyled>
  );
};

export default GridItem;
