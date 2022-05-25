import { Wrapper } from "@/components/Grid/Grid.styled";
import GridItem from "@/components/Grid/Item";
import GridLoadMore from "@/components/Grid/LoadMore";
import { useMediaQuery } from "@/hooks/use-media-query";
import { media } from "@/stiches.config";
import { useEffect, useState } from "react";

const Grid = ({ children }) => {
  /**
   * @todo move this elsewhere and make it smarter
   */
  let mediaQuery = new Map();
  mediaQuery.set("xs", useMediaQuery(media.xs));
  mediaQuery.set("sm", useMediaQuery(media.sm));
  mediaQuery.set("md", useMediaQuery(media.md));
  mediaQuery.set("lg", useMediaQuery(media.lg));
  mediaQuery.set("xl", useMediaQuery(media.xl));

  useEffect(() => {
    if (mediaQuery.get("xs")) {
      setCols(1);
      return;
    }
    if (mediaQuery.get("sm")) {
      setCols(2);
      return;
    }
    if (mediaQuery.get("md")) {
      setCols(3);
      return;
    }
    if (mediaQuery.get("lg")) {
      setCols(4);
      return;
    }
    if (mediaQuery.get("xl")) {
      setCols(5);
      return;
    }
  }, [mediaQuery]);

  const [cols, setCols] = useState(5);

  return (
    <Wrapper
      breakpointCols={cols}
      className="can-grid"
      columnClassName="can-grid-column"
    >
      {children}
    </Wrapper>
  );
};

Grid.Item = GridItem;
Grid.LoadMore = GridLoadMore;

export default Grid;
