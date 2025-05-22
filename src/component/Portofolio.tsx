const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-app",
      title: "App 1",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-app",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-product",
      title: "Product 1",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-product",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-branding",
      title: "Branding 1",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-branding",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-app",
      title: "App 2",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-app",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-product",
      title: "Product 2",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-product",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-branding",
      title: "Branding 2",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-branding",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-app",
      title: "App 3",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-app",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-product",
      title: "Product 3",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-product",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-branding",
      title: "Branding 3",
      description: "Lorem ipsum, dolor sit",
      gallery: "portfolio-gallery-branding",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
              >
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a
                    href={item.image}
                    title={item.title}
                    data-gallery={item.gallery}
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
