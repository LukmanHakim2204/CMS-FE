


const Services = () => {
  const servicesData = [
    {
      icon: "bi bi-activity",
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      delay: "100",
    },
    {
      icon: "bi bi-broadcast",
      title: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      delay: "200",
    },
    {
      icon: "bi bi-easel",
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      delay: "300",
    },
    {
      icon: "bi bi-bounding-box-circles",
      title: "Asperiores Commodit",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      delay: "400",
    },
    {
      icon: "bi bi-calendar4-week",
      title: "Velit Doloremque",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      delay: "500",
    },
    {
      icon: "bi bi-chat-square-text",
      title: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      delay: "600",
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
