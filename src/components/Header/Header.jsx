import logo from "../../assets/vanlife-logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router";
import personIcon from "../../assets/Icon.png";

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
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? "header__nav-list active" : undefined
              }
            >
              <img src={personIcon} alt="Account" className="account-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
