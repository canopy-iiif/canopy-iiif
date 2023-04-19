import { useCanopyState } from "@/context/canopy";
import { getLocale } from "@/hooks/useLocale";
import React, { ChangeEvent } from "react";
import { LocaleStyled } from "./Locale.styled";

const Locale: React.FC = () => {
  const { canopyState, canopyDispatch } = useCanopyState();
  const { locale, config } = canopyState;

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    canopyDispatch({
      locale: await getLocale(config?.locales, e?.target?.value),
      type: "updateLocale",
    });
  };

  if (config?.locales.length <= 1) return null;

  return (
    <LocaleStyled>
      <select onChange={handleChange}>
        {config?.locales.map((option: any) => {
          return (
            <option
              key={option.lang}
              value={option.lang}
              selected={option.lang === locale.lang}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </LocaleStyled>
  );
};

export default Locale;
