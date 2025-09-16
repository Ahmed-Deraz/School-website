import React from "react";
import "./Values.css";

const Values = ({ valueTitle, setShowValueStatement }) => {
  return (
    <div id="values">
      {valueTitle.map((item, index) => (
        <div
          key={index}
          className="value"
          onClick={() => setShowValueStatement(item.name)}
        >
          <div className="value-content">
            <img src={item.img} alt={item.name} className="value-img" />
            <p className="value-text">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
