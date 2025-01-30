import "./DashboardVans.css";
import PropTypes from "prop-types";
import DashboardVanCard from "../../../components/DashboardVanCard/DashboardVanCard";

function DashboardVans(props) {
  return (
    <div className="dashboard-vans">
      <h1 className="dashboard-vans__vans-title">Your listed vans</h1>
      <div className="dashboard-vans__van-card-list">
        <DashboardVanCard />
        <DashboardVanCard />
        <DashboardVanCard />
        <DashboardVanCard />
      </div>
    </div>
  );
}

DashboardVans.propTypes = {};

export default DashboardVans;
