import "./DashboardVanCard.css";
import PropTypes from "prop-types";
import van from "../../assets/van.png";
import { Link } from "react-router-dom";

function DashboardVanCard(props) {
  return (
    <div className="dashboard-van-card__van-card">
      <div className="dashboard-van-card__van-content">
        <img
          src={van}
          alt="Modest Explorer van"
          className="dashboard-van-card__van-image"
        />
        <div className="dashboard-van-card__van-info">
          <h3 className="dashboard-van-card__van-name">Modest Explorer</h3>
          <p className="dashboard-van-card__van-price">$60/day</p>
        </div>
      </div>
      <Link to="/host/vans/1/edit" className="dashboard__link">
        Edit
      </Link>
    </div>
  );
}

DashboardVanCard.propTypes = {};

export default DashboardVanCard;
