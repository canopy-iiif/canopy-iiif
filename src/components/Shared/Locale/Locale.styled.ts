import { styled } from "@stitches/react";

const LocaleStyled = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  paddingLeft: "$gr2",

  select: {
    color: "var(--gray-10)",
    background: "none",
    border: "none",
    fontFamily: "$display",
    fontSize: "$gr3",
    cursor: "pointer",

    "&:hover, &:focus": {
      color: "var(--accent-11)",
    },
  },
});

export { LocaleStyled };
