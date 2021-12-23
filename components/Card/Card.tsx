import { Content, Figure, Wrapper } from "./Card.styled";
import Link from "next/link";

const Card = ({ label, path, thumbnail }) => {
  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <Figure />
          <Content>
            <h4>{label}</h4>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Card;
