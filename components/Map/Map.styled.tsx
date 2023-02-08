import { styled } from "@/stitches";
import {
  indigo,
  indigoDarkA,
  slate,
  slateA,
  slateDarkA,
} from "@radix-ui/colors";
import {ContainerStyled} from "../Shared/Container";

const MapStyled = styled("div", {
  height: "500px",
  ".map-container": {
    height: "500px",
    width: "100%",
    figure: {
      width: "100%",
      margin: "0",
      padding: "0",
    },
  }
});

export { MapStyled };