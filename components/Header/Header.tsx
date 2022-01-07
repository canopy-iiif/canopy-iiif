import Link from "next/link";
import IIIF from "../../svg/IIIF";
import Nav from "../Nav/Nav";
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
      <Nav />
    </Wrapper>
  );
};

export default Header;
