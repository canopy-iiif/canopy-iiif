export const getJsonByURI = (uri: string) =>
  fetch(uri).then((response) => response.json());
