import React from "react";
import "./Campus.css";
import { easeInOut, motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const captions = ["Students", "Achievers", "Extracurricular", "Facilities"];
const navigates = ["/students", "/achievers", "/extracurricular", "/facilities"];
const images = [
  assets.gallery_1,
  assets.gallery_2,
  assets.gallery_3,
  assets.gallery_4,
];

const Campus = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="campus-section" id="gallery" >
      {/* <h2 className="campus-title">Explore Our Campus</h2> */}
      <div className="albums">
        {images.map((image, index) => (
          <div className="album" key={index} onClick={() => handleNavigate(navigates[index])}>
            <img src={image} alt={`Gallery ${index + 1}`} />
            <motion.div
              className="program-caption"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, ease: easeInOut }}
            >
              <p>{captions[index]}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campus;
