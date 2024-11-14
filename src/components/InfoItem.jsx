import React, { useState } from 'react'

const InfoItem = ({keyName, value}) => {
  const [itemValue, setItemValue] = useState(value.toString())

  const handleInputChange=(e)=>{
    setItemValue(e.target.value)
  }
  return (
        <div>
            <label htmlFor={keyName}> {keyName}: </label>
              <input 
                id={keyName} 
                name={keyName} 
                value={itemValue} 
                onChange={handleInputChange}
                />
        </div>
  )
}

export default InfoItem
