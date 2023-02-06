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

  "&[level=h1]": {
    margin: "$gr6 0 $gr5",
    color: "$slate12",
    fontSize: "$gr8",
    fontWeight: "800",
    fontFamily: "$bookTight",
  },

  "&[level=h2]": {
    margin: "$gr5 0 $gr4",
    color: "$slate11",
    fontSize: "$gr6",
    fontWeight: "500",
    fontFamily: "$bookTight",
  },

  "&[level=h3]": {},

  "&[level=h4]": {},

  "&[level=h5]": {},

  "&[level=h6]": {},
});

export { StyledHeading };
