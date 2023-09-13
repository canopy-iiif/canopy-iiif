import { InternationalString } from "@iiif/presentation-3";

// Get string from a IIIF pres 3 label by language code
export const getValues = (
  values: InternationalString,
  language: string | "none" = "none"
) => {
  /*
   * If InternationalString code does not exist on label, then
   * return what may be there, ex: label.none[0] OR label.fr[0]
   */
  if (!values[language]) {
    const codes: Array<string> = Object.getOwnPropertyNames(values);
    if (codes.length > 0) return values[codes[0]];
  }

  /*
   * Return label value for InternationalString code `en`
   */
  return values[language];
};
