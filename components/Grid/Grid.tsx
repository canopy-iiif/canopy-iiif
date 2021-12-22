import Link from "next/link";
import GridCard from "./Card";

const Grid = ({ children }) => {
  return <div>{children}</div>;
};

Grid.Card = GridCard;

export default Grid;
