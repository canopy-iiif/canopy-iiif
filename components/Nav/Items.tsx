import { Items } from "@/components/Nav/Nav.styled";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface NavItemsProps {
  items: any;
  orientation: "horizontal" | "vertical";
}

const NavItems: React.FC<NavItemsProps> = ({ items, orientation }) => {
  const router = useRouter();

  return (
    <Items orientation={orientation}>
      {items.map((item: any) => (
        <Link
          href={item.path}
          key={item.path}
          className={router.pathname == item.path ? "active" : ""}
        >
          {item.text}
        </Link>
      ))}
    </Items>
  );
};

export default NavItems;
