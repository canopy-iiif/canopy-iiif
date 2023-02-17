export interface FacetsContextStore {
  recentFacet?: any;
  userFacetsUnsubmitted: UrlFacets;
}

export type UrlFacets =
  | {
      [key: string]: never;
    }
  | {
      [key: string]: string[];
    };
