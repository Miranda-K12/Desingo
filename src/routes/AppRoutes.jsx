import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";
import Home from "../pages/Home/Home";
import WebDesign from "../pages/webDesing/WebDesign";
import AppDesign from "../pages/appDesign/AppDesign";
import GraphicDesign from "../pages/GraphicDesign/GraphicDesign";
import About from "../pages/About/About";
import Locations from "../pages/Locations/Locations";
import Contact from "../pages/Contact/Contact";

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
