import React, { useEffect, useState } from "react";

const GridLoadMore = ({ handleLoadMore }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => handleLoadMore()}
        style={{
          padding: "1rem 2rem",
          cursor: "pointer",
          fontWeight: "650",
          opacity: "0",
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default GridLoadMore;
