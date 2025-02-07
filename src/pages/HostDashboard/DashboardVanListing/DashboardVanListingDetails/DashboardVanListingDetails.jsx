import "./DashboardVanListingDetails.css";

import { useOutletContext } from "react-router-dom";

function DashboardVanListingDetails() {
  const van = useOutletContext();

  return (
    <div className="dashboard-van-listing-details">
      <div className="dashboard-van-listing-details__item">
        <span className="dashboard-van-listing-details__label">Name:</span>
        <span className="dashboard-van-listing-details__value">{van.name}</span>
      </div>

      <div className="dashboard-van-listing-details__item">
        <span className="dashboard-van-listing-details__label">Category:</span>
        <span className="dashboard-van-listing-details__value">{van.type}</span>
      </div>
      <div className="dashboard-van-listing-details__item">
        <span className="dashboard-van-listing-details__label">
          Description:
        </span>
        <p className="dashboard-van-listing-details__value">
          {van.description}
        </p>
      </div>
      <div className="dashboard-van-listing-details__item">
        <span className="dashboard-van-listing-details__label">
          Visibility:
        </span>
        <span className="dashboard-van-listing-details__value">Public</span>
      </div>
    </div>
  );
}

DashboardVanListingDetails.propTypes = {};

export default DashboardVanListingDetails;
