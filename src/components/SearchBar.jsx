import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div key="searchBar">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
