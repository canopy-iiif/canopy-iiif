import { Actions, ResponsiveActions } from "./Header.styled";
import { Content, Wrapper } from "@components/Header/Header.styled";
import React, { useEffect, useState } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Heading } from "@radix-ui/themes";
import { Label } from "@samvera/clover-iiif/primitives";
import Link from "@components/Shared/Link";
import Locale from "@components/Shared/Locale/Locale";
import { LocaleString } from "@hooks/useLocale";
import Nav from "@components/Nav/Nav";
import Search from "@components/Search/Search";
import collections from "@.canopy/collections.json";
import { useCanopyState } from "@context/canopy";
import useNavigation from "@src/hooks/useNavigation";
import { useRouter } from "next/router";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { pathname, query } = router;
  const { canopyState } = useCanopyState();
  const { headerVisible } = canopyState;

  const { navigation } = useNavigation({ relativePath: "" });

  useEffect(() => {
    setShowNav(false);
  }, [pathname, query]);

  const handleShowNav = () => setShowNav(!showNav);

  return (
    <Wrapper isVisible={headerVisible || pathname !== "/search" ? true : false}>
      <Content>
        <Link
          href="/"
          style={{
            color: "var(--gray-12)",
            textDecoration: "none",
          }}
        >
          <Heading
            as="h1"
            size="5"
            weight="medium"
            style={{ fontFamily: "var(--canopy-display-font)" }}
          >
            <Label label={collections[0].label} as="span" />
          </Heading>
        </Link>
        <ResponsiveActions>
          <button onClick={handleShowNav} aria-label={LocaleString("navigationMenuExpand") || "Expand Navigation Menu"} aria-controls="navigation-menu">
            <HamburgerMenuIcon />
          </button>
        </ResponsiveActions>
        <Actions showNav={showNav}>
          <Search />
          {navigation && <Nav items={navigation} />}
          <Locale />
        </Actions>
      </Content>
    </Wrapper>
  );
};

export default Header;
