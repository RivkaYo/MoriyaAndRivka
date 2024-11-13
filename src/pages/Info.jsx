import React from "react";
import useFetch from "../functions/useFetch";
import InfoItem from '../components/InfoItem'

const Info = () => {
  const [user] = useFetch("users/1");
  return (
    <div>

      <h2>Info</h2>
      {user && <p>{user.name}</p>}
      {user &&
        Object.entries(user).map(([key, value]) => {
          if (typeof value !== "object") {
            return (
              <>
              <br />
              <InfoItem key={key} value={value} keyName={key} />
              </>
            )
          } else {
            return (
              <>
              <br />
                <div>
                  {key}: 
                  {Object.entries(value).map(([key1, value1]) => {
                    return (
                      <InfoItem key={key1} value={value1} keyName={key1} />
                    )
                  })}
                </div>
              </>
            )
          }
        })
      }
    <br />
    </div>
  );
};

export default Info;
