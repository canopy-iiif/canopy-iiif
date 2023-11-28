import { useEffect, useState } from "react";

import { NavigationItem } from "@src/customTypes/navigation";

const useNavigation = ({ relativePath }: { relativePath?: string }) => {
  const [navigation, setNavigation] = useState<NavigationItem[]>();

  useEffect(() => {
    (async () => {
      try {
        if (typeof relativePath === "undefined") return;

        const contentDirectory = "content/";
        const directory = relativePath
          ? `${contentDirectory}${relativePath}`
          : contentDirectory;

        const data = await import(`../../${directory}_meta.json`);
        const json: NavigationItem[] = transformObjectWithGetters(
          data?.default
        );

        setNavigation(json);
      } catch (error) {
        console.warn(error);
        console.warn("The relative _meta.json file could not be found.");
      }
    })();
  }, []);

  return { navigation };
};

function transformObjectWithGetters(obj: any) {
  const result = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const desc = Object.getOwnPropertyDescriptor(obj, key);
      if (desc?.get) {
        // @ts-ignore
        result[key] = desc.get.call(obj);
      } else {
        // @ts-ignore
        result[key] =
          typeof obj[key] === "object" && obj[key] !== null
            ? transformObjectWithGetters(obj[key])
            : obj[key];
      }
    }
  }

  return result as NavigationItem[];
}

export default useNavigation;
