import { BaseButtonProps } from "@radix-ui/themes/dist/cjs/components/base-button";
import { ButtonStyled } from "@components/Shared/Button/Button.styled";
import Link from "@components/Shared/Link";
import React from "react";

interface ButtonProps extends BaseButtonProps {
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyled size="3" {...props} asChild>
      {props.href && (
        <Link href={props.href} target={props.target}>
          {props.children}
        </Link>
      )}
    </ButtonStyled>
  );
};

export default Button;
