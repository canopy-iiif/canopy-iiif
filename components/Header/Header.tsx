import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import { Title, Wrapper } from "@/components/Header/Header.styled";
import collections from "@/.canopy/collections.json";
import { Label } from "@samvera/nectar-iiif";
import Search from "../Search/Search";

const navItems = [
  { path: "/", text: "Home" },
  { path: "/works", text: "Works" },
  { path: "/collections", text: "Collections" },
  { path: "#", text: "Search" },
];

const Header = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">
          <Label label={collections[0].label} as="span" />
        </Link>
      </Title>
      {/* <Search /> */}
      <Nav items={navItems} />
    </Wrapper>
  );
};

export default Header;
