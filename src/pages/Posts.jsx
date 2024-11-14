import React from "react";
import { useState } from "react";
import findUsersitems from "../functions/findUsersitems";
import SearchBar from "../components/SearchBar";
import filterArrBySearch from "../functions/filterArrBySearch";

const Posts = ({ currentUser }) => {
  const [searchText, setSearchText] = useState("");
  const myPostsArr = findUsersitems("posts", currentUser);
  if (!myPostsArr) return <p>Loading...</p>;
  console.log("myPostsArr: ", myPostsArr);

  return (
    <div>
      <h1>Posts</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {filterArrBySearch(searchText, myPostsArr).map((postItem) => (
        <p key={postItem.id}>
          {postItem.id}: {postItem.title}
        </p>
      ))}
    </div>
  );
};

export default Posts;
