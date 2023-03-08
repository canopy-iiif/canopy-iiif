import { Items } from "@/components/Nav/Nav.styled";
import NavItemsLink from "@/components/Nav/ItemsLink";
import React from "react";

interface NavItemsProps {
  items: any;
  orientation: "horizontal" | "vertical";
  subNavigation?: any;
}
const NavItems: React.FC<NavItemsProps> = ({
  items,
  orientation,
  subNavigation,
}) => {
  return (
    <Items orientation={orientation}>
      {items.map((item: any) => (
        <NavItemsLink {...item} key={item.path} subNavigation={subNavigation} />
      ))}
    </Items>
  );
};

export default NavItems;
