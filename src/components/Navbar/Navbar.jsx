import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ navbarList, scrollY, backHome }) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // scroll helper (use when already on home)
  const scrollToId = (id, offset = 60) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // path: route (like '/'), scrollToIdOptional: section id on home
  const handleNavigate = (path, scrollToIdOptional = null) => {
    setMenuIcon(false);

    // If target is home ("/") and we are already on home -> just scroll
    if (path === "/" && location.pathname === "/") {
      if (scrollToIdOptional) {
        scrollToId(scrollToIdOptional);
      } else {
        // if no specific id, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // If target is home ("/") but we're on a different route -> navigate with state
    if (path === "/" && scrollToIdOptional) {
      navigate("/", { state: { scrollTo: scrollToIdOptional } });
      return;
    }

    // Otherwise just navigate to the path
    navigate(path);
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
      <div
        className="navbar-logo"
        onClick={() => handleNavigate("/", "departments")} // logo returns to divisions on Home
        style={{ cursor: "pointer" }}
      >
        <img src={assets.logo} alt="Logo" />
      </div>

      <ul className={`navbar-links ${menuIcon ? "show" : ""}`}>
        {navbarList.map((item, index) => {
          // Main Page item should navigate to Home and land on "departments"
          if (item.name === "Main Page") {
            return (
              <li
                key={index}
                onClick={() => handleNavigate(item.link, backHome)}
                className={activeSection === item.link ? "active-link" : ""}
              >
                {item.name}
              </li>
            );
          }

          // For other items that represent sections on Home, use react-scroll Link when on home
          // NOTE: react-scroll Link will only work if you're on the same page. If clicked from another route,
          // you want to navigate to home instead — the handle above handles Main Page. For other pages,
          // you might want to detect and navigate with state; for simplicity we assume navbarList contains
          // either routes or section IDs. If the Link doesn't work when called from another route, consider
          // using onClick with navigate("/", { state: { scrollTo: item.link } }) instead.
          return (
            <Link
              key={index}
              to={item.link}
              smooth={true}
              offset={item.offset}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(item.link)}
              onClick={() => {
                setMenuIcon(false);
                // If not on home, navigate to home and pass state
                if (location.pathname !== "/") {
                  navigate("/", { state: { scrollTo: item.link } });
                }
              }}
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
        style={{ cursor: "pointer" }}
      />
    </nav>
  );
};

export default Navbar;
