 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";
 import "swiper/css/pagination";
 import "swiper/css/navigation";
 
 import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";
 import { scholarData } from "../../../../assets/assets";
 import "./SlidingAchievers.css"; // <-- Add a CSS file to style it responsively
 
 const SlidingAchievers = ({data,idName}) => {
   return (
     <Swiper
       tabIndex={0}
       slidesPerView={1}
       spaceBetween={150}
       centeredSlides={true}
       autoplay={{
         delay: 20000,
         disableOnInteraction: false,
       }}
       pagination={{ clickable: true }}
       keyboard={{
         enabled: true,
       }}
       mousewheel={{
         forceToAxis: true,
         sensitivity: 0.2, // lower = slower
         releaseOnEdges: true,
         thresholdDelta: 30, // only trigger if scroll delta > 30px
         thresholdTime: 500,
       }}
       //   navigation={true}
       modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
       className="sliding-achievers-swiper"
       id={idName}
     >
       {scholarData.map((item, index) => (
         <SwiperSlide className="sliding-achievers-slide" key={index}>
           <div className="sliding-achievers-card">
             <img className="sliding-achievers-img" src={item.img} alt={item.name} />
             <div className="sliding-achievers-content">
               <h3>{item.name}</h3>
               <p>{item.paragraph}</p>
               <span>{item.position}</span>
             </div>
           </div>
         </SwiperSlide>
       ))}
     </Swiper>
   );
 };
 
 export default SlidingAchievers;
 