import featuresBg from "../styles/assets/img/features-bg.jpg";

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="features-image col-lg-6 order-lg-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={featuresBg} alt="Features Background" />
          </div>

          <div className="col-lg-6 order-lg-1">
            <div
              className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-archive flex-shrink-0"></i>
              <div>
                <h4>Est labore ad</h4>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>

            <div
              className="features-item d-flex mt-5 ps-0 ps-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-basket flex-shrink-0"></i>
              <div>
                <h4>Harum esse qui</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>

            <div
              className="features-item d-flex mt-5 ps-0 ps-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-broadcast flex-shrink-0"></i>
              <div>
                <h4>Aut occaecati</h4>
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>

            <div
              className="features-item d-flex mt-5 ps-0 ps-lg-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-camera-reels flex-shrink-0"></i>
              <div>
                <h4>Beatae veritatis</h4>
                <p>
                  Expedita veritatis consequuntur nihil tempore laudantium vitae
                  denat pacta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
