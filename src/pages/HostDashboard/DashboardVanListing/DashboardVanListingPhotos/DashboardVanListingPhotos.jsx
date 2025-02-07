import "./DashboardVanListingPhotos.css";
import { useOutletContext } from "react-router-dom";

export default function DashboardVanListingPhotos() {
  const van = useOutletContext();
  return (
    <div className="dashboard-van-listing-photos">
      <img
        src={van.imageUrl}
        alt={van.name}
        className="dashboard-van-listing-photos__image"
      />
    </div>
  );
}
