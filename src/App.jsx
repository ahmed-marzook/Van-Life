import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./server";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetails, {
  loader as vanDetailsLoader,
} from "./pages/VanDetails/VanDetails";
import Layout from "./components/Layout/Layout";
import HostDashboard from "./pages/HostDashboard/HostDashboard";
import DashboardVans, {
  loader as hostVansDashboardloader,
} from "./pages/HostDashboard/DashboardVans/DashboardVans";
import DashboardReview from "./pages/HostDashboard/DashboardReviews/DashboardReview";
import DashboardIncome from "./pages/HostDashboard/DashboardIncome/DashboardIncome";
import Dashboard, {
  loader as hostDashboardLoader,
} from "./pages/HostDashboard/Dashboard/Dashboard";
import DashboardVanLisiting, {
  loader as hostDashboardVanListingLoader,
} from "./pages/HostDashboard/DashboardVanListing/DashboardVanListing";
import DashboardVanListingDetails from "./pages/HostDashboard/DashboardVanListing/DashboardVanListingDetails/DashboardVanListingDetails";
import DashboardVanListingPricing from "./pages/HostDashboard/DashboardVanListing/DashboardVanListingPricing/DashboardVanListingPricing";
import DashboardVanListingPhotos from "./pages/HostDashboard/DashboardVanListing/DashboardVanListingPhotos/DashboardVanListingPhotos";
import NotFound from "./pages/NotFound/NotFound";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
import Login, { loader as loginLoader } from "./pages/Login/Login";
import { requireAuth } from "./utility/requireAuth";

const router = createBrowserRouter([
  {
    path: "/Van-life",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
        loader: vanDetailsLoader,
      },
      {
        path: "login",
        element: <Login />,
        loader: loginLoader,
      },
      {
        path: "host",
        element: <HostDashboard />,
        errorElement: <ErrorBoundary />,
        loader: async () => {
          await requireAuth();
        },
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async () => {
              await requireAuth();
              return hostDashboardLoader();
            },
          },
          {
            path: "income",
            element: <DashboardIncome />,
            loader: async () => {
              await requireAuth();
              return null;
            },
          },
          {
            path: "reviews",
            element: <DashboardReview />,
            loader: async () => {
              await requireAuth();
              return null;
            },
          },
          {
            path: "vans",
            element: <DashboardVans />,
            loader: async () => {
              await requireAuth();
              return hostVansDashboardloader();
            },
          },
          {
            path: "vans/:id",
            element: <DashboardVanLisiting />,
            loader: async ({ params }) => {
              await requireAuth();
              return hostDashboardVanListingLoader(params.id);
            },
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
