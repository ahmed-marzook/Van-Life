import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
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
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/Van-life",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
      },
      {
        path: "host",
        element: <HostDashboard />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "income",
            element: <DashboardIncome />,
          },
          {
            path: "reviews",
            element: <DashboardReview />,
          },
          {
            path: "vans",
            element: <DashboardVans />,
          },
          {
            path: "vans/:id",
            element: <DashboardVanLisiting />,
            children: [
              {
                index: true,
                element: <DashboardVanListingDetails />,
              },
              {
                path: "pricing",
                element: <DashboardVanListingPricing />,
              },
              {
                path: "photos",
                element: <DashboardVanListingPhotos />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
