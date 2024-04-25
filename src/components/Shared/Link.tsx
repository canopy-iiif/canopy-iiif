import Link, { LinkProps } from "next/link";

import { Link as RadixThemesLink } from "@radix-ui/themes";

interface CanopyLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

const CanopyLink = (props: CanopyLinkProps) => {
  return (
    <RadixThemesLink asChild>
      <Link {...props} />
    </RadixThemesLink>
  );
};

export default CanopyLink;
