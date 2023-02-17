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
    margin: "$gr6 0 $gr5",
    color: "$slate12",
    fontSize: "$gr8",
    fontWeight: "800",
    fontFamily: "$bookTight",
  },

  "&[data-level=h2]": {
    margin: "$gr5 0 $gr4",
    color: "$slate11",
    fontSize: "$gr6",
    fontWeight: "500",
    fontFamily: "$bookTight",
  },

  "&[data-level=h3]": {},

  "&[data-level=h4]": {},

  "&[data-level=h5]": {},

  "&[data-level=h6]": {},
});

export { StyledHeading };
