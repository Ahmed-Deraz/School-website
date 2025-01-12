import React, { useEffect, useRef } from "react";
import "./Alumni.css";
import {alumniData} from '../../assets/assets'
import { assets } from "../../assets/assets";

const Alumni = () => {
  const slider = useRef();
  let tx = 0;
 const transition = (1/(alumniData.length)) * 100;
 

  const slideForward = () => {
    if (tx > ((transition * -1) * (alumniData.length-1))) {
    
      // console.log(transition);
      tx -= transition;
    }
    else{
      tx = 0 ;
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
  
  useEffect(()=>{
    const interval = setInterval(()=>{
        slideForward()
    },5000);
    return()=>clearInterval(interval);

  },[]);
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //       slideBackward()
  //   },2000);
  //   return()=>clearInterval(interval);

  // },);

  return (
    <div className="alumnis">
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

      <div className="slider-alumnis">
        <ul ref={slider} style={{width:`${alumniData.length * 100}%`}}>
          {
            alumniData.map((item , index)=>{
              return(
                <li key={index}>
                <div className="alumni">
                  <div className="alumni-info">
                    <img src={item.img} alt="" />
                    <div>
                      <h3>{item.name}</h3>
                     
                    </div>
                  </div>
                  <p>
                      {item.paragraph}
                  </p>
                  <span>{item.position}</span>
                </div>
              </li>

              )
             


            })
            
          }
          
          
 
        </ul>
      </div>
    </div>
  );
};

export default Alumni;
