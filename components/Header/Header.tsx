import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import { Content, Title, Wrapper } from "@/components/Header/Header.styled";
import collections from "@/.canopy/collections.json";
import { Label } from "@samvera/nectar-iiif";
import Search from "../Search/Search";
import { Actions, ResponsiveActions } from "./Header.styled";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

const navItems = [
  { path: "/works", text: "Works", type: "link" },
  { path: "/metadata", text: "Metadata", type: "link" },
  { path: "/about", text: "About", type: "link" },
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { pathname, query } = router;

  useEffect(() => setShowNav(false), [pathname, query]);

  const handleShowNav = () => setShowNav(!showNav);

  return (
    <Wrapper>
      <Content>
        <Title>
          <Link href="/">
            <Label label={collections[0].label} as="span" />
          </Link>
        </Title>
        <ResponsiveActions>
          <button onClick={handleShowNav}>
            <HamburgerMenuIcon />
          </button>
        </ResponsiveActions>
        <Actions showNav={showNav}>
          <Search />
          <Nav items={navItems} />
        </Actions>
      </Content>
    </Wrapper>
  );
};

export default Header;
