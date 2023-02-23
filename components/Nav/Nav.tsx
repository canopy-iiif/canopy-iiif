import React from "react";
import { Wrapper } from "@/components/Nav/Nav.styled";
import NavItems from "@/components/Nav/Items";
interface NavProps {
  items: any;
}

const Nav: React.FC<NavProps> = ({ items }) => {
  return (
    <Wrapper>
      <NavItems items={items} />
    </Wrapper>
  );
};

export default Nav;
