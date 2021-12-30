import Link from "next/link";
import { Wrapper } from "./Grid.styled";
import GridItem from "./Item";
import GridLoadMore from "./LoadMore";

const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Grid.Item = GridItem;
Grid.LoadMore = GridLoadMore;

export default Grid;
