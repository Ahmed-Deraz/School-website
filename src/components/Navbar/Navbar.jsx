import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ navbarList, scrollY }) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMenuIcon(false);
  };

  const toggleMenu = () => {
    setMenuIcon(!menuIcon);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <nav className={`navbar ${sticky ? "nav-sticky" : ""}`}>
      <div className="navbar-logo" onClick={() => handleNavigate("/")}>
        <img src={assets.logo} alt="Logo" />
      </div>

      <ul className={`navbar-links ${menuIcon ? "show" : ""}`}>
        {navbarList.map((item, index) => {
          if (item.name === "Main Page") {
            return (
              <li
                key={index}
                onClick={() => handleNavigate(item.link)}
                className={activeSection === item.link ? "active-link" : ""}
              >
                {item.name}
              </li>
            );
          }

          return (
            <Link
              key={index}
              to={item.link}
              smooth={true}
              offset={item.offset}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(item.link)}
              onClick={() => setMenuIcon(false)}
            >
              <li
                className={`${item.name === "Contact" ? "btn" : ""} ${
                  activeSection === item.link ? "active-link" : ""
                }`}
              >
                {item.name}
              </li>
            </Link>
          );
        })}

        <li className="social-media">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.facebook_icon} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.instagram_icon} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </a>
           <a
      href="https://wa.me/201000777450?text=Hello%20I%20need%20info%20about%20admission"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        padding: "12px 16px",
        borderRadius: "50px",
        fontSize: "16px",
        textDecoration: "none",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      }}
    >
      💬 WhatsApp
    </a>
  

        </li>
      </ul>

      <img
        src={assets.menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
