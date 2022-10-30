import React from "react";
import { useTheme } from "next-themes";
import { styled } from "../../stitches";
import { useEffect, useState } from "react";

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
    <button onClick={() => handleTheme(theme as string)}>Toggle Theme</button>
  );
};

export default ThemeMode;
