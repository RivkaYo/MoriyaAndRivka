import React from "react";
import useFetch from "../functions/useFetch";
import InfoItem from '../components/InfoItem'

const Info = () => {
  const [user] = useFetch("users/1");
  console.log("users: ", user);

  return (
    <div>
      
      <h2>Info</h2>
      {user && <p>{user.name}</p>}
      {user &&
        Object.entries(user).map(([key,value]) => {
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
