import { Items } from "@/components/Nav/Nav.styled";
import NavItemsLink from "@/components/Nav/ItemsLink";
import React from "react";
import { NavigationItem } from "@/types/navigation";

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
      {items.map((item) => (
        <NavItemsLink {...item} key={item.path} subNavigation={subNavigation} />
      ))}
    </Items>
  );
};

export default NavItems;
