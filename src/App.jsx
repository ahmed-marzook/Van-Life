import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./server";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/VanDetails/VanDetails";
import Layout from "./components/Layout/Layout";
import HostDashboard from "./pages/HostDashboard/HostDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<HostDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
