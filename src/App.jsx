import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  console.log("Print");
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
    </>
  );
}

export default App;
