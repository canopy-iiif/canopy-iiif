import Card from "../Card/Card";

const GridItem = ({ data }) => {
  return (
    <Card
      key={data.id}
      label={data.label}
      path={`/manifest/${data.slug}`}
      thumbnail=""
    />
  );
};

export default GridItem;
