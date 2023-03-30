import { InternationalString } from "@iiif/presentation-3";

export interface CanopyContextStore {
  headerVisible: boolean;
  searchHeaderFixed: boolean;
  searchParams: URLSearchParams;
  searchSummary?: InternationalString;
}
