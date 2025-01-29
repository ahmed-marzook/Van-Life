import "./Host.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Host() {
  const [activeNav, setActiveNav] = useState("dashboard");
  return (
    <>
      <nav className="host__dashboard-nav">
        <ul className="host__nav-list">
          <li>
            <a
              href="#"
              className={`host__nav-item ${
                activeNav === "dashboard" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                setActiveNav("dashboard");
              }}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`host__nav-item ${
                activeNav === "income" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav("income");
              }}
            >
              Income
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`host__nav-item ${
                activeNav === "Vans" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav("Vans");
              }}
            >
              Vans
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`host__nav-item ${
                activeNav === "Reviews" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav("Reviews");
              }}
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      <section className="host__header">
        <div className="host__welcome-header">
          <h1 className="host__welcome-title">Welcome!</h1>
          <div className="host__income__header">
            <div className="host__income__text">
              <span className="income-text">Income last </span>
              <span className="income__days">30 days</span>
            </div>
            <Link to="/host/income" className="details-link">
              Details
            </Link>
          </div>
          <h1 className="host_income__amount">$2,260</h1>
        </div>
        <div className="host__review">
          <div className="host__review-score">
            <h2 className="review__title">Review score</h2>
            <div className="host__score">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z"
                  fill="#FF8C38"
                />
              </svg>
              <span>
                <strong>5.0</strong>/5
              </span>
            </div>
          </div>
          <Link to="/host/reviews" className="details-link">
            Details
          </Link>
        </div>
      </section>
      <main className="host__main-content">
        <section className="vans">
          <div className="vans__header">
            <h2 className="vans__title">Your listed vans</h2>
            <Link to="/host/vans" className="vans__view-all">
              View all
            </Link>
          </div>
          <div className="van-card">
            <div className="van-card__content">
              <img
                src="/api/placeholder/100/100"
                alt="Modest Explorer van"
                className="van-card__image"
              />
              <div className="van-card__info">
                <h3 className="van-card__title">Modest Explorer</h3>
                <p className="van-card__price">$60/day</p>
              </div>
            </div>
            <Link to="/host/vans/1/edit" className="van-card__edit">
              Edit
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
