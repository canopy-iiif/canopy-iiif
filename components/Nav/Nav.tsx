import React from "react";
import { Wrapper } from "@/components/Nav/Nav.styled";
import NavItems from "@/components/Nav/Items";
import { NavigationItem } from "@/types/navigation";

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
