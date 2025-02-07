import "./DashboardVanCard.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function DashboardVanCard(props) {
  return (
    <div className="dashboard-van-card__van-card">
      <div className="dashboard-van-card__van-content">
        <img
          src={props.vanImageUrl}
          alt={props.vanName}
          className="dashboard-van-card__van-image"
        />
        <div className="dashboard-van-card__van-info">
          <h3 className="dashboard-van-card__van-name">{props.vanName}</h3>
          <p className="dashboard-van-card__van-price">${props.vanPrice}/day</p>
        </div>
      </div>
      <NavLink to={`./${props.vanId}`} className="dashboard__link">
        Edit
      </NavLink>
    </div>
  );
}

DashboardVanCard.propTypes = {
  vanImageUrl: PropTypes.string.isRequired,
  vanName: PropTypes.string.isRequired,
  vanPrice: PropTypes.number.isRequired,
  vanId: PropTypes.number.isRequired,
};

export default DashboardVanCard;
