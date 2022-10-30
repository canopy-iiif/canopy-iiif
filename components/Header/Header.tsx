import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import { Title, Wrapper } from "@/components/Header/Header.styled";
import IIIF from "@/components/SVG/IIIF";
import ThemeMode from "./ThemeMode";

const collection = process.env.collection;

const navItems = [
  { path: "/", text: "Browse" },
  { path: "/works", text: "Search" },
];

const Header = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/"></Link>
      </Title>
      <Nav items={navItems} />
      <ThemeMode />
      <a
        href={collection}
        target="_blank"
        style={{
          width: "1rem",
          height: "1rem",
          display: "inline-flex",
        }}
      >
        <IIIF />
      </a>
    </Wrapper>
  );
};

export default Header;
