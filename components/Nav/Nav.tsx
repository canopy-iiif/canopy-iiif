import Link from "next/link";
import React from "react";
import { Wrapper } from "./Nav.styled";

const Nav = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a>Browse</a>
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
    </Wrapper>
  );
};

export default Nav;
