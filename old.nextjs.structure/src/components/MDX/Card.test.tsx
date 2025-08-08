import { render, screen } from "@testing-library/react";

import MDXCard from "@components/MDX/Card";
import { expectUrl } from "../Shared/Link.test";

jest.mock("@lib/constants/canopy", () => {
  return {
    canopyManifests: jest.fn(() => [
      {
        id: "http://example.org/iiif/manifest-1",
        label: "Manifest 1",
        thumbnail: [
          {
            id: "http://example.org/assets/thumbnail-1.jpg",
            type: "Image",
            width: 200,
            height: 200,
          },
        ],
        slug: "manifest-1",
      },
      {
        id: "http://example.org/iiif/manifest-2",
        label: "Manifest 2",
        thumbnail: [
          {
            id: "http://example.org/assets/thumbnail-2.jpg",
            type: "Image",
            width: 200,
            height: 200,
          },
        ],
        slug: "manifest-2",
      },
    ]),
  };
});

describe("MDXCard", () => {
  it("renders", () => {
    // mock the import of the canopyManifests function
    render(<MDXCard iiifContent="http://example.org/iiif/manifest-1" />);

    const mdxCard = screen.getByTestId("mdx-card");
    expect(mdxCard).toHaveTextContent("Manifest 1");

    const cardAnchor = screen.getByRole("link");
    expect(cardAnchor).toHaveAttribute("href", "/works/manifest-1");
    expect(cardAnchor).toHaveAttribute(
      "data-absolute-url",
      expectUrl("/works/manifest-1")
    );

    const cardInset = screen.getByTestId("canopy-card-inset");
    expect(cardInset).toHaveAttribute(
      "data-resource",
      "http://example.org/assets/thumbnail-1.jpg"
    );
  });
});
