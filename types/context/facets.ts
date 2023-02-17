export interface FacetsContextStore {
  facetsModal: UrlFacets;
}

export type UrlFacets =
  | {
      [key: string]: never;
    }
  | {
      [key: string]: string[];
    };
