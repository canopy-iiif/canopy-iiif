import { render, screen } from "@testing-library/react";

import Card from "@components/Card/Card";
import React from "react";
import { type SearchResponseItem } from "@customTypes/search/search";

const resource: SearchResponseItem = {
  id: "https://api.dc.library.northwestern.edu/api/v2/works/ceb0858f-3df4-41cb-8afd-1b290f99dfaf?as=iiif",
  type: "Manifest",
  label: {
    none: ["Nez Brave"],
  },
  thumbnail: [
    {
      id: "https://api.dc.library.northwestern.edu/api/v2/works/ceb0858f-3df4-41cb-8afd-1b290f99dfaf/thumbnail",
      type: "Image",
      format: "image/jpeg",
      height: 300,
      width: 300,
    },
  ],
  homepage: [
    {
      id: "http://localhost:5001/works/nez-perce-brave",
      type: "Text",
      label: {
        none: ["Nez Brave"],
      },
    },
  ],
};

test("should render successfully", () => {
  render(<Card resource={resource} />);
  expect(screen.getByText("Nez Brave")).toBeInTheDocument();
});
