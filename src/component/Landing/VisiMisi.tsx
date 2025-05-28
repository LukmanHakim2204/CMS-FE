const VisiMisi = () => {
  const visimisiData = [
    {
      icon: "eye",
      title: "Visi",
      description:
        "Menjadi perusahaan digital berskala nasional yang berkomitmen untuk meningkatkan kesehatan masyarakat Indonesia.",
      delay: "100",
    },
    {
      icon: "target",
      title: "Misi",
      description:
        "Menjadi agen perubahan yang mengintegrasikan iman kepada Allah sebagai fondasi utama, mengubah setiap takdir menjadi pelajaran dan kesempatan pertumbuhan. Kami memperteguh usaha sungguh-sungguh dan doa sebagai kunci utama untuk mencapai potensi maksimal, meyakini bahwa setiap individu mampu membentuk takdir terbaiknya.",
      delay: "200",
    },
  ];

  return (
    <section id="visimisi" className="visimisi section">
      <div className="container">
        <div
          className="visi-misi-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
            <div className="title-container">
              <h2 className="section-heading text-center">Visi & Misi</h2>
            </div>
            <p className="section-description text-center">
              Visi dan misi ini menjadi dasar dalam setiap langkah strategis
              organisasi, serta menjadi pedoman utama dalam mencapai tujuan
              jangka panjang.
            </p>
          </div>

          <div
            className="row gy-3 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {visimisiData.map((service, index) => (
              <div key={index} className="col-md-5 col-lg-4 d-flex">
                <div className="visimisi-item position-relative">
                  <div className="icon-container text-center">
                    <div className="icon">
                      {service.icon === "eye" ? (
                        // Icon Mata untuk Visi (Vision)
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      ) : service.icon === "target" ? (
                        // Icon Target untuk Misi (Mission/Goals)
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                      ) : service.icon === "compass" ? (
                        // Icon Kompas (alternatif untuk arah/guidance)
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"></polygon>
                        </svg>
                      ) : service.icon === "flag" ? (
                        // Icon Bendera (alternatif untuk goals)
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" y1="22" x2="4" y2="15"></line>
                        </svg>
                      ) : service.icon === "telescope" ? (
                        // Icon Teleskop (untuk visi jauh ke depan)
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 18h7"></path>
                          <path d="M14 5h7"></path>
                          <path d="M21 12H10.5"></path>
                          <path d="M3 12L9 6L15 12L9 18L3 12Z"></path>
                        </svg>
                      ) : (
                        // Default fallback icon
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                      )}
                    </div>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3 className="service-title">{service.title}</h3>
                  </a>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
