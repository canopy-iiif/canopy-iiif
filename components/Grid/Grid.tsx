import Link from "next/link";
import { Wrapper } from "./Grid.styled";
import GridItem from "./Item";

const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Grid.Item = GridItem;

export default Grid;
