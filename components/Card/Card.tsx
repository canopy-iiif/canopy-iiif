import { Content, Wrapper } from "./Card.styled";
import Link from "next/link";
import Figure from "../Figure/Figure";

const Card = ({ label, path, resource, size = "300,", isCover = false }) => {
  const context = "1903";
  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <Figure resource={resource} size={size} isCover={isCover} />
          <Content>
            <h4>{label}</h4>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Card;
