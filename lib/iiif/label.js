exports.getLabel = (label, language = "none") => {
  /*
   * If no label exists, return a hardcoded string.
   */
  if (!label) return ["Untitled"];

  if (typeof label === "string") return [label];

  /*
   * If InternationalString code does not exist on label, then
   * return what may be there, ex: label.none[0] OR label.fr[0]
   */
  if (!label[language]) {
    const codes = Object.getOwnPropertyNames(label);
    if (codes.length > 0) return label[codes[0]];
  }

  /*
   * Return label value for InternationalString code `en`
   */
  return label[language];
};

exports.getEntries = (values, language = "none") => {
  /*
   * If InternationalString code does not exist on label, then
   * return what may be there, ex: label.none[0] OR label.fr[0]
   */
  if (!values[language]) {
    const codes = Object.getOwnPropertyNames(values);
    if (codes.length > 0) return values[codes[0]];
  }

  /*
   * Return label value for InternationalString code `en`
   */
  return values[language];
};
