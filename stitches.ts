import sizes, { gr } from "./styles/sizes";
import { dark, light } from "./styles/colors";
import fonts from "./styles/fonts";
import media from "./styles/media";

import { createStitches } from "@stitches/react";

export const theme = {
  colors: {
    ...light,
  },
  fontSizes: {
    gr1: "0.611rem",
    gr2: "0.722rem",
    gr3: "0.833rem",
    gr4: "1rem",
    gr5: `1.177rem`,
    gr6: `1.318rem`,
    gr7: `calc(1rem * ${gr(1)})`,
    gr8: `calc(1rem * ${gr(2)})`,
    gr9: `calc(1rem * ${gr(3)})`,
  },
  fonts: { ...fonts },
  sizes: { ...sizes },
  space: { ...sizes },
  transitions: {
    all: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export const { styled, css, keyframes, createTheme } = createStitches({
  theme,
  media,
});

export const darkTheme = createTheme({
  colors: {
    ...dark,
  },
});
