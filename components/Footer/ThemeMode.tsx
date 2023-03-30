import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ButtonStyled } from "../Shared/Button/Button.styled";
import { LocaleString } from "@/hooks/useLocale";

const ThemeMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = LocaleString("footerToggleTheme");

  useEffect(() => setMounted(true), []);

  const handleTheme = (currentTheme: string) => {
    switch (currentTheme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
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
      {toggleTheme}
    </ButtonStyled>
  );
};

export default ThemeMode;
