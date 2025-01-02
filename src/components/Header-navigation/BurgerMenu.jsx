import { useState } from "react";
import { NavLink } from "react-router-dom";

import SittersForm from "./SittersForm.jsx";

import "./BurgerMenu.css";


export default function BurgerMenu({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  function handleChange() {
    setIsActive(true);
  }

  function closeModal() {
    setIsActive(false);
  }

  return (
    <div>
      <div className="burger-menu">
        <button
          className={`burger-button ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="burger-icon"></span>
        </button>
        <nav className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
          <ul className="menu-list">
            {links.map((link, index) => (
              <li key={index} className="menu-item">
                <NavLink to={`/${link.href}`} className="menu-link">
                  {link.title}
                </NavLink>
              </li>
            ))}
            <li className="menu-item">
              <NavLink to="/login" className="menu-link">
                Login
              </NavLink>
            </li>
            <li className="menu-item">
              <button
                onClick={handleChange}
                className="menu-link button"
                id="menu-link-btn"
              >
                Join Us as a Pet Sitter!
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {isActive && <SittersForm closeModal={closeModal} />}
    </div>
  );
}
