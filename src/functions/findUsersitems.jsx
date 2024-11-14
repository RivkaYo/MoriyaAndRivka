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