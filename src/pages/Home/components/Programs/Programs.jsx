import React from "react";
import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import "./Programs.css";

const Programs = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="programs-section" id="divisions">
      {/* <h2 className="programs-title">Choose Your Program</h2> */}

      <div className="programs-container">
        <div className="program-card" onClick={() => handleNavigate("/british")}>
          <img src={assets.program_2} alt="British Program" className="program-image" />
          <motion.div
            className="program-caption"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            <p>British School</p>
          </motion.div>
        </div>

        <div className="program-card" onClick={() => handleNavigate("/american")}>
          <img src={assets.program_3} alt="American Program" className="program-image" />
          <motion.div
            className="program-caption"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeInOut }}
          >
            <p>American School</p>
          </motion.div>
        </div>
      </div>
     </div>
  );
};

export default Programs;