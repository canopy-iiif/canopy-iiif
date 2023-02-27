import { InternationalString } from "@iiif/presentation-3";

export interface SearchContextStore {
  headerVisible: boolean;
  searchHeaderFixed: boolean;
  searchParams: URLSearchParams;
  searchSummary?: InternationalString;
}
