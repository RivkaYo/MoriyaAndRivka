import React from "react";
import useFetch from "../functions/useFetch";
import InfoItem from '../components/InfoItem'

const Info = () => {
  const [users] = useFetch("users");
  console.log("users: ", users);

  return (
    <div>
      <h1>Info</h1>
      {users && <p>{users[0].name}</p>}
      <h2>Info</h2>
      {
        Object.entries(currentUser).map(([key,value]) => {
          if(typeof value=== "object"){
            console.log(key, value);
            Object.entries(value).map(([key,value])=>{
              return (
                <InfoItem key={key} value={value} keyName={key} />
             )
            })
          }
            return (
               <InfoItem key={key} value={value} keyName={key} />
            )
        })
    }
   
    </div>
  );
};

export default Info;
