import Link from "next/link";
import IIIF from "../../svg/IIIF";
import { Title, Wrapper } from "./Header.styled";

const collection = process.env.collection;
const title = process.env.title;

const Header = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </Title>
      <nav style={{ display: "flex" }}>
        <a
          href={collection}
          target="_blank"
          style={{ width: "1.25rem", height: "1.25rem", display: "block" }}
        >
          <IIIF blue="#fff" red="#fff" />
        </a>
      </nav>
    </Wrapper>
  );
};

export default Header;
