import { BaseButtonProps } from "@radix-ui/themes/dist/cjs/components/base-button";
import { ButtonStyled } from "./Button.styled";
import React from "react";
import useNextRouter from "../../../hooks/useNextRouter";

interface ButtonProps extends BaseButtonProps {
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const router = useNextRouter();

  const handleOnClick = (e: React.SyntheticEvent) => {
    if (props.href && !props.target) {
      e.preventDefault();
      // @ts-ignore
      router.push(props.href);
    } else if (props.href && props.target) {
      window.open(props.href, props.target);
    }

    return;
  };

  return <ButtonStyled size="3" {...props} onClick={handleOnClick} />;
};

export default Button;
