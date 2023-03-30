import { InternationalString } from "@iiif/presentation-3";
import { ObjectLiteral } from "..";

export interface CanopyContextStore {
  config: any;
  headerVisible: boolean;
  locale: ObjectLiteral;
  searchHeaderFixed: boolean;
  searchParams: URLSearchParams;
  searchSummary?: InternationalString;
}
