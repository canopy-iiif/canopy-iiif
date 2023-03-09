import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import { NavigationItem } from "@/types/navigation";
import { useRouter } from "next/router";
import { useRef } from "react";

interface NavItemsLinkProps {
  path: string;
  text: string;
  subNavigation?: NavigationItem[];
}

const NavItemsLink: React.FC<NavItemsLinkProps> = ({
  path,
  subNavigation,
  text,
}) => {
  const router = useRouter();
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const href = e?.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    if (targetId !== href) {
      e.preventDefault();
      window.history.pushState({}, "", href);
      const target = document.getElementById(targetId);
      if (target)
        window.scrollTo({
          behavior: "smooth",
          top:
            target?.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            50,
        });
    }
  };

  return (
    <>
      <Link
        href={path}
        className={router.pathname == path ? "active" : ""}
        onClick={handleOnClick}
        ref={linkRef}
      >
        {text}
      </Link>
      {subNavigation && path === router.pathname && (
        <Nav items={subNavigation} orientation={"vertical"} />
      )}
    </>
  );
};

export default NavItemsLink;
