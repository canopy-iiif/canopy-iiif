export async function getCollection(id: string) {
  const res = await fetch(id);
  const data = await res.json();
  return data;
}
