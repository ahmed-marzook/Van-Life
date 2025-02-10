import Tag from "../../../components/Tag/Tag";
import "./DashboardVanListing.css";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api/getVanList";

export async function loader({ params }) {
  return getHostVans(params.id);
}

function DashboardVanListing() {
  const van = useLoaderData();

  return (
    <div className="dashboard-van-listing">
      <section className="dashboard-van-listing__back-link">
        ←{" "}
        <Link to=".." relative="path">
          Back to all vans
        </Link>
      </section>
      <main className="dashboard-van-listing__main-content">
        <div className="dashboard-van-listing__header">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="dashboard-van-listing__image"
          />

          <div className="dashboard-van-listing__top-info">
            <Tag tag={van.type} />
            <h2 className="dashboard-van-listing__title">{van.name}</h2>
            <p className="dashboard-van-listing__price">
              <span className="dashboard-van-listing__amount">
                <strong>${van.price}</strong>
              </span>
              <span className="dashboard-van-listing__duration">/day</span>
            </p>
          </div>
        </div>
        <div className="dashboard-van-listing__nav">
          <NavLink
            to={"."}
            end
            className={({ isActive }) =>
              isActive
                ? "dashboard-van-listing__nav-link active"
                : "dashboard-van-listing__nav-link"
            }
          >
            Details
          </NavLink>
          <NavLink
            to={"pricing"}
            className={({ isActive }) =>
              isActive
                ? "dashboard-van-listing__nav-link active"
                : "dashboard-van-listing__nav-link"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to={"photos"}
            className={({ isActive }) =>
              isActive
                ? "dashboard-van-listing__nav-link active"
                : "dashboard-van-listing__nav-link"
            }
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={{ currentVan: van }} />
      </main>
    </div>
  );
}

export default DashboardVanListing;
