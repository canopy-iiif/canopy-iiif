const { convertPresentation2 } = require("@iiif/parser/presentation-2");

/**
 * defensively determine @context
 */
contextAsArray = (json) => {
  const context = Array.isArray(json["@context"])
    ? json["@context"]
    : [json["@context"]];

  return context.map((uri) => uri.replace("http://", "https://"));
};

/**
 * return IIIF resource as Presentation API 3.0
 */
exports.getPresentation3 = (json) => {
  const context = contextAsArray(json);
  const validContexts = [
    "https://iiif.io/api/presentation/2/context.json",
    "https://iiif.io/api/presentation/3/context.json",
  ];

  /**
   * return IIIF resource for valid contexts
   */
  try {
    if (context.includes(validContexts[0])) {
      return convertPresentation2(json);
    } else if (context.includes(validContexts[1])) {
      return json;
    } else {
      throw new TypeError(
        `Collection is not of @context: ${validContexts.join(", ")}.`
      );
    }
  } catch (e) {
    console.error(e);
  }
};
