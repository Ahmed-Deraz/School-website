import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import { assets, testimonialsData } from "../../../../assets/assets";
import UseMediaQuery from '../../../../components/Hook/UseMediaQuery'
// import next_icon from "../../../../assets/next-icon.png";
// import back_icon from "../../../../assets/back-icon.png";
// import user_1 from "../../../../assets/user-1.png";
// import user_2 from "../../../../assets/user-2.png";
// import user_3 from "../../../../assets/user-3.png";
// import user_4 from "../../../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const [display, setDisplay] = useState(2);


  const isSmallScreen = UseMediaQuery("(max-width:540px)");
  useEffect(()=>{
    setDisplay(isSmallScreen ? 1 : 2);

  },[isSmallScreen]);
  const transition = (1 / testimonialsData.length) * 100;

  const slideForward = () => {
    if (tx > transition * -1 * (testimonialsData.length - display)) {
      console.log(transition);
      tx -= transition;
    } else {
      tx = 0;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += transition;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideForward();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials">
      <img
        src={assets.back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <img
        src={assets.next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />

      <div className="slider">
        <ul
          ref={slider}
          style={{ width: `${(testimonialsData.length / display) * 100}%` }}
        >
          {testimonialsData.map((item, index) => {
            return (
              <li key={index}>
                <div className="slide">
                  <div className="user-info">
                    <img src={item.img} alt="" />
                    <div>
                      <h3>{item.name}</h3>
                      <span>{item.division}</span>
                    </div>
                  </div>
                  <p>{item.paragraph}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
