import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "./styles/variables.css";
import Header from "./components/header/Header";
import CallToAction from "./components/sharedComponents/callToAction/CallToAction";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
    <Header />
      <main className="main-content-container">
        <AppRoutes />
      </main>
      {!isContactPage && <CallToAction />}
      <Footer />
    </>
  );
}

export default App;
