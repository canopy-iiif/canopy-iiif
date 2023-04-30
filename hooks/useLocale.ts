import { CanopyLocale } from "@/types/canopy";
import { useCanopyState } from "@/context/canopy";

function getDefaultLang(locales: CanopyLocale[]) {
  const { language } = new Intl.Locale(window?.navigator?.language);
  const canopyLanguage = locales.find((entry) => entry.lang === language);
  return canopyLanguage ? canopyLanguage?.lang : locales[0].lang;
}

async function getLocale(locales: CanopyLocale[], lang: string) {
  const current = lang
    ? locales.find((locale) => locale.lang === lang)
    : locales[0];

  const config = await import(`config/${current?.config}`);

  return {
    config: config,
    label: current?.label,
    lang: current?.lang,
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
