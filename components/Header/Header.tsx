import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import { Content, Title, Wrapper } from "@/components/Header/Header.styled";
import collections from "@/.canopy/collections.json";
import { Label } from "@samvera/nectar-iiif";
import Search from "../Search/Search";

const navItems = [
  { path: "/", text: "Home", type: "link" },
  { path: "/works", text: "Works", type: "link" },
  // { path: "/collections", text: "Collections", type: "link" },
  { path: null, text: `Search`, type: "search" },
];

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <Link href="/">
            <Label label={collections[0].label} as="span" />
          </Link>
        </Title>
        <Nav items={navItems} />
      </Content>
      <Search />
    </Wrapper>
  );
};

export default Header;
