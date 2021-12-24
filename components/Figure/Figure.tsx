import { getResourceImage } from "../../hooks/getResourceImage";

const Figure = ({ label, path, resource }) => {
  let image = null;

  if (resource) image = getResourceImage(resource, "400,", "full");

  return <></>;
};

export default Figure;
