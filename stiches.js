import { createStitches } from "@stitches/react";

export const theme = {};

export const media = {
  xxs: "(max-width: 349px)",
  xs: "(max-width: 575px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 991px)",
  xl: "(max-width: 1199px)",
  lg: "(min-width: 1200px)",
};

export const { styled, css, keyframes, createTheme } = createStitches({
  theme,
  media,
});
