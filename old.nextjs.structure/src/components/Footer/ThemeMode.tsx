import { useEffect, useState } from "react";

import { ButtonStyled } from "../Shared/Button/Button.styled";
import { LocaleString } from "@hooks/useLocale";
import React from "react";
import { useCanopyState } from "@src/context/canopy";
import { useTheme } from "next-themes";

const ThemeMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { canopyState } = useCanopyState();
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

  if (!mounted || !canopyState.config.theme.toggleEnabled) return <></>;

  return (
    <ButtonStyled onClick={() => handleTheme(theme as string)}>
      {toggleTheme}
    </ButtonStyled>
  );
};

export default ThemeMode;
