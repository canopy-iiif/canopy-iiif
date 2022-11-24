/**
 * Declare any modules here which don't have
 * types exported with their package.  Without
 * this, TypeScript complains.
 */
declare module "@samvera/bloom-iiif";
declare module "@samvera/clover-iiif";

declare global {
  interface Window {
    dataLayer: any;
  }
}
