import React, { ReactNode } from "react";

import { styled } from "@/src/styles/stitches";

interface BlockquoteProps {
  children: ReactNode | ReactNode[];
}

const Blockquote: React.FC<BlockquoteProps> = ({ children }) => (
  <StyledBlockquote>{children}</StyledBlockquote>
);

const StyledBlockquote = styled("blockquote", {
  fontWeight: "300",
  color: "$slate11",
  padding: "$gr1 0",
});

export default Blockquote;
