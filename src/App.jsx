import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/variables.css";
import Header from "./components/header/Header";
import CallToAction from "./components/sharedComponents/callToAction/CallToAction";
import Footer from "./components/footer/Footer";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
function App() {
  return (
    <Router>
      <ContentWrapper>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <CallToAction />
      </ContentWrapper>
      <Footer />
    </Router>
  );
}

export default App;
