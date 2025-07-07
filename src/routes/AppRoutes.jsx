import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.WEBDESIGN} element={<WebDesign />} />
      <Route path={ROUTES.APPDESIGN} element={<AppDesign />} />
      <Route path={ROUTES.GRAPHICDESIGN} element={<GraphicDesign />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.LOCATIONS} element={<Locations />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
    </Routes>
  );
}
