import Link from "next/link";

const siteTitle = process.env.siteTitle;

const Header = () => {
  return (
    <header style={{ marginBottom: "1rem" }}>
      <span>{siteTitle}</span>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
