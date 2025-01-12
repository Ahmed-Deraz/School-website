import React from 'react'
import './Departments.css'

import { easeInOut, motion } from "framer-motion";

const Departments = ({departments , setShowDepartmentHeads}) => {
    return (
        <div className="departments">
          {departments.map((item, index) => {
            return(
              <div
              className="department"
              onClick={() => setShowDepartmentHeads((s) => (s = item.department_head))}
            >
              <img src={item.department_img} alt="" />
              <motion.div
                className="caption"
                initial={{ opacity: 0, x: -100 }} // Start hidden and slightly below
                whileInView={{ opacity: 1, x: 0 }} // Animate into view
                viewport={{ once: false, amount: 0.7 }} // Trigger once when 20% of the section is visible
                transition={{ duration: 0.8, easeInOut }} // Smooth animation duration
              >
                <p>{item.department_name}</p>
              </motion.div>
            </div>
    
            )
            
          })}
        </div>
      );
    };
export default Departments
