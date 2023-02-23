export const getResourceImage = (
  resource: any,
  size = "600,",
  region = "full"
) => {
  if (Array.isArray(resource)) resource = resource[0];

  if (!resource.service) return resource.id;

  if (!Array.isArray(resource.service)) {
    if (resource.service["@id"])
      return `${resource.service["@id"]}/${region}/${size}/0/default.jpg`;

    if (resource.service.id)
      return `${resource.service.id}/${region}/${size}/0/default.jpg`;
  }

  if (resource.service[0]["@id"])
    return `${resource.service[0]["@id"]}/${region}/${size}/0/default.jpg`;

  return `${resource.service[0].id}/${region}/${size}/0/default.jpg`;
};
