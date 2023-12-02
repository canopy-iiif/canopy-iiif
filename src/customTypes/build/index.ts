type CanopyBuildConfigValues = {
  collection: string;
  featured?: Array<string>;
  label?: { none: Array<string> };
  metadata: Array<string>;
  summary?: { none: Array<string> };
};

interface CanopyConfig extends CanopyBuildConfigValues {
  url: string;
  basePath: string;
  baseUrl: string;
}

export { type CanopyBuildConfigValues, type CanopyConfig };
