import Head from 'next/head';
import { getValues } from "@/hooks/getValues";
import {useEffect, useState} from "react";

const Metatag = ({label, summary}) => {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    const { host, protocol } = window.location;
    const root = `${protocol}//${host}`;
    setBaseUrl(root);
  }, []);

  return (
    <Head>
      <meta property="og:title" content={`${getValues(label)}`} key="title" />
      <meta property="og:description" content={`${getValues(summary)}`} key="summary" />
      <meta name="description" content={`${getValues(summary)}`} key="description" />
      <meta name="twitter:title" content={`${getValues(label)}`} key="twitter-title" />
    </Head>
  );
};
export default Metatag;