import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import {CanopyEnvironment} from "@/types/canopy";

const BaseTag = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const router = useRouter();
  useEffect(() => {
    const { host, protocol } = window.location;
    const root = `${protocol}//${host}`;
    setBaseUrl(root);
  }, []);
  const canonicalUrl = ( baseUrl + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const config = process.env.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const titleTemplate = `${config.label.none[0]} | %s`;

  return (
    <NextSeo
      canonical={canonicalUrl}
      titleTemplate={titleTemplate}
      defaultTitle={config.label.none[0]}
      additionalLinkTags={
        [
          {
            rel: 'icon',
            href: '/images/favicon.ico',
          }
        ]
      }
    />
  );
};
export default BaseTag;