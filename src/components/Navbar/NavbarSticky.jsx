import  {  useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const NavbarSticky = ({ navbarList }) => {
  const [menuIcon, setMenuIcon] = useState(false);

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



  return (
    <nav className="navbar nav-sticky" >
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

export default NavbarSticky;