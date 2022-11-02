import { maxWidths } from "@/styles/theme/containers";
import { styled } from "@/stitches";

interface ContainerProps {
  isFlex?: boolean;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  containerType?: "default" | "wide";
  maxWidth?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  containerType = "default",
  isFlex = false,
  maxWidth,
}) => {
  const manualWidth = maxWidth ? { maxWidth: maxWidth } : {};

  return (
    <ContainerStyled
      className={className}
      containerType={containerType}
      css={manualWidth}
      isFlex={isFlex}
    >
      {children}
    </ContainerStyled>
  );
};

export const ContainerStyled = styled("div", {
  margin: "0 auto",
  variants: {
    containerType: {
      default: {
        maxWidth: maxWidths.default,
      },
      wide: {
        maxWidth: maxWidths.wide,
      },
    },
    isFlex: {
      false: {},
      true: {
        display: "flex",
      },
    },
  },
  width: "100%",
});

export default Container;
