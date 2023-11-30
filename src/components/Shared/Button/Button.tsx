import React, { ReactNode } from "react";

import { ButtonStyled } from "./Button.styled";
import Link from "next/link";

Link;

interface ButtonProps {
  buttonType?: "primary" | "secondary" | "transparent";
  children: ReactNode | ReactNode[];
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  buttonType,
  children,
  href,
  target,
}) => {
  return (
    <ButtonStyled
      href={href}
      buttonType={buttonType}
      as={href ? Link : "button"}
      target={target}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
