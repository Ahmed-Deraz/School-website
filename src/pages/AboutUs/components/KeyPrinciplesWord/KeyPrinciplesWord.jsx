import React, { useEffect, useRef } from "react";
import { assets, keyPrinciles } from "../../../../assets/assets";
import "./KeyPrinciplesWord.css";

const KeyPrinciplesWord = () => {
  const slider = useRef();
  let tx = 0;
  const transition = (1 / keyPrinciles.length) * 100;

  const slideForward = () => {
    if (tx > transition * -1 * (keyPrinciles.length - 1)) {
      // console.log(transition);
      tx -= transition;
    } else {
      tx = 0;
    }
    // console.log(tx);
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
    <div id="principles">
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

      <div className="slider-principles">
        <ul ref={slider} style={{ width: `${keyPrinciles.length * 100}%` }}>
          {keyPrinciles.map((item, index) => {
            return (
              <li  className="slide" key={index}>
                <div className="principle-card">
                  <img className="principle-img" src={item.img} alt="" />
                  <div className="principle-content">
                    <h2>{item.title},</h2>
                    <p>{item.paragraph_1}</p>
                    <p>{item.paragraph_2}</p>
                    <p>{item.paragraph_3}</p>
                    <span>{item.signature}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default KeyPrinciplesWord;
