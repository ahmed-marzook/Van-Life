import Tag from "../../../components/Tag/Tag";
import "./DashboardVanListing.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DashboardVanListing(props) {
  const [van, setVan] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVan(data.vans);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVans();
  }, [params]);

  if (isLoading) return <h1>IS LOADING...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="dashboard-van-listing">
      <section className="dashboard-van-listing__back-link">
        ← <Link to="/host/vans">Back to all vans</Link>
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
                ${van.price}
              </span>
              <span className="dashboard-van-listing__duration">/day</span>
            </p>
          </div>
        </div>
        <div className="dashboard-van-listing__nav">
          <NavLink
            to={`/host/vans/${params.id}`}
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
            to={`/host/vans/${params.id}/pricing`}
            className={({ isActive }) =>
              isActive
                ? "dashboard-van-listing__nav-link active"
                : "dashboard-van-listing__nav-link"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to={`/host/vans/${params.id}/photos`}
            className={({ isActive }) =>
              isActive
                ? "dashboard-van-listing__nav-link active"
                : "dashboard-van-listing__nav-link"
            }
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={van} />
      </main>
    </div>
  );
}

DashboardVanListing.propTypes = {};

export default DashboardVanListing;
