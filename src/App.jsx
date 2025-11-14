import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  console.log("Print");
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Services />
    </>
  );
}

export default App;
