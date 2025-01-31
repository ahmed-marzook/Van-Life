import DashboardNavBar from "../../components/DashboardNavBar/DashboardNavBar";
import { Outlet } from "react-router-dom";

export default function HostDashboard() {
  return (
    <div className="host-dashboard">
      <DashboardNavBar />
      <main className="host-dashboard__main-content">
        <Outlet />
      </main>
    </div>
  );
}
