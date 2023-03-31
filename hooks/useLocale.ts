import { useCanopyState } from "@/context/canopy";

function getLocale(locales: any, lang: string) {
  const current = lang
    ? locales.find((locale: any) => locale.lang === lang)
    : locales[0];

  return {
    config: require(`config/${current.config}`),
    label: current.label,
    lang: current.lang,
  };
}

const LocaleString = (property: string) => {
  const {
    canopyState: { locale },
  } = useCanopyState();

  const { config } = locale;

  return config[property] as string;
};

export { getLocale, LocaleString };
