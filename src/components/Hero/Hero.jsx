import React from 'react'
import './Hero.css'

const Hero = ({hero}) => {
   const backgroundStyle = {
    
    background: `linear-gradient(rgba(8, 0, 58, 0.7), #b71e1b6f), url(${hero.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

     
    }
    
    return (
      <div className='hero container' style={backgroundStyle}>
        
        {/* <img src={heroAmerican.img} alt="" /> */}
        <div className="hero-text">
          <h1>{hero.header}</h1>
          <p>{hero.paragraph}</p>
          {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button> */}
        </div>
        
      </div>
    )
  }

export default Hero
