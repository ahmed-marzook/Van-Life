import "./HostDashboard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
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
    <div className="dashboard">
      <nav className="dashboard__nav">
        <ul className="dashboard__nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="dashboard__nav-item">
              <a
                href="#"
                className={`dashboard__nav-link ${
                  activeNav === item.id ? "dashboard__nav-link--active" : ""
                }`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="dashboard__header">
        <section className="dashboard__welcome">
          <h1 className="dashboard__welcome-title">Welcome!</h1>
          <div className="dashboard__income">
            <div className="dashboard__income-header">
              <p className="dashboard__income-period">
                Income last{" "}
                <span className="dashboard__income-days">30 days</span>
              </p>
              <Link to="/host/income" className="dashboard__link">
                Details
              </Link>
            </div>
            <p className="dashboard__income-amount">$2,260</p>
          </div>
        </section>

        <section className="dashboard__reviews">
          <div className="dashboard__reviews-content">
            <div className="dashboard__reviews-score">
              <h2 className="dashboard__reviews-title">Review score</h2>
              <div className="dashboard__rating">
                <img src="../../assets/star.svg" />
                <span className="dashboard__rating-text">
                  <strong>5.0</strong>/5
                </span>
              </div>
            </div>
            <Link to="/host/reviews" className="dashboard__link">
              Details
            </Link>
          </div>
        </section>
      </header>

      <main className="dashboard__main">
        <section className="dashboard__vans">
          <div className="dashboard__vans-header">
            <h2 className="dashboard__vans-title">Your listed vans</h2>
            <Link to="/host/vans" className="dashboard__link">
              View all
            </Link>
          </div>
          <div className="dashboard__van-card">
            <div className="dashboard__van-content">
              <img
                src="/api/placeholder/100/100"
                alt="Modest Explorer van"
                className="dashboard__van-image"
              />
              <div className="dashboard__van-info">
                <h3 className="dashboard__van-name">Modest Explorer</h3>
                <p className="dashboard__van-price">$60/day</p>
              </div>
            </div>
            <Link to="/host/vans/1/edit" className="dashboard__link">
              Edit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
