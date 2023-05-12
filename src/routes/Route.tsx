import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";

const RouteMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteMain;
