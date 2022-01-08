import React from "react";
import { Wrapper } from "./Nav.styled";
import IIIF from "../SVG/IIIF";
import NavItems from "./Items";

const Nav = () => {
  const items = [
    { path: "/", text: "Browse" },
    { path: "/search", text: "Search" },
    { path: "/about", text: "About" },
  ];

  const collection = process.env.collection;

  return (
    <Wrapper>
      <NavItems items={items} />
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

export default Nav;
