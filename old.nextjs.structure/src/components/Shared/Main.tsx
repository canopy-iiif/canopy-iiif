import React, { ReactNode } from "react";
import { styled } from "@stitches/react";

const Main = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <MainStyled>{children}</MainStyled>;
};

const MainStyled = styled("main", {
  margin: "0",
});

export default Main;
