export const getJsonByURI = (uri) =>
  fetch(uri).then((response) => response.json());
