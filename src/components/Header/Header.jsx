import logo from "../../assets/vanlife-logo.svg";
import "./Header.css";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Van Life Logo" />
      </Link>
      <nav className="header__nav-links">
        <ul className="header__nav-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link>Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
