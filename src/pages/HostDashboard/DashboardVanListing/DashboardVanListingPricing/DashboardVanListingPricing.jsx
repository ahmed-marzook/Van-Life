import "./DashboardVanListingPricing.css";

import { useOutletContext } from "react-router-dom";

export default function DashboardVanListingPricing() {
  const van = useOutletContext();
  return (
    <p className="dashboard-van-listing__price">
      <span className="dashboard-van-listing__amount">
        <strong>${van.price}</strong>
      </span>
      <span className="dashboard-van-listing__duration">/day</span>
    </p>
  );
}
