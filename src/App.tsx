import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import GoogleMap from "./components/GoogleMap";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tradition from "./components/Tradition";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Banner />
      <Tradition />
      <Gallery />
      <Services />
      <Menu />
      <GoogleMap />
      <Footer />
    </main>
  );
};

export default App;
