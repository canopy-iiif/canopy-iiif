import { blackA, indigo, mauve, crimson } from "@radix-ui/colors";

import { createStitches } from "@stitches/react";

export const theme = {
  colors: {
    ...blackA,
    ...indigo,
    ...mauve,
    ...crimson,
  },
};

export const media = {
  xxs: "(max-width: 349px)",
  xs: "(max-width: 575px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 991px)",
  lg: "(max-width: 1199px)",
  xl: "(min-width: 1200px)",
};

export const { styled, css, keyframes, createTheme } = createStitches({
  theme,
  media,
});
