import React from "react";
import { useState } from "react";
const SearchBar = () => {
  const [serchFor, setSerchFor] = useState()
  return (
    <div key="searchBar">
      <input placeholder="Search..." value={serchFor} onChange={(e)=> setSerchFor(e.target.value)}/>
    </div>
  );
};

export default SearchBar;
