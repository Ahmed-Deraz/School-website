import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from '../../../../assets/logo.png'
// import facebook_icon from '../../../../assets/facebook-icon.png'
// import instagram_icon from '../../../../assets/instagram-icon.png'
// import linkedin_icon from '../../../../assets/linkedin-icon.png'
import { Link } from "react-scroll";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";



const Navbar = ({navbarList , scrollY}) => {
const [menuIcon , setMenuIcon] = useState(false);
const navigate = useNavigate();
const handleNavigate = (path) => {
  navigate(path);
  window.scrollTo(0, 0); 
};

const toggleMenu = ()=>{
  menuIcon?setMenuIcon(false):setMenuIcon(true);
}
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
      <div className="logo" onClick={()=>handleNavigate('/')}>
        {/* <img src={logo} alt=""  /> */}
        {/* <Link to="hero" smooth={true} offset={0} duration={500}> */}
          <img src={assets.logo} alt="" />
        {/* </Link> */}
      </div>

      <ul className={menuIcon? "mobile-nav":""}>
        
        {navbarList.map((item, index) => {
          if (item.name === "Contact") {
            return (
              
                <Link
                  to={item.link}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                >
                  <li className="btn">
                  {item.name}
                  </li>
                </Link>
              
            );
            
          }
          if(item.name === "Main Page"){
            return(
              <li  onClick={()=>handleNavigate(item.link)}>
                {item.name}
              </li>
            )
          }
           else {
            return (
             
                <Link
                  to={item.link}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                >
                  <li>
                  {item.name}
                  </li>
                </Link>
             
            );
          }
        })}


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
      <img src={assets.menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
      
    </nav>
  );
};

export default Navbar;
