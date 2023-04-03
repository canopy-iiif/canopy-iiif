import { useCanopyState } from "@/context/canopy";
import { getLocale } from "@/hooks/useLocale";
import React, { ChangeEvent } from "react";

const Locale: React.FC = () => {
  const { canopyState, canopyDispatch } = useCanopyState();
  const { locale, config } = canopyState;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    canopyDispatch({
      locale: getLocale(config?.locales, e?.target?.value),
      type: "updateLocale",
    });
  };

  return (
    <select onChange={handleChange}>
      {config?.locales.map((option) => {
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
  );
};

export default Locale;
