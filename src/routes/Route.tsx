import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import LessonNotesPage from "../pages/LessonNotesPage";
import LessonTriadsPage from "../pages/LessonTriadsPage";
import LessonTetradsPage from "../pages/LessonTetradsPage";
import LessonMajorScalesPage from "../pages/LessonMajorScalesPage";
import LessonMinorScalesPage from "../pages/LessonMinorScalesPage";
import LessonHarmonicFieldPage from "../pages/LessonHarmonicFieldPage";
import TabsPage from "../pages/TabsPage";

const RouteMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<MainPage />} />
        <Route path="tabs" element={<TabsPage />} />
        <Route path="lesson/notes" element={<LessonNotesPage />} />
        <Route path="lesson/triads" element={<LessonTriadsPage />} />
        <Route path="lesson/tetrads" element={<LessonTetradsPage />} />
        <Route path="lesson/major-scales" element={<LessonMajorScalesPage />} />
        <Route path="lesson/minor-scales" element={<LessonMinorScalesPage />} />
        <Route
          path="lesson/harmonic-field"
          element={<LessonHarmonicFieldPage />}
        />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteMain;
