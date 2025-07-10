import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/variables.css";
import Header from "./components/header/Header";
import CallToAction from "./components/sharedComponents/callToAction/CallToAction";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <CallToAction />
      <Footer />
    </Router>
  );
}

export default App;
