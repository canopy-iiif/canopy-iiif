import Card from "@/components/Card/Card";
import { GridItem as ItemStyled } from "@/components/Grid/Grid.styled";
import React from "react";

export interface GridItemProps {
  item: any;
}

const GridItem: React.FC<GridItemProps> = ({ item }) => {
  if (!item) return <></>;

  return (
    <ItemStyled>
      <Card resource={item} key={item.id} />
    </ItemStyled>
  );
};

export default GridItem;
