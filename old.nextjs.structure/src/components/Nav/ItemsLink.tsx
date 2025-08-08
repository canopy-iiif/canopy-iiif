import CanopyLink from "@components/Shared/Link";
import Nav from "@components/Nav/Nav";
import { NavigationItem } from "@customTypes/navigation";
import { useRef } from "react";
import { useRouter } from "next/router";

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

  const { query, pathname } = router;
  const constructedPath = pathname.replace(/\[.*\]/, query?.slug as string);

  return (
    <>
      <CanopyLink
        href={path}
        className={path === constructedPath ? "active" : ""}
        onClick={handleOnClick}
        ref={linkRef}
      >
        {text}
      </CanopyLink>
      {subNavigation && path === constructedPath && (
        <Nav items={subNavigation} orientation={"vertical"} />
      )}
    </>
  );
};

export default NavItemsLink;
