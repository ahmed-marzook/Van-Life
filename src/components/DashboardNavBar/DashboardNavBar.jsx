import "./DashboardNavBar.css";
import { NavLink } from "react-router-dom";

function DashboardNavBar() {
  return (
    <nav className="dashboard-nav-bar__nav-list">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-bar__nav-link active"
            : "dashboard-nav-bar__nav-link"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-bar__nav-link active"
            : "dashboard-nav-bar__nav-link"
        }
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-bar__nav-link active"
            : "dashboard-nav-bar__nav-link"
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-bar__nav-link active"
            : "dashboard-nav-bar__nav-link"
        }
      >
        Reviews
      </NavLink>
    </nav>
  );
}

export default DashboardNavBar;
