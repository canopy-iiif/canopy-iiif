import { getResourceImage } from "../../hooks/getResourceImage";
import { Wrapper } from "./Figure.styled";

const Figure = ({ resource }) => {
  let image = null;

  if (resource) image = getResourceImage(resource, "400,", "full");

  return (
    <Wrapper>
      <img src={image} />
    </Wrapper>
  );
};

export default Figure;
