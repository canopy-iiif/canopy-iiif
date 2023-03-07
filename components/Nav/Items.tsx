import { Items } from "@/components/Nav/Nav.styled";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Nav from "./Nav";

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
  const router = useRouter();

  return (
    <Items orientation={orientation}>
      {items.map((item: any) => (
        <>
          <Link
            href={item.path}
            key={item.path}
            className={router.pathname == item.path ? "active" : ""}
          >
            {item.text}
          </Link>
          {subNavigation && item.path === router.pathname && (
            <Nav items={subNavigation} orientation={"vertical"} />
          )}
        </>
      ))}
    </Items>
  );
};

export default NavItems;
