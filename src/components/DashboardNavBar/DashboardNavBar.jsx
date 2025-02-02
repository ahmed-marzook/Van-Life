import "./DashboardNavBar.css";
import { NavLink } from "react-router-dom";

function DashboardNavBar() {
  return (
    <nav className="dashboard-nav-bar__nav-list">
      <NavLink
        to="/host"
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
        to="/host/income"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-bar__nav-link active"
            : "dashboard-nav-bar__nav-link"
        }
      >
        Income
      </NavLink>
      <NavLink
        to="/host/vans"
        className={({ isActive }) =>
          isActive
            ? "dashboard-nav-bar__nav-link active"
            : "dashboard-nav-bar__nav-link"
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="/host/reviews"
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
