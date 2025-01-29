import "./HostDashboard.css";
import { useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardVans from "../../components/DashboardVans/DashboardVans";

export default function HostDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "income", label: "Income" },
    { id: "vans", label: "Vans" },
    { id: "reviews", label: "Reviews" },
  ];

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setActiveNav(id);
  };

  return (
    <div className="host-dashboard">
      <nav className="host-dashboard__nav">
        <ul className="host-dashboard__nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="host-dashboard__nav-item">
              <a
                href="#"
                className={`host-dashboard__nav-link ${
                  activeNav === item.id
                    ? "host-dashboard__nav-link--active"
                    : ""
                }`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="host-dashboard__main-content">
        <Dashboard />
      </main>
    </div>
  );
}
