import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import { Title, Wrapper } from "@/components/Header/Header.styled";
import IIIF from "@/components/SVG/IIIF";
import collections from "@/.canopy/collections.json";
import { Label } from "@samvera/nectar-iiif";
import Search from "../Search/Search";

const collection = process.env.collection;

const navItems = [
  { path: "/", text: "Home" },
  { path: "/works", text: "Works" },
];

const Header = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">
          <Label label={collections[0].label} as="span" />
        </Link>
      </Title>
      <Search />
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
        <IIIF />
      </a>
    </Wrapper>
  );
};

export default Header;
