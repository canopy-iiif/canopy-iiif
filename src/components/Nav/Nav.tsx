import NavItems from "@components/Nav/Items";
import { NavigationItem } from "@customTypes/navigation";
import React from "react";
import { Wrapper } from "@components/Nav/Nav.styled";

interface NavProps {
  items: NavigationItem[];
  orientation?: "horizontal" | "vertical";
  subNavigation?: NavigationItem[];
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
