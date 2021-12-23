import { Wrapper } from "./Card.styled";
import Link from "next/link";

const Card = ({ label, path, thumbnail }) => {
  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <div>
            <figure></figure>
            <div>{label}</div>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Card;
