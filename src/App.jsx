import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import ScrollToTop from "./components/utils/ScrollToTop";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Services />
      <WhyChooseUs />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
