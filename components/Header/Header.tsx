import Link from "next/link";
import Nav from "../Nav/Nav";
import { Title, Wrapper } from "./Header.styled";
import IIIF from "../SVG/IIIF";

const title = process.env.title;
const collection = process.env.collection;

const navItems = [
  { path: "/", text: "Browse" },
  { path: "/about", text: "About" },
];

const Header = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </Title>
      <Nav items={navItems} />
      <a
        href={collection}
        target="_blank"
        style={{
          width: "1rem",
          height: "1rem",
          display: "inline-flex",
        }}
      >
        <IIIF blue="#fff" red="#fff" />
      </a>
    </Wrapper>
  );
};

export default Header;
