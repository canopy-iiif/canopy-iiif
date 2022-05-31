/**
 *
 * @param id
 * @returns
 */
export const getJsonByURI = (uri) =>
  fetch(uri)
    .then((response) => response.json())
    .then((json) => json);
