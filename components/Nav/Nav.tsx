import React from "react";
import { Wrapper } from "@/components/Nav/Nav.styled";
import NavItems from "@/components/Nav/Items";

const Nav = ({ items }) => {
  return (
    <Wrapper>
      <NavItems items={items} />
    </Wrapper>
  );
};

export default Nav;
