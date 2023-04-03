import { useCanopyState } from "@/context/canopy";

function getDefaultLang(locales: any) {
  const { language } = new Intl.Locale(window?.navigator?.language);
  const canopyLanguage = locales.find((entry: any) => entry.lang === language);
  return canopyLanguage ? canopyLanguage?.lang : locales[0].lang;
}

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

export { getDefaultLang, getLocale, LocaleString };
