export const getResourceImage = (resource, size = "600,", region = "full") => {
  if (Array.isArray(resource)) resource = resource[0];

  let image = resource.id;

  if (region !== "full") {
    console.log(resource);
  }

  if (!resource.service) return resource.id;

  if (!Array.isArray(resource.service)) {
    if (resource.service["@id"])
      return `${resource.service["@id"]}/${region}/${size}/0/default.jpg`;

    if (resource.service.id)
      return `${resource.service.id}/${region}/${size}/0/default.jpg`;
  }

  if (resource.service["@id"])
    return `${resource.service["@id"]}/${region}/${size}/0/default.jpg`;

  return `${resource.service[0].id}/${region}/${size}/0/default.jpg`;
};
