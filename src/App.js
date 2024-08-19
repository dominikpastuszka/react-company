import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/AboutSection";
import OfferSection from "./components/OfferSection/OfferSection";
import employees from "./data/employees";
import offers from "./data/offers";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <AboutSection employees={employees} />
        <OfferSection offers={offers} />
      </main>
      <Footer />
    </>
  );
}

export default App;
