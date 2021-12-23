import Link from "next/link";

const title = process.env.title;

const Header = () => {
  return (
    <header style={{ marginBottom: "1rem" }}>
      <span>{title}</span>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
