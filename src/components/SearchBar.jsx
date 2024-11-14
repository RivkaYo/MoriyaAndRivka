import React, { useEffect } from "react";
import { useState } from "react";
const SearchBar = ({items , itemsToDisplay, setItemsToDisplay}) => {
  const [serchFor, setSerchFor] = useState("")
 useEffect(()=>{
   console.log('serchFor: ', serchFor);
   console.log('items: ', items);

 },[items,serchFor])
  useEffect(()=>{
    if (serchFor===""){
      console.log("inside");
      setItemsToDisplay(items)
    }else{
    console.log('items: ', items);
    console.log(7);
     const newItems=[];
     items.map((item)=> item.title === serchFor&& newItems.push(item));
    setItemsToDisplay(newItems)
    // console.log('item.title: ', items[1].title);
    console.log('itemsToDisplay: ', itemsToDisplay);
    }
  },[serchFor])
  return (
    <div key="searchBar">
      <input 
        placeholder="Search..." 
        value={serchFor} 
        onChange={(e)=> setSerchFor(e.target.value)}/>
    </div>
  );
};

export default SearchBar;
