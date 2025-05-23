const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title text-center" data-aos="fade-up">
        <h2>About</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              Bara Reca Niroga merupakan perusahaan FMCG (Fast Moving Consumer
              Good) berbasis digital marketing yang bergerak di bidang produk
              herbal yang berkualitas.
            </p>
            <p>
              Kami berkomitmen untuk mendistribusikan produk herbal olahan
              terbaik ke seluruh pelosok Indonesia dan membentuk generasi muda
              yang kuat, kreatif, inovatif, adaptif, dan siap kerja, dengan
              kemampuan:
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Berpikir kritis dan solutif dalam menghadapi tantangan
                  industri.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Menguasai teknologi dan digital tools untuk pemasaran modern.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>Berkomunikasi efektif dan membangun kerja sama tim</span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Siap berkontribusi secara profesional di berbagai sektor
                  industri
                </span>
              </li>
            </ul>
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/src/styles/assets/img/Programming.png"
              alt=""
              className="img-fluid align-items-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
