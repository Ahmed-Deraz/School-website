import "./Accreditation.css";
import { accreditationLogos } from "../../assets/assets";

const Accreditation = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[...accreditationLogos, ...accreditationLogos].map((logo, index) => (
          <div className="marquee-slide" key={index}>
            <img className="marquee-img" src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accreditation;