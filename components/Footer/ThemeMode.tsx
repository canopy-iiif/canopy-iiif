import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../Shared/Button/Button";
import { ButtonStyled } from "../Shared/Button/Button.styled";

const ThemeMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleTheme = (currentTheme: string) => {
    switch (currentTheme) {
      case "light":
        console.log("dark");
        setTheme("dark");
        break;
      case "dark":
        console.log("light");
        setTheme("light");
        break;
    }
  };

  if (!mounted) return <></>;

  return (
    <ButtonStyled
      as="button"
      onClick={() => handleTheme(theme as string)}
      buttonSize="small"
    >
      Toggle Theme
    </ButtonStyled>
  );
};

export default ThemeMode;
