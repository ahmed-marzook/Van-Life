import "./DashboardVans.css";
import PropTypes from "prop-types";
import DashboardVanCard from "../../../components/DashboardVanCard/DashboardVanCard";
import { useState, useEffect } from "react";

function DashboardVans(props) {
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
    <div className="dashboard-vans">
      <h1 className="dashboard-vans__vans-title">Your listed vans</h1>
      <div className="dashboard-vans__van-card-list">
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
    </div>
  );
}

DashboardVans.propTypes = {};

export default DashboardVans;
