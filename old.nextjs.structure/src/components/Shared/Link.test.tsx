import { render, screen } from "@testing-library/react";

import CanopyLink from "./Link";

const baseUrl = process.env.NEXT_PUBLIC_URL || "http://example.org";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function expectUrl(slug: string) {
  return new URL(`${basePath}${slug}`, baseUrl).toString();
}

describe("CanopyLink", () => {
  it("renders", () => {
    render(<CanopyLink href="/works/manifest-2">Manifest 2</CanopyLink>);

    const anchor = screen.getByRole("link");
    expect(anchor).toHaveTextContent("Manifest 2");
    expect(anchor).toHaveAttribute("href", "/works/manifest-2");
    expect(anchor).toHaveAttribute(
      "data-absolute-url",
      expectUrl("/works/manifest-2")
    );
  });
});
