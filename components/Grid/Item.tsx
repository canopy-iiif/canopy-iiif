import Card from "../Card/Card";
import { Item } from "./Grid.styled";

const GridItem = ({ data }) => {
  return (
    <Item>
      <Card
        key={data.id}
        label={data.label}
        path={`/manifest/${data.slug}`}
        thumbnail=""
      />
    </Item>
  );
};

export default GridItem;
