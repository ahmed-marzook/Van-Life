import "./Dashboard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import star from "../../../assets/star.svg";
import DashboardVanCard from "../../../components/DashboardVanCard/DashboardVanCard";
import { useState, useEffect } from "react";

function Dashboard(props) {
  const [vanList, setVanList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVanList(data.vans);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVans();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="dashboard">
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
          </div>
          <h2 className="dashboard__income-amount">$2,260</h2>
        </section>

        <section className="dashboard__reviews">
          <div className="dashboard__reviews-content">
            <div className="dashboard__reviews-score">
              <h2 className="dashboard__reviews-title">Review score</h2>
              <div className="dashboard__rating">
                <img src={star} />
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
          <div className="dashboard__van-card-list">
            {vanList.map((van) => (
              <DashboardVanCard
                key={van.id}
                vanId={van.id}
                vanName={van.name}
                vanTag={van.type}
                vanPrice={van.price}
                vanImageUrl={van.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
