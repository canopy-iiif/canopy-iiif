import React from "react";
import IIIF from "@/components/SVG/IIIF";
import ThemeMode from "../Header/ThemeMode";

const { collection } = process.env.CANOPY_CONFIG;

const Footer = () => {
  return (
    <footer>
      <a
        href={collection}
        target="_blank"
        style={{
          width: "1rem",
          height: "1rem",
          display: "inline-flex",
        }}
      >
        <IIIF />
      </a>
      <ThemeMode />
    </footer>
  );
};

export default Footer;
