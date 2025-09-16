import React from 'react';
import './Departments.css';
import { easeInOut, motion } from "framer-motion";

const Departments = ({ departments, setShowDepartmentHeads }) => {
  return (
    <div className="departments-container" id='departments'>
      
      <div className="departments-grid">
        {departments.map((item, index) => (
          <div className="department">
    
            <img src={item.department_img} alt={item.department_name} />
                     <motion.div
                          className="program-caption"
                          onClick={() => setShowDepartmentHeads(item.department_head)}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.4 }}
                          transition={{ duration: 0.6, ease: easeInOut }}
                        >
              <p>{item.department_name}</p>
           
          </motion.div>
          </div>
        ))}
      </div>
     
    </div>

  );
};

export default Departments;
