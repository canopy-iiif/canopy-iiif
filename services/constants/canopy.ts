import COLLECTIONS from "@/.canopy/collections.json";
import FACETS from "@/.canopy/facets.json";
import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import {
  CanopyCollections,
  CanopyFacets,
  CanopyManifests,
  CanopySearch,
} from "@/types/canopy";

const canopyCollections = () => COLLECTIONS as unknown as CanopyCollections;
const canopyFacets = () => FACETS as unknown as CanopyFacets;
const canopyIndex = () => INDEX as unknown as CanopySearch;
const canopyManifests = () => MANIFESTS as unknown as CanopyManifests;

export { canopyCollections, canopyFacets, canopyIndex, canopyManifests };
