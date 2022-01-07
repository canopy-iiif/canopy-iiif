import Link from "next/link";
import React from "react";
import { Wrapper } from "./Nav.styled";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const pages = [
    { path: "/", text: "Browse" },
    { path: "/search", text: "Search" },
  ];

  return (
    <Wrapper>
      {pages.map((page) => (
        <Link href={page.path}>
          <a className={router.pathname == page.path ? "active" : ""}>
            {page.text}
          </a>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Nav;
