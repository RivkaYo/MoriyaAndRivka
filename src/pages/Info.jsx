import React from "react";
import useFetch from "../functions/useFetch";
import InfoItem from "../components/InfoItem";

const Info = ({ currentUser }) => {
  console.log('currentUser: ', currentUser);
  // const [user] = useFetch(`users/${currentUser.id}`);
  const renderKeyValue = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      // Handle nested object rendering
      return (
        <div key={key}>
          <label>{key}:</label>
          <div style={{ marginLeft: '20px' }}>
            {/* Recursively call renderObject for nested objects */}
            {renderObject(value)}
          </div>
        </div>
      );
    }
  
    // Handle primitive values by rendering a label and input
    return (
      <InfoItem key={key} value={value} keyName={key} />
    );
  };
  
  // Helper function to render the object
  const renderObject = (obj) => {
    return (
      <div>
        {Object.entries(obj).map(([key, value]) => renderKeyValue(key, value))}
      </div>
    );
  };
  return (
    <div>
      <h2>Info</h2>
      {currentUser && <p>{currentUser.name}</p>}
      {renderObject(currentUser)}
    </div>
  );
};

export default Info;
