import Link from "next/link";

const Header = () => {
  return (
    <header style={{ marginBottom: "1rem" }}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
