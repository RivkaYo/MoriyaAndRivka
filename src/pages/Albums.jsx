import React from "react";
// import { Outlet } from "react-router-dom";
import findUsersitems from "../functions/findUsersitems";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import filterArrBySearch from "../functions/filterArrBySearch";
import { useState } from "react";

const Albums = ({ currentUser }) => {
  const [searchText, setSearchText] = useState("");
  const myAlbumsArr = findUsersitems("albums", currentUser);
  if (!myAlbumsArr) return <p>Loading...</p>;

  return (
    <div>
      <h1>Albums</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {filterArrBySearch(searchText, myAlbumsArr).map((albumItem) => (
        <Link className="listItem" key={albumItem.id} to={`${albumItem.id}`}>
          <p>
            ID:{albumItem.id}
            <br />
            {albumItem.title}
          </p>
        </Link>
      ))}
      {/* <Outlet /> */}
    </div>
  );
};

export default Albums;
