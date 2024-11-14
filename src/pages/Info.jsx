import React from "react";
import InfoItem from "../components/InfoItem";

const Info = ({ currentUser }) => {
  const renderKeyValue = (key, value) => {
    if (typeof value === "object" && value !== null) {
      return (
        <div key={key}>
          <label>{key}:</label>
          <div style={{ marginLeft: "20px" }}>{renderObject(value)}</div>
        </div>
      );
    }
    return <InfoItem key={key} value={value} keyName={key} />;
  };

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
