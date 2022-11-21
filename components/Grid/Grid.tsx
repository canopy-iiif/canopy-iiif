import React from "react";
import GridItem from "@/components/Grid/Item";
import GridLoadMore from "@/components/Grid/LoadMore";
import { GridStyled } from "@/components/Grid/Grid.styled";
import { width } from "@/styles/theme/media";

const Grid = ({ children }) => {
  const columns = {
    default: 6,
    [width.xl]: 5,
    [width.lg]: 4,
    [width.md]: 4,
    [width.sm]: 3,
    [width.xs]: 2,
  };

  return (
    <GridStyled breakpointCols={columns} columnClassName="canopy-grid-column">
      {children}
    </GridStyled>
  );
};

Grid.Item = GridItem;
Grid.LoadMore = GridLoadMore;

export default Grid;
