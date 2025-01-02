import { NavLink } from "react-router-dom";


export default function NavBar({ title, icon, href }) {
  return (
    <li className="nav-item">
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <span>
          <img src={icon} alt="icon" className="icon" />
        </span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}
