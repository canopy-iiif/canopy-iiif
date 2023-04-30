import { styled } from "@/stitches";

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
    color: "$slate12",
    fontSize: "$gr8",
    fontWeight: "800",
    fontFamily: "$bookTight",

    "@sm": {
      fontSize: "$gr7",
    },
  },

  "&[data-level=h2]": {
    margin: "$gr5 0 $gr4",
    color: "$slate11",
    fontSize: "$gr7",
    fontWeight: "200",
    fontFamily: "$bookTight",

    "@sm": {
      fontSize: "$gr5",
    },
  },

  "&[data-level=h3]": {
    margin: "$gr5 0 $gr3",
    color: "$slate12",
    fontSize: "$gr5",
    fontWeight: "800",
    fontFamily: "$bookTight",

    "@sm": {
      fontSize: "$gr4",
    },
  },

  "&[data-level=h4]": {},

  "&[data-level=h5]": {},

  "&[data-level=h6]": {},
});

export { StyledHeading };
