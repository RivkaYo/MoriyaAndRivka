import React from "react";
import findUsersitems from "../functions/findUsersitems";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Posts = ({currentUser}) => {
  const myPostsArr = findUsersitems("posts", currentUser)
  if (!myPostsArr) return<p>Loading...</p>
  console.log('myPostsArr: ', myPostsArr);

  return (
    <div>
      <h1>Posts</h1>
      <SearchBar items={myPostsArr}/>
        {myPostsArr.map((postItem) => (
        <Link className = "listItem" key={postItem.id}>
          <p >
           ID:{postItem.id}<br/>
             {postItem.title}
          </p>
        </Link>
        ))}
     
    </div>
  );
};

export default Posts;
