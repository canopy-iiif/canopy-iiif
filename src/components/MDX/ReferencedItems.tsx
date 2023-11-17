import React, { useContext } from "react";

import FrontMatterContext from "@src/context/front-matter";
import Grid from "@components/Grid/Grid";
import MDXCard from "@components/MDX/Card";

const ReferencedItems: React.FC = () => {
  const frontMatter = useContext(FrontMatterContext);

  return (
    <Grid>
      {frontMatter.referencedManifests?.map((manifestId, index) => {
        return (
          <MDXCard
            iiifContent={manifestId}
            key={`card-${manifestId}-${index}`}
          />
        );
      })}
    </Grid>
  );
};

export default ReferencedItems;
