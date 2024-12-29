import React, { useRef, useState } from 'react'
import { assets, historyData } from '../../../../assets/assets';
import './History.css'

const History = () => {
  const slider = useRef();
  const txRef = useRef(0);
  const [data, setData] = useState(historyData);
  const transition = (1 / historyData.length) * 100;
 
  const newData = [...data];
  const slideForward = async () => {
    if (txRef.current > -25) {
      txRef.current -= transition;
      
      
    }
    //  else {
    //  txRef.current = 0 ;
    // }

    slider.current.style.transition = "transform 0.1s ease"; // Smooth transition
    slider.current.style.transform = `translateX(${txRef.current}%)`;
  
    // Wait for the transition to complete
    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for 0.5 seconds (matches transition time)
  
    // const newData = [...data];
  newData.push(newData.shift()); // Reorder the array
  setData(newData); // Update the state

  // Reset translateX without animation
  slider.current.style.transition = "none"; // Disable transition
  slider.current.style.transform = `translateX(${0}%)`;
  };
 

  const slideBackward= async () => {
    if (txRef.current <25) {
        txRef.current += transition;
    }
   
    slider.current.style.transition = "transform 0.2s ease"; // Smooth transition
    slider.current.style.transform = `translateX(${txRef.current}%)`;
  
    // Wait for the transition to complete
    await new Promise((resolve) => setTimeout(resolve, 200)); // Wait for 0.5 seconds (matches transition time)
  
    // const newData = [...data];
    newData.unshift(newData.pop());
  setData(newData); // Update the state

  // Reset translateX without animation
  slider.current.style.transition = "none"; // Disable transition
  slider.current.style.transform = `translateX(${0}%)`;
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       slideForward();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="history">
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
          style={{ width: `${(historyData.length / 4) * 100}%` }}
        >
          {data.map((item, index) => {
            return (
              <li key={index}>
                <div className="date-container">
                <h3 className="date">{item.name}</h3>

                </div>
                
                <div className="slide">
                 
                  <img src={item.img} alt="" />

                  <p className='history-title'>{item.division}</p>
                  <p className='history-info'>{item.paragraph}</p>

                  
                   
                      
                    
                   
                
                  
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


export default History
