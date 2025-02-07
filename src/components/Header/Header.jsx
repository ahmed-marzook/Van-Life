import logo from "../../assets/vanlife-logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <Link to=".">
        <img className="header__logo" src={logo} alt="Van Life Logo" />
      </Link>
      <nav className="header__nav-links">
        <ul className="header__nav-list">
          <li>
            <NavLink
              to="host"
              className={({ isActive }) =>
                isActive ? "header__nav-list active" : undefined
              }
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "header__nav-list active" : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vans"
              className={({ isActive }) =>
                isActive ? "header__nav-list active" : undefined
              }
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
