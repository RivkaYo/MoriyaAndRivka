import React from 'react'

import InfoItem from '../components/InfoItem'

const Info = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  console.log('currentUser: ', currentUser);
  return (
    <div>
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
  )
}

export default Info
