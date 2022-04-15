import BloomIIIF from "@samvera/bloom-iiif";
import { useEffect, useState } from "react";
import { Label } from "@samvera/nectar-iiif";

const Related = ({ label }) => {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    const { host, protocol } = window.location;
    const baseUrl = `${protocol}//${host}`;
    setBaseUrl(baseUrl);
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
        <BloomIIIF
          collectionId={`${baseUrl}/api/iiif/metadata/Subject`}
          key={`${baseUrl}/api/iiif/metadata/Subject`}
        />
        <BloomIIIF
          collectionId={`${baseUrl}/api/iiif/metadata/Date`}
          key={`${baseUrl}/api/iiif/metadata/Date`}
        />
      </div>
    </>
  );
};
export default Related;
