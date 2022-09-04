import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
