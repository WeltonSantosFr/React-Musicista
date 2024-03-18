import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../components/RegisterModal";
import MainPage from "../pages/MainPage";
import ForumPage from "../pages/ForumPage";

const RouteMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<MainPage />} />
        <Route path="forum" element={<ForumPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteMain;
