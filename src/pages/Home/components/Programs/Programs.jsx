import React from 'react'

import { motion } from "framer-motion"
import './Programs.css'
// import program_1 from '../../../../assets/program-1.jpg'
// import program_2 from '../../../../assets/program-2.jpg'
// import program_3 from '../../../../assets/program-3.jpg'
import { Link } from 'react-router-dom'
import { assets } from '../../../../assets/assets'



const Programs = () => {
  return (
    // <div className='programs'>
    <motion.div
    className="programs"
    initial={{ opacity: 0, x: -100}} // Start hidden and slightly below
    whileInView={{ opacity: 1, x: 0 }} // Animate into view
    viewport={{ once:false, amount: 0.5}} // Trigger once when 20% of the section is visible
    transition={{ duration: 0.8 }} // Smooth animation duration
  >
    
    <motion.div
    
        className="program"
        whileHover={{ scale: 1.05 }} // Zoom effect on hover
        
      >
        <img src={assets.program_1} alt="National Program" />
        <div className="caption">
          <p>National</p>
        </div>
      </motion.div>
      
      <motion.div
        className="program"
        whileHover={{ scale: 1.05 }}
      >
         <Link to='/british'>
        <img src={assets.program_2} alt="IGCSE Program" />
        <div className="caption">
          <p>IGCSE</p>
        </div>
        </Link>
      </motion.div>
      
      <motion.div
        className="program"
        whileHover={{ scale: 1.05 }}
      >
         <Link to='/american'>
        <img src={assets.program_3} alt="American Program" />
        <div className="caption">
          <p>American</p>
        </div>
        </Link>
      </motion.div>
     
      
    {/* </div> */}
    </motion.div>
  )
}

export default Programs

