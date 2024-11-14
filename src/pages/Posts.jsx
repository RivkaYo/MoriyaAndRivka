import React, { useState ,useEffect } from "react";
import findUsersitems from "../functions/findUsersitems";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Posts = ({currentUser}) => {
  const [itemsToDisplay, setItemsToDisplay] =useState([])
  const myPostsArr = findUsersitems("posts", currentUser)
  console.log('myPostsArr: ', myPostsArr);
  if (myPostsArr){ setCheck(myPostsArr)}
    // return<p>Loading...</p>}
  
  useEffect(()=>{
    
    console.log('myPostsArr2: ', myPostsArr);
    setItemsToDisplay([...myPostsArr])
  },[])
  console.log('itemsToDisplay: ', itemsToDisplay);
  return (
    <div>
      <h1>Posts</h1>
      <SearchBar 
      items={myPostsArr} 
      itemsToDisplay={itemsToDisplay} 
      setItemsToDisplay={setItemsToDisplay}/>

        {itemsToDisplay.map((postItem) => (
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
