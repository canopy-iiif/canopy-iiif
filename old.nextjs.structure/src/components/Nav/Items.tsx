import { Items } from "@components/Nav/Nav.styled";
import NavItemsLink from "@components/Nav/ItemsLink";
import { NavigationItem } from "@customTypes/navigation";
import React from "react";

interface NavItemsProps {
  items: NavigationItem[];
  orientation: "horizontal" | "vertical";
  subNavigation?: NavigationItem[];
}
const NavItems: React.FC<NavItemsProps> = ({
  items,
  orientation,
  subNavigation,
}) => {
  return (
    <Items orientation={orientation}>
      {items?.map((item) => (
        <NavItemsLink {...item} key={item.path} subNavigation={subNavigation} />
      ))}
    </Items>
  );
};

export default NavItems;
