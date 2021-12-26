import { Content, Wrapper } from "./Card.styled";
import Link from "next/link";
import Figure from "../Figure/Figure";

const Card = ({ label, path, resource }) => {
  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <Figure resource={resource} />
          <Content>
            <h4>{label}</h4>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Card;
