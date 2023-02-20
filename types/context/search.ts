import { InternationalString } from "@iiif/presentation-3";

export interface SearchContextStore {
  headerVisible: boolean;
  searchQuery: string;
  searchHeaderFixed: boolean;
  searchSummary?: InternationalString;
}
