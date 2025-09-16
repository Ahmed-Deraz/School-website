import React from 'react';
import './Title.css';
import SplitText from '../SplitText'; // Adjust path if necessary

const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      {/* Subtitle with scroll animation */}
      <SplitText
        text={subtitle}
        className="animated-subtitle"
        delay={20}
        animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
        animationTo={{ opacity: 1, transform: 'translateY(0px)' }}
        easing="easeOutCubic"
        threshold={0.2}
        textAlign="center"
      />

      {/* Title with scroll animation */}
      <SplitText
        text={title}
        className="animated-title"
        delay={40}
        animationFrom={{ opacity: 0, transform: 'translateY(40px)' }}
        animationTo={{ opacity: 1, transform: 'translateY(0px)' }}
        easing="easeOutCubic"
        threshold={0.2}
        textAlign="center"
      />
    </div>
  );
};

export default Title;
