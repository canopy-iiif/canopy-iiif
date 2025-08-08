import Link, { LinkProps } from "next/link";

import { Link as RadixThemesLink } from "@radix-ui/themes";

const baseUrl = process.env.NEXT_PUBLIC_URL || "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface CanopyLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

const CanopyLink = (props: CanopyLinkProps) => {
  const url = new URL(`${basePath}${props.href}`, baseUrl);

  return (
    <RadixThemesLink asChild>
      <Link {...props} data-absolute-url={url.toString()} />
    </RadixThemesLink>
  );
};

export default CanopyLink;
