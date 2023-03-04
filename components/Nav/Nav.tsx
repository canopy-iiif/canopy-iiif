import React from "react";
import { Wrapper } from "@/components/Nav/Nav.styled";
import NavItems from "@/components/Nav/Items";

interface NavProps {
  items: any;
  orientation?: "horizontal" | "vertical";
}

const Nav: React.FC<NavProps> = ({ items, orientation = "horizontal" }) => {
  return (
    <Wrapper>
      <NavItems items={items} orientation={orientation} />
    </Wrapper>
  );
};

export default Nav;
