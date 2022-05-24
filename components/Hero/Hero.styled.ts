import { styled } from "@/stiches.config";
import { Wrapper as Figure } from "@/components/Figure/Figure.styled";

const Wrapper = styled("div", {
  display: "flex",
  position: "relative",
  maxHeight: "20vh",
  overflow: "hidden",

  [`&  ${Figure}`]: {
    filter: "blur(30px)",
    transform: "scale(1.15)",
  },
});

export { Wrapper };
