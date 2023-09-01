"use client";

import { Flex, Text } from "@radix-ui/themes";

import Link from "next/link";

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ children, href }) => {
  return (
    <Text asChild weight="medium" size="3">
      <Link href={href}>{children}</Link>
    </Text>
  );
};

const Navigation = () => {
  return (
    <Flex gap="4" asChild align="center">
      <nav>
        <NavigationItem href="#">Search</NavigationItem>
        <NavigationItem href="/work">Works</NavigationItem>
        <NavigationItem href="#">Manuscripts</NavigationItem>
      </nav>
    </Flex>
  );
};

export default Navigation;
