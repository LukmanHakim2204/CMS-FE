import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../component/Header";
import Hero from "../component/Landing/Hero";
import About from "../component/Landing/About";
import VisiMisi from "../component/Landing/VisiMisi";
import Portfolio from "../component/Landing/Portofolio";
import MileStone from "../component/Landing/MileStone";
import Contact from "../component/Landing/Contact";
import Footer from "../component/Footer";

import InstagramPOST from "../component/Landing/PostinganIG";

const Landing = () => {
  useEffect(() => {
    // Initialize AOS
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Cleanup function untuk membersihkan AOS saat component unmount
    return () => {
      AOS.refreshHard(); // Reset semua AOS animations
    };
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <About />
        <VisiMisi />
        <MileStone />
        <Portfolio />
        <InstagramPOST />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
