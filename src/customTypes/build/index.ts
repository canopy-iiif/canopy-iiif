import { NavigationItem } from "../navigation";

type CanopyBuildConfig = {
  dev: CanopyBuildConfigValues;
  environment: CanopyBuildConfigValues;
  options: any;
  prod: CanopyBuildConfigValues;
};

type CanopyBuildConfigValues = {
  label: { none: Array<string> };
  collection: string;
  featured: Array<string>;
  metadata: Array<string>;
};

type CanopyBuildNavigation = {
  primary: Array<NavigationItem>;
  secondary: Array<NavigationItem>;
};

type CanopyConfig = {
  environment: CanopyBuildConfigValues;
  options: any;
  url: string;
  basePath: string;
  baseUrl: string;
};

export {
  type CanopyBuildConfig,
  type CanopyBuildConfigValues,
  type CanopyBuildNavigation,
  type CanopyConfig,
};
