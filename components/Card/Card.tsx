import { Content, Wrapper } from "./Card.styled";
import Link from "next/link";
import Figure from "../Figure/Figure";

const Card = ({ label, path, resource }) => {
  const context = "1903";
  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <Figure resource={resource} />
          <Content>
            <h4>{label}</h4>
            <span>{context}</span>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Card;
