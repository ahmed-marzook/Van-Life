import "./DashboardVans.css";
import DashboardVanCard from "../../../components/DashboardVanCard/DashboardVanCard";
import { getHostVans } from "../../../api/getVanList";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  return getHostVans();
}

function DashboardVans() {
  const vanList = useLoaderData();
  console.log(vanList);
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

export default DashboardVans;
