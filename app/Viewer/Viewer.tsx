"use client";

import dynamic from "next/dynamic";

const Clover: React.ComponentType<{ id: string }> = dynamic(
  () => import("@samvera/clover-iiif"),
  {
    ssr: false,
  }
);
const customTheme = {
  colors: {
    /**
     * Black and dark grays in a light theme.
     * All must contrast to 4.5 or greater with `secondary`.
     */
    primary: "$slate12",
    primaryMuted: "$slate10",
    primaryAlt: "$slate12",

    /**
     * Key brand color(s).
     * `accent` must contrast to 4.5 or greater with `secondary`.
     */
    accent: "$indigo10",
    accentMuted: "$indigo8",
    accentAlt: "$indigo11",

    /**
     * White and light grays in a light theme.
     * All must must contrast to 4.5 or greater with `primary` and  `accent`.
     */
    secondary: "$slate1",
    secondaryMuted: "$slate2",
    secondaryAlt: "$slate3",
  },
  fonts: {
    sans: `$book`,
    display: `$bookTight`,
  },
};

const options = {
  canvasBackgroundColor: `$slate6`,
  canvasHeight: `600px`,
  renderAbout: false,
  showTitle: false,
  showIIIFBadge: false,
  showInformationToggle: false,
};

const Viewer = ({ id }) => (
  <Clover id={id} options={options} customTheme={customTheme} />
);

export default Viewer;
