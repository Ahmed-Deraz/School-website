 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";
 import "swiper/css/pagination";
 import "swiper/css/navigation";
 
 import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";
 import { alumniData  } from "../../assets/assets";
 import "./Alumni.css"; // <-- Add a CSS file to style it responsively
 
 const Alumni = () => {
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
       className="alumni-swiper"
       id="alumni"
     >
       {alumniData.map((item, index) => (
         <SwiperSlide className="alumni-slide" key={index}>
           <div className="alumni-card">
             <img className="alumni-img" src={item.img} alt={item.name} />
             <div className="alumni-content">
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
 
 export default Alumni;
 