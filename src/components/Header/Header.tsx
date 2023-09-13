import { Actions, ResponsiveActions } from "./Header.styled";
import { Content, Title, Wrapper } from "@/components/Header/Header.styled";
import React, { useEffect, useState } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Label } from "@samvera/clover-iiif/primitives";
import Link from "next/link";
import Locale from "@/components/Shared/Locale/Locale";
import Nav from "@/components/Nav/Nav";
import Search from "@/components/Search/Search";
import collections from "@/.canopy/collections.json";
import { useCanopyState } from "@/context/canopy";
import { useRouter } from "next/router";

// @ts-ignore
const navItems = process.env.CANOPY_CONFIG.navigation.primary;

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { pathname, query } = router;
  const { canopyState } = useCanopyState();
  const { headerVisible } = canopyState;

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
          <Locale />
        </Actions>
      </Content>
    </Wrapper>
  );
};

export default Header;
