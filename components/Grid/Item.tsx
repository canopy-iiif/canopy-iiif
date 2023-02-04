import Card from "@/components/Card/Card";
import { GridItem as ItemStyled } from "@/components/Grid/Grid.styled";
import { getLabel } from "@/hooks/getLabel";

const GridItem = ({ data }) => {
  const path = data.homepage[0].id;

  const aspectRatio = data.thumbnail[0].width / data.thumbnail[0].height;

  return (
    <ItemStyled>
      <Card
        key={data.id}
        label={getLabel(data?.label)}
        path={path}
        resource={data.thumbnail}
        aspectRatio={aspectRatio}
      />
    </ItemStyled>
  );
};

export default GridItem;
