import {
  IIIFExternalWebResource,
  InternationalString,
} from "@iiif/presentation-3";

export type SearchResponseItem = {
  id: string;
  type: "Manifest";
  label: InternationalString;
  thumbnail: IIIFExternalWebResource[];
  homepage: [
    {
      id: string;
      type: "Text";
      label: InternationalString;
    }
  ];
};

//export { SearchResponseItem };
