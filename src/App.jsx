import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./server";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/VanDetails/VanDetails";
import Layout from "./components/Layout/Layout";
import HostDashboard from "./pages/HostDashboard/HostDashboard";
import DashboardVans from "./pages/HostDashboard/DashboardVans/DashboardVans";
import DashboardReview from "./pages/HostDashboard/DashboardReviews/DashboardReview";
import DashboardIncome from "./pages/HostDashboard/DashboardIncome/DashboardIncome";
import Dashboard from "./pages/HostDashboard/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<DashboardIncome />} />
            <Route path="reviews" element={<DashboardReview />} />
            <Route path="vans" element={<DashboardVans />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
