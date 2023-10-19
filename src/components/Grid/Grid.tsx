import GridItem, { GridItemProps } from "@components/Grid/Item";
import React, { ReactNode } from "react";

import { GridStyled } from "@components/Grid/Grid.styled";
import { width } from "@styles/theme/media";

interface GridProps {
  children: ReactNode | ReactNode[];
}

interface GridComposition {
  Item: React.FC<GridItemProps>;
}

const Grid: GridComposition & React.FC<GridProps> = ({ children }) => {
  const columns = {
    default: 6,
    [width.xl]: 5,
    [width.lg]: 4,
    [width.md]: 4,
    [width.sm]: 3,
    [width.xs]: 2,
  };

  return (
    <GridStyled
      breakpointCols={columns}
      className="canopy-grid"
      columnClassName="canopy-grid-column"
    >
      {children}
    </GridStyled>
  );
};

Grid.Item = GridItem;

export default Grid;
