import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { getValues } from '@/hooks/getValues';
import {InternationalString} from "@iiif/presentation-3";

interface MetatagProps {
  label: InternationalString;
  summary: InternationalString;
  thumbnail: { id: string }[];
}

const Metatag: React.FunctionComponent<MetatagProps> = ({ label, summary, thumbnail }) => {
  const labelValue = getValues(label);
  const summaryValue = getValues(summary);

  return (
    <NextSeo
      title={labelValue}
      description={summaryValue}
      openGraph={
        {
          title: labelValue,
          description: summaryValue,
          images: [
            {
              url: thumbnail[0].id,
              alt: `Image of ${labelValue}`
            }
          ]
        }
      }
    />
  );
};
export default Metatag;