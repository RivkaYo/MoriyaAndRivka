import React from 'react'
import useFetch from './useFetch';
const findUsersitems = ((itemType, currentUser) => {
    const [data] = useFetch(itemType);
    const myItemsArr = [];
  
    function checkIfMine(item) {
      if (item.userId == currentUser.id) {
        myItemsArr.push(item);
      }
    }

    if (data) data.map(checkIfMine);

  return myItemsArr;

})

export default findUsersitems

// import React, { useState, useEffect } from 'react';
// import useFetch from './useFetch';

// const findUsersItems = (itemType, currentUser) => {
//   const [myItemsArr, setMyItemsArr] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [data, isLoading] = useFetch(itemType);
  
//   useEffect(() => {
//     if (data && Array.isArray(data)) {
//       const filteredItems = data.filter(item => item.userId === Number(currentUser.id));
//       setMyItemsArr(filteredItems);
//       setLoading(false);  
//     } else {
//       setLoading(false);  
//       setMyItemsArr([]);  
//     }
//   }, [data, currentUser, isLoading]); 

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return myItemsArr;
// };

// export default findUsersItems;