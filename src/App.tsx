import Download from "./components/download/Download";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Mode from "./components/mode/Mode";
import Pricing from "./components/pricing/Pricing";
import Security from "./components/security/Security";
import Statistics from "./components/statistics/Statistics";
import Technology from "./components/technology/Technology";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Statistics />
      <Technology />
      <Security />
      <Mode />
      <Pricing />
      <Testimonials />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
