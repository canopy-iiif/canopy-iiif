import { Content, Figure, Wrapper } from "./Card.styled";
import Link from "next/link";
import { getResourceImage } from "../../hooks/getResourceImage";

const Card = ({ label, path, resource }) => {
  let image = null;

  if (resource) image = getResourceImage(resource, "400,", "full");

  console.log(image);

  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <Figure>
            <img src={image} />
          </Figure>
          <Content>
            <h4>{label}</h4>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Card;
