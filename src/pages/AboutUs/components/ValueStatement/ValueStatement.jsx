import React from "react";
import "./ValueStatement.css";
import { assets } from "../../../../assets/assets";

const ValueStatement = ({ setShowValueStatement, valueStatement }) => {
  return (
    <div className="value-statement-overlay">
      <div className="value-statement-modal">
        <button
          className="button-close"
          onClick={() => setShowValueStatement("close")}
        >
          <img src={assets.close_sign} alt="Close" />
        </button>

        <ul className="statement-list">
          {valueStatement.map((item, index) => (
            <li key={index}>
              <p>
                {item.title && <span>{item.title}</span>}
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ValueStatement;