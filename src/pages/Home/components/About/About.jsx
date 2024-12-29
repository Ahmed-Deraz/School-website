import React from 'react'
import './About.css'
import { assets } from '../../../../assets/assets'
import { useNavigate } from 'react-router-dom'
// import about_image from '../../../../assets/about.jpg'
// import play_icon from '../../../../assets/play-icon.png'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='about'>
        <div className="about-left">
            <img src={assets.about} alt="" className='about-img'/>
            <img src={assets.play_icon} alt="" className='play-icon'/>
            
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>El Quds Language school is a leading private school located in Alexandria, Egypt. It was founded in 2001.</p>
            <p>Number of students in the scholastic year 2001 – 2002 was 160 pupils.
            Due to the hard work of the school administration and teachers , the number of students in this scholastic 2010 – 2011 is 1294 pupils.</p>
            <p>El-Quds Language School is dedicated to provide students with knowledge, develop their talents and raise self –confidence . Education is seen as a broad and complex process of acquiring knowledge and understanding.</p>   
            <p>We believe that every child is an individual .Each is capable of great things .Our aim is to help them find strengths and develop them fully.</p>
            <button className='btn dark-btn' onClick={()=>navigate('/about')} >
                    Know more
                  

                </button>
        </div>
      
    </div>
  )
}

export default About
