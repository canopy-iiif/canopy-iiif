"use client";

import { Box, Container, Flex, Text } from "@radix-ui/themes";

import Language from "./Language";
import Link from "next/link";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => {
  return (
    <Box asChild p="4">
      <header>
        <Container size="4">
          <Flex gap="6" align="center">
            <Text size="6" weight="bold" asChild>
              <Link href="/">Canopy IIIF</Link>
            </Text>
            <Box grow="1">
              <Search />
            </Box>
            <Navigation />
            <Language />
          </Flex>
        </Container>
      </header>
    </Box>
  );
};

export default Header;
