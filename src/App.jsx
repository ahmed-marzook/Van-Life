import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
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
import DashboardVanLisiting from "./pages/HostDashboard/DashboardVanListing/DashboardVanListing";
import DashboardVanListingDetails from "./pages/HostDashboard/DashboardVanListing/DashboardVanListingDetails/DashboardVanListingDetails";
import DashboardVanListingPricing from "./pages/HostDashboard/DashboardVanListing/DashboardVanListingPricing/DashboardVanListingPricing";
import DashboardVanListingPhotos from "./pages/HostDashboard/DashboardVanListing/DashboardVanListingPhotos/DashboardVanListingPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Van-life" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<DashboardIncome />} />
            <Route path="reviews" element={<DashboardReview />} />
            <Route path="vans" element={<DashboardVans />} />

            <Route path="vans/:id" element={<DashboardVanLisiting />}>
              <Route index element={<DashboardVanListingDetails />} />
              <Route path="pricing" element={<DashboardVanListingPricing />} />
              <Route path="photos" element={<DashboardVanListingPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
