import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import findUsersitems from "../functions/findUsersitems";
import SearchBar from "../components/SearchBar";
import filterArrBySearch from "../functions/filterArrBySearch";

const Posts = ({ currentUser }) => {
  const [searchText, setSearchText] = useState("");
  const myPostsArr = findUsersitems("posts", currentUser);
  if (!myPostsArr) return <p>Loading...</p>;

  return (
    <div>
      <h2>Posts</h2>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {filterArrBySearch(searchText, myPostsArr).map((postItem) => (
        <Link className="listItem" key={postItem.id} to={`${postItem.id}`}>
          <p key={postItem.id}>
            {postItem.id}: {postItem.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
