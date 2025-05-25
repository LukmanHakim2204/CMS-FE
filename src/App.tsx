import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import VisiMisi from "./component/VisiMisi";
import Pricing from "./component/Pricing";
import Portfolio from "./component/Portofolio";
import CallToAction from "./component/CallToAction";
import Faq from "./component/Faq";
import MileStone from "./component/MileStone";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ScrollTop from "./component/ScrollTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true, // animasi hanya terjadi sekali
      offset: 100, // offset dari trigger point
    });
  }, []);

  return (
    <>
      <Header></Header>
      <main className="main">
        <Hero />
        <About />
        <VisiMisi />
        <CallToAction />
        <MileStone />
        <Pricing />
        <Faq />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default App;
