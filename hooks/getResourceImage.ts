export const getResourceImage = (resource, size = "600,", region = "full") => {
  const image = `${resource.service[0].id}/${region}/${size}/0/default.jpg`;
  return image;
};
