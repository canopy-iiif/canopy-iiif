import React, { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

interface ButtonProps {
  buttonType: "primary" | "secondary";
  children: ReactNode | ReactNode[];
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonType, children, href }) => {
  return (
    <ButtonStyled
      href={href}
      buttonType={buttonType}
      as={href ? "a" : "button"}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
