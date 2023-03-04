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
import { useSearchState } from "@/context/search";

// @ts-ignore
const navItems = process.env.CANOPY_CONFIG.navigation.primary;

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { pathname, query } = router;
  const { searchState } = useSearchState();
  const { headerVisible } = searchState;

  useEffect(() => setShowNav(false), [pathname, query]);

  const handleShowNav = () => setShowNav(!showNav);

  return (
    <Wrapper isVisible={headerVisible || pathname !== "/search" ? true : false}>
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
