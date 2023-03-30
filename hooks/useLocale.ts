import { useCanopyState } from "@/context/canopy";

function getLocale(locales: any, lang = "en") {
  const { config } = locales.find((locale: any) => locale.lang === lang);
  return require(`config/${config}`);
}

const LocaleString = (property: string) => {
  const {
    canopyState: { locale },
  } = useCanopyState();

  return locale[property] as string;
};

export { getLocale, LocaleString };
