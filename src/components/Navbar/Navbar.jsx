import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from '../../../../assets/logo.png'
// import facebook_icon from '../../../../assets/facebook-icon.png'
// import instagram_icon from '../../../../assets/instagram-icon.png'
// import linkedin_icon from '../../../../assets/linkedin-icon.png'
import { Link } from "react-scroll";
import { assets } from "../../assets/assets";


const Navbar = ({navbarList , scrollY}) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > scrollY ? setSticky(true) : setSticky(false);
      console.log(scrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }),
    [];
  return (
    
    <nav className={`container ${sticky ? "nav-dark" : ""}`}>
      <div className="logo">
        {/* <img src={logo} alt=""  /> */}
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <img src={assets.logo} alt="" />
        </Link>
      </div>

      <ul>
        {navbarList.map((item, index) => {
          if (item.name === "Contact Us") {
            return (
              <li className="btn">
                <Link
                  to={item.link}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                >
                  {item.name}
                </Link>
              </li>
            );
          } else {
            return (
              <li>
                <Link
                  to={item.link}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                >
                  {item.name}
                </Link>
              </li>
            );
          }
        })}

        {/* <li ><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='counters' smooth={true} offset={-260} duration={500}>Facts</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Divisions</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='alumnis' smooth={true} offset={-260} duration={500}>Alumnis</Link></li>
            <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li> */}

        {/* <li>Divisions</li>
            <li>Gallery</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button>
          
            </li> */}
        <li className="social-media">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={assets.facebook_icon} alt="" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={assets.instagram_icon} alt="" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={assets.linkedin_icon} alt="" />
          </a>
        </li>
      </ul>
      {/* <div className="social-media">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={linkedin_icon} alt="" />

        </div> */}
    </nav>
  );
};

export default Navbar;
