import heroBg from "../styles/assets/img/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="" data-aos="fade-in" />

      <div className="container d-flex flex-column align-items-center text-center">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Welcome to Our Website
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          We are team of talented designers making websites with Bootstrap
        </p>
      </div>
    </section>
  );
}
