import BloomIIIF from "@samvera/bloom-iiif";
import { useEffect, useState } from "react";
import { Label } from "@samvera/nectar-iiif";

const Related = ({ label }) => {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    const { host, protocol } = window.location;
    const root = `${protocol}//${host}`;
    setBaseUrl(root);
  }, []);

  /**
   * @todo: create graphql query to find related (or just 10 random) and IIIF collection endpoint
   */
  return (
    <>
      <h2>
        More Like <Label label={label} as="span" />
      </h2>
      <div>
        @todo: create mvp method for getting related items as bloom
        collection(s)
      </div>
    </>
  );
};
export default Related;
