import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import SittersForm from "./SittersForm.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

import "./MainNavigation.css";

import logo from "../../images/logo.png";
import icon from "../../icons/responsible.png";
import icon_find from "../../icons/check.png";
import icon_help from "../../icons/help.png";
import icon_login from "../../icons/login.png";


const navLinks = [
  { href: "services", icon: icon, title: "Our services" },
  { href: "search-sitters", icon: icon_find, title: "Search for Pet Sitters" },
  { href: "questions", icon: icon_help, title: "Frequently asked questions" },
];

export default function MainNavigation() {
  const [isActive, setIsActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleChange() {
    setIsActive(true);
  }

  function closeModal() {
    setIsActive(false);
  }

  return (
    <header className="header">
      <div>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>

      {!isSmallScreen && (
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <NavBar key={index} {...link} />
            ))}
          </ul>
        </nav>
      )}

      {!isSmallScreen && (
        <div className="header__registration">
          <NavLink to="/login">
            <img src={icon_login} alt="Icon login" className="icon-login" />
          </NavLink>
          <button onClick={handleChange} className="button">
            Join Us as a Pet Sitter!
          </button>
          {isActive && <SittersForm closeModal={closeModal} />}
        </div>
      )}

      {isSmallScreen && <BurgerMenu links={navLinks} />}
    </header>
  );
}
