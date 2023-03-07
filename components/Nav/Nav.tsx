import React from "react";
import { Wrapper } from "@/components/Nav/Nav.styled";
import NavItems from "@/components/Nav/Items";

interface NavProps {
  items: any;
  orientation?: "horizontal" | "vertical";
  subNavigation?: any;
}

const Nav: React.FC<NavProps> = ({
  items,
  orientation = "horizontal",
  subNavigation,
}) => {
  return (
    <Wrapper>
      <NavItems
        items={items}
        orientation={orientation}
        subNavigation={subNavigation}
      />
    </Wrapper>
  );
};

export default Nav;
