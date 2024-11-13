import React from "react";
// import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import findUsersitems from "../functions/findUsersitems";
import { Link } from "react-router-dom";

const Albums = ({currentUser}) => {
    const myAlbumsArr = findUsersitems("albums", currentUser)
    if (!myAlbumsArr) return<p>Loading...</p>
    console.log('myAlbumsArr: ', myAlbumsArr);
  
  return (
    <div>
      <h1>Albums</h1>
      <SearchBar items={myAlbumsArr}/>

        {myAlbumsArr.map((albumItem) => (
          <Link className="listItem" key={albumItem.id}>
          <p>
           ID:{albumItem.id}<br/>
             {albumItem.title}
          </p>
          </Link>
        ))}
      {/* <Outlet /> */}
    </div>
  );
};

export default Albums;
