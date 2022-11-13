import React from "react";
import { styled } from "@stitches/react";

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

const MainStyled = styled("main", {
  margin: "0",
});

export default Main;
