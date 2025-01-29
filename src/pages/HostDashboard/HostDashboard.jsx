import "./HostDashboard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import star from "../../assets/star.svg";
import van from "../../assets/van.png";

export default function HostDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "income", label: "Income" },
    { id: "vans", label: "Vans" },
    { id: "reviews", label: "Reviews" },
  ];

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setActiveNav(id);
  };

  return (
    <div className="host-dashboard">
      <nav className="host-dashboard__nav">
        <ul className="host-dashboard__nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="host-dashboard__nav-item">
              <a
                href="#"
                className={`host-dashboard__nav-link ${
                  activeNav === item.id
                    ? "host-dashboard__nav-link--active"
                    : ""
                }`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="host-dashboard__header">
        <section className="host-dashboard__welcome">
          <h1 className="host-dashboard__welcome-title">Welcome!</h1>
          <div className="host-dashboard__income">
            <div className="host-dashboard__income-header">
              <p className="host-dashboard__income-period">
                Income last{" "}
                <span className="host-dashboard__income-days">30 days</span>
              </p>
              <Link to="/host/income" className="host-dashboard__link">
                Details
              </Link>
            </div>
          </div>
          <h2 className="host-dashboard__income-amount">$2,260</h2>
        </section>

        <section className="host-dashboard__reviews">
          <div className="host-dashboard__reviews-content">
            <div className="host-dashboard__reviews-score">
              <h2 className="host-dashboard__reviews-title">Review score</h2>
              <div className="host-dashboard__rating">
                <img src={star} />
                <span className="host-dashboard__rating-text">
                  <strong>5.0</strong>/5
                </span>
              </div>
            </div>
            <Link to="/host/reviews" className="host-dashboard__link">
              Details
            </Link>
          </div>
        </section>
      </header>

      <main className="host-dashboard__main">
        <section className="host-dashboard__vans">
          <div className="host-dashboard__vans-header">
            <h2 className="host-dashboard__vans-title">Your listed vans</h2>
            <Link to="/host/vans" className="host-dashboard__link">
              View all
            </Link>
          </div>
          <div className="host-dashboard__van-card-list">
            <div className="host-dashboard__van-card">
              <div className="host-dashboard__van-content">
                <img
                  src={van}
                  alt="Modest Explorer van"
                  className="host-dashboard__van-image"
                />
                <div className="host-dashboard__van-info">
                  <h3 className="host-dashboard__van-name">Modest Explorer</h3>
                  <p className="host-dashboard__van-price">$60/day</p>
                </div>
              </div>
              <Link to="/host/vans/1/edit" className="host-dashboard__link">
                Edit
              </Link>
            </div>

            <div className="host-dashboard__van-card">
              <div className="host-dashboard__van-content">
                <img
                  src={van}
                  alt="Modest Explorer van"
                  className="host-dashboard__van-image"
                />
                <div className="host-dashboard__van-info">
                  <h3 className="host-dashboard__van-name">Modest Explorer</h3>
                  <p className="host-dashboard__van-price">$60/day</p>
                </div>
              </div>
              <Link to="/host/vans/1/edit" className="host-dashboard__link">
                Edit
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
