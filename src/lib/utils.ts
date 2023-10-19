export const getJsonByURI = (uri: string) =>
  fetch(uri).then((response) => response.json());

export function getRandomItem<T>(array: Array<T> = []): T | null {
  if (Array.isArray(array) && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  return null;
}
