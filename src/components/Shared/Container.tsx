import { maxWidths } from "@/styles/theme/containers";
import { styled } from "@/src/styles/stitches";

interface ContainerProps {
  isFlex?: boolean;
  isRelative?: boolean;
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
  isRelative = false,
  maxWidth,
}) => {
  const manualWidth = maxWidth ? { maxWidth: maxWidth } : {};

  return (
    <ContainerStyled
      className={className}
      containerType={containerType}
      css={manualWidth}
      isFlex={isFlex}
      isRelative={isRelative}
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
    isRelative: {
      false: {},
      true: {
        position: "relative",
      },
    },
  },
  width: "100%",
  boxSizing: "border-box",
  padding: "0 $gr5",

  "@xxl": {
    padding: "0",
  },

  "@lg": {
    padding: "0 $gr4",
  },

  "@md": {
    padding: "0 $gr4",
  },

  "@sm": {
    padding: "0 $gr4",
  },

  "@xs": {
    padding: "0 $gr3",
  },

  "@xxs": {
    padding: "0 $gr3",
  },
});

export default Container;
