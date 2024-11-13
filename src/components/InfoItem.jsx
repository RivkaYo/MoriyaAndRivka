import React, { useState } from 'react'

const InfoItem = ({keyName, value}) => {
  const [itemValue, setItemValue] = useState(value.toString())
  return (
        <div>
            <label htmlFor={keyName}> {keyName}: </label>
              <input id={keyName} name={keyName} value={itemValue} onChange={(e)=> setItemValue(e.target.value)} />
        </div>
  )
}

export default InfoItem
