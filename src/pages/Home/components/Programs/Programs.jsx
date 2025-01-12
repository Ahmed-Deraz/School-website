import React from "react";

import { easeInOut, motion } from "framer-motion";
import "./Programs.css";
// import program_1 from '../../../../assets/program-1.jpg'
// import program_2 from '../../../../assets/program-2.jpg'
// import program_3 from '../../../../assets/program-3.jpg'
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../../assets/assets";

const Programs = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    // <div className='programs'>
    <div className="divisions">
      <div className="division"  onClick={()=>handleNavigate('/british')}>
        {/* <Link to="/british"> */}
          <img src={assets.program_2} alt="IGCSE Program" />
          <motion.div
                          className="caption"
                          initial={{ opacity: 0, x: -100 }} // Start hidden and slightly below
                          whileInView={{ opacity: 1, x: 0 }} // Animate into view
                          viewport={{ once: false, amount: 0.7 }} // Trigger once when 20% of the section is visible
                          transition={{ duration: 0.8, easeInOut }} // Smooth animation duration
                        >
            <p>British school</p>
          </motion.div>
        {/* </Link> */}
      </div>

      <div className="division"  onClick={()=>handleNavigate('/american')}>
        {/* <Link to="/american"> */}
          <img src={assets.program_3} alt="American Program" />
          <motion.div
                          className="caption"
                          initial={{ opacity: 0, x: -100 }} // Start hidden and slightly below
                          whileInView={{ opacity: 1, x: 0 }} // Animate into view
                          viewport={{ once: false, amount: 0.7 }} // Trigger once when 20% of the section is visible
                          transition={{ duration: 0.8, easeInOut }} // Smooth animation duration
                        >
            <p>American school</p>
          </motion.div>
        {/* </Link> */}
      </div>

      {/* </div> */}
    </div>
  );
};

export default Programs;
