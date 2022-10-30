import React, { useEffect, useState } from "react";
import globalStyles from "../styles/global";

export default function CanApp({ Component, pageProps }) {
  globalStyles();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return <>{mounted && <Component {...pageProps} />}</>;
}
