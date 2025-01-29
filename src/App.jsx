import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./server";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/VanDetails/VanDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
