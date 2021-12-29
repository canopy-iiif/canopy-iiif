import Link from "next/link";
import { Title, Wrapper } from "./Header.styled";

const title = process.env.title;

const Header = () => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </Wrapper>
  );
};

export default Header;
