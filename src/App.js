import AllClientCards from "./components/card/clientCard/AllClientCards";
import AllCards from "./components/card/mainCard/AllCards";
import OfferCard from "./components/card/offerCard/OfferCard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <div>
      <div className="bg-[#f9f6e7] pt-2">
        <Header />
        <HeroSection />
        <AllCards />
        <div className="bg-[#ffffff] p-5 lg:p-8">
          <AllClientCards />
          <OfferCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
