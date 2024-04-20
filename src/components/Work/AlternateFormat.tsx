import React from "react";
import {
  Rendering
} from "@samvera/clover-iiif/primitives";

const AlernateFormat = ({ rendering }: { rendering }) => {
  return (
    <dl>
      <dt>Alternate Formats</dt>
      <dd>
        <Rendering rendering={rendering} />
      </dd>
    </dl>
  );
};

export default AlernateFormat;