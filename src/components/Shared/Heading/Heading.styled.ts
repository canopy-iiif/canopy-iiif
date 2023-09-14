import { styled } from "@/src/styles/stitches";

/* eslint sort-keys: 0 */

const StyledHeading = styled("h2", {
  variants: {
    isHidden: {
      true: {
        position: "absolute",
        visibility: "hidden",
      },
    },
  },

  "&[data-level=h1]": {
    margin: "$gr4 0",
    fontSize: "$gr8",
    fontWeight: "400",
    fontFamily: "$display",
    letterSpacing: "-0.02em",
    lineHeight: "1.1",

    "@sm": {
      fontSize: "$gr7",
    },
  },

  "&[data-level=h2]": {
    margin: "$gr5 0 $gr4",
    fontSize: "$gr7",
    fontWeight: "400",
    fontFamily: "$display",
    letterSpacing: "-0.01em",

    "@sm": {
      fontSize: "$gr5",
    },
  },

  "&[data-level=h3]": {
    margin: "$gr5 0 $gr3",
    color: "$slate11",
    fontSize: "$gr6",
    fontWeight: "300",
    fontFamily: "$sans",
    letterSpacing: "-0.01em",

    "@sm": {
      fontSize: "$gr4",
    },
  },

  "&[data-level=h4]": {},

  "&[data-level=h5]": {},

  "&[data-level=h6]": {},
});

export { StyledHeading };
