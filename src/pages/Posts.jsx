import React from "react";
import findUsersitems from "../functions/findUsersitems";
const Posts = ({currentUser}) => {
  const myPostsArr = findUsersitems("posts", currentUser)
  if (!myPostsArr) return<p>Loading...</p>
  console.log('myPostsArr: ', myPostsArr);

  return (
    <div>
      <h1>Posts</h1>
      
        {myPostsArr.map((postItem) => (
          <p key={postItem.id}>
           { postItem.id}:  {postItem.title}
          </p>
        ))}
     
    </div>
  );
};

export default Posts;
