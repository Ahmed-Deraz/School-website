import React from "react";
import "./Values.css";

const Values = ({ valueTitle, setShowValueStatement }) => {
  return (
    <div className="values">
      {valueTitle.map((item, index) => {
        return (
          <div
            className="value"
            onClick={() => setShowValueStatement((s) => (s = item.name))}
          >
            {/* <img src={item.img} alt="" /> */}
            <div className="caption">
              <p>{item.name}</p>
              <img src={item.img} alt="" />
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Values;
