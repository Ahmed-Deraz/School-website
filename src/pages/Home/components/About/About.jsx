import React from 'react'
import './About.css'
import { assets } from '../../../../assets/assets'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div id='about'>
      <div className="about-left">
        <img src={assets.about} alt="About Us" className='about-img' />
        <img src={assets.play_icon} alt="Play Icon" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nurturing Tomorrow's Leaders</h2>
        <p>El-Quds Language School is dedicated to providing students with knowledge, developing their talents, and raising self-confidence. Education is seen as a broad and complex process of acquiring knowledge and understanding.</p>
        <p>We believe that every child is an individual. Each is capable of great things. Our aim is to help them find strengths and develop them fully.</p>
        <button className='btn dark-btn' onClick={() => handleNavigate('/about')}>
          Know more
        </button>
      </div>
    </div>
  );
}

export default About;