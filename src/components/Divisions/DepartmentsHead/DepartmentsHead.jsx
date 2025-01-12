import React from "react";
import "./DepartmentsHead.css";
import { assets } from "../../../assets/assets";

const DepartmentsHead = ({ setShowDepartmentHeads, head }) => {
  return (
    <div className="department-head">
      <div className="department-head-container">
        <div className="head-info">
          <img src={head.img} alt="" />
          <div className="head-word">
            <h2>Dear parents,</h2>
            <p>{head.paragraph_1}</p>
            <p>{head.paragraph_2}</p>
            <p className="signature"> {head.signature}</p>
          </div>
          <img
            src={assets.close_sign}
            className="close-sign"
            onClick={() => setShowDepartmentHeads("close")}
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentsHead;
