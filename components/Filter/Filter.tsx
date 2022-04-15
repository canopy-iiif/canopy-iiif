import React from "react";

const Filter = () => {
  const handleSearch = async (event) => {
    // do something with event.target.value
  };

  return <input onChange={(event) => handleSearch(event)} />;
};

export default Filter;
