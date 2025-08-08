import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { GoogleFontImport } from "@styles/theme/fonts";
import React from "react";
import {CanopyEnvironment} from "@customTypes/canopy.ts";

class CanopyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    const config = process.env.CANOPY_CONFIG as unknown as CanopyEnvironment;
    const lang = config.locales[0].lang || 'en';

    return (
      <Html lang={lang}>
        <Head>
          <GoogleFontImport />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CanopyDocument;
