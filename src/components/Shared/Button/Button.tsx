import Link from "next/link";
import React, { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";
Link;

interface ButtonProps {
  buttonType?: "primary" | "secondary" | "transparent";
  children: ReactNode | ReactNode[];
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonType, children, href }) => {
  return (
    <ButtonStyled
      href={href}
      buttonType={buttonType}
      as={href ? Link : "button"}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
