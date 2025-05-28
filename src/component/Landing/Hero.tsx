import heroRightImg from "../../styles/assets/img/Working-rafiki.png"; // Add your second image

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero section dark-background"
      style={{
        background:
          "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4500 100%)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center text-center text-lg-start mr-5">
        <div className="hero-content flex-grow-1">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Bara Reca Niroga.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Menjadi yang memberikan dampak positif, merefleksikan nilai-nilai
            keimanan, integritas dan pertumbuhan bersama.
          </p>
        </div>

        <div
          className="hero-image-right"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img src={heroRightImg} alt="Hero Image" className="img-fluid" />
        </div>
      </div>

      {/* Wave Animation */}
      <div className="wave-container">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
