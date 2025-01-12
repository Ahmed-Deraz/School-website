import React from "react";
import "./Campus.css";
// import gallery_1 from "../../assets/gallery-1.jpg";
// import gallery_2 from "../../assets/gallery-2.jpg";
// import gallery_3 from "../../assets/gallery-3.jpg";
// import gallery_4 from "../../assets/gallery-4.jpg";
import white_arrow from "../../assets/white-arrow.png";
import { easeInOut, motion } from "framer-motion"
import { assets } from "../../assets/assets";

const Campus = () => {
  return (
    <div className="albums">
      <div className="album">
        <img src={assets.gallery_1} alt="" />
        <motion.div
         className="caption"
         initial={{ opacity: 0, x: -100}} // Start hidden and slightly below
         whileInView={{ opacity: 1, x: 0 }} // Animate into view
         viewport={{ once:false, amount: 0.7}} // Trigger once when 20% of the section is visible
         transition={{ duration: 0.8 , easeInOut }} // Smooth animation duration

        >
          <p>Students</p>
          </motion.div>
           
        
      </div>
      <div className="album">
        <img src={assets.gallery_2} alt="" />
        <motion.div
         className="caption"
         initial={{ opacity: 0, x: -100}} // Start hidden and slightly below
         whileInView={{ opacity: 1, x: 0 }} // Animate into view
         viewport={{ once:false, amount: 0.7}} // Trigger once when 20% of the section is visible
         transition={{ duration: 0.8, easeInOut }} // Smooth animation duration

        >
          
       
          <p>Achivers</p>
          
          </motion.div>
      </div>
      <div className="album">
        <img src={assets.gallery_3} alt="" />
        <motion.div
         className="caption"
         initial={{ opacity: 0, x: -100}} // Start hidden and slightly below
         whileInView={{ opacity: 1, x: 0 }} // Animate into view
         viewport={{ once:false, amount: 0.7}} // Trigger once when 20% of the section is visible
         transition={{ duration: 0.8 ,easeInOut }} // Smooth animation duration

        >
          <p>Extracurricular</p>
          </motion.div>
        
      </div>
      <div className="album">
        <img src={assets.gallery_4} alt="" />
        <motion.div
         className="caption"
         initial={{ opacity: 0, x: -100}} // Start hidden and slightly below
         whileInView={{ opacity: 1, x: 0 }} // Animate into view
         viewport={{ once:false, amount: 0.7}} // Trigger once when 20% of the section is visible
         transition={{ duration: 0.8 , easeInOut}} // Smooth animation duration
         

        >
          <p>School Facilities</p>
        </motion.div>
      </div>

      {/* <button className="btn dark-btn" >
        see more here 
        <img src={white_arrow} alt="" />

      </button> */}
    </div>
  );
};

export default Campus;
