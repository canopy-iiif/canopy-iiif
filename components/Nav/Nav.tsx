import React from "react";
import { Wrapper } from "./Nav.styled";
import NavItems from "./Items";

const Nav = ({ items }) => {
  return (
    <Wrapper>
      <NavItems items={items} />
    </Wrapper>
  );
};

export default Nav;
