import { NextSeo } from 'next-seo';
import { getValues } from '@/hooks/getValues';
import { InternationalString } from "@iiif/presentation-3";
import { getResourceImage } from "@/hooks/getResourceImage";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

interface MetatagProps {
  label: InternationalString;
  summary: InternationalString;
  thumbnail: { id: string }[];
}

const Metatag: React.FunctionComponent<MetatagProps> = ({ label, summary, thumbnail }) => {
  const [baseUrl, setBaseUrl] = useState("");
  const router = useRouter();
  const labelValue = getValues(label);
  const summaryValue = getValues(summary);
  const thumbnailValue = getResourceImage(thumbnail);
  useEffect(() => {
    const { host, protocol } = window.location;
    const root = `${protocol}//${host}`;
    setBaseUrl(root);
  }, []);
  const canonicalUrl = ( baseUrl + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <NextSeo
      title={labelValue ? labelValue[0] : undefined}
      description={summaryValue ? summaryValue[0] : undefined}
      openGraph={
        {
          title: labelValue,
          description: summaryValue,
          url: canonicalUrl,
          images: [
            {
              url: thumbnailValue,
              alt: labelValue
            }
          ]
        }
      }
    />
  );
};
export default Metatag;