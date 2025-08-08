type CanopyBuildConfigValues = {
  collection: string;
  featured?: Array<string>;
  label?: { none: Array<string> };
  locales: any; // fully define
  map: any; // fully define
  metadata: Array<string>;
  search: any; // fully define
  summary?: { none: Array<string> };
  theme: any; // fully define
};

interface CanopyConfig extends CanopyBuildConfigValues {
  url: string;
  basePath: string;
  baseUrl: string;
}

export { type CanopyBuildConfigValues, type CanopyConfig };
