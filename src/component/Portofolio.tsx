import { useState } from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      category: "filter-app",
      title: "Mobile App Development",
      description: "Aplikasi mobile modern dengan UI/UX terbaik",
      gallery: "portfolio-gallery-app",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
      category: "filter-product",
      title: "Product Design",
      description: "Desain produk inovatif dan fungsional",
      gallery: "portfolio-gallery-product",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
      category: "filter-branding",
      title: "Brand Identity",
      description: "Identitas brand yang kuat dan memorable",
      gallery: "portfolio-gallery-branding",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
      category: "filter-app",
      title: "Web Application",
      description: "Aplikasi web responsive dan modern",
      gallery: "portfolio-gallery-app",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
      category: "filter-product",
      title: "E-commerce Platform",
      description: "Platform e-commerce dengan fitur lengkap",
      gallery: "portfolio-gallery-product",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
      category: "filter-branding",
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang efektif",
      gallery: "portfolio-gallery-branding",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
      category: "filter-app",
      title: "AI Integration",
      description: "Integrasi AI untuk solusi pintar",
      gallery: "portfolio-gallery-app",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
      category: "filter-product",
      title: "IoT Solutions",
      description: "Solusi IoT untuk industri modern",
      gallery: "portfolio-gallery-product",
    },
    {
      image: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
      category: "filter-branding",
      title: "Corporate Website",
      description: "Website korporat yang profesional",
      gallery: "portfolio-gallery-branding",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get current page items count for display
  const getCurrentPageItemsCount = () => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, portfolioItems.length);
    return endIndex - startIndex;
  };

  return (
    <div>
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          {/* Section Header */}
          <div className="portfolio-header">
            <h2 className="portfolio-title">Portfolio Kami</h2>
            <p className="portfolio-subtitle">
              Koleksi karya terbaik yang mencerminkan dedikasi dan inovasi dalam
              setiap project yang kami kerjakan
            </p>
            <div className="title-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </div>

          {/* Portfolio Carousel */}
          <div className="portfolio-carousel">
            <div className="portfolio-content">
              <div className="portfolio-wrapper">
                <div
                  className="portfolio-track"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / totalPages)
                    }%)`,
                    width: `${totalPages * 100}%`,
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => {
                    const startIndex = pageIndex * itemsPerPage;
                    const endIndex = Math.min(
                      startIndex + itemsPerPage,
                      portfolioItems.length
                    );
                    const pageItems = portfolioItems.slice(
                      startIndex,
                      endIndex
                    );

                    return (
                      <div
                        key={pageIndex}
                        className="portfolio-page"
                        style={{ width: `${100 / totalPages}%` }}
                      >
                        <div className="portfolio-grid">
                          {pageItems.map((item, itemIndex) => (
                            <div
                              key={`${pageIndex}-${itemIndex}`}
                              className="portfolio-item"
                            >
                              <div className="portfolio-image">
                                <div className="portfolio-placeholder">
                                  <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                  >
                                    <rect
                                      x="3"
                                      y="3"
                                      width="18"
                                      height="18"
                                      rx="2"
                                      ry="2"
                                    ></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21,15 16,10 5,21"></polyline>
                                  </svg>
                                </div>
                              </div>
                              <div className="portfolio-info">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <div className="portfolio-actions">
                                  <button
                                    className="action-btn"
                                    title="View Details"
                                  >
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </button>
                                  <button
                                    className="action-btn"
                                    title="External Link"
                                  >
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      <polyline points="15,3 21,3 21,9"></polyline>
                                      <line
                                        x1="10"
                                        y1="14"
                                        x2="21"
                                        y2="3"
                                      ></line>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="carousel-navigation">
              <button
                className="nav-button"
                onClick={goToPrevious}
                title="Previous"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>

              <div className="carousel-indicators">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <button className="nav-button" onClick={goToNext} title="Next">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>

            <div className="carousel-info">
              <span>
                Halaman {currentIndex + 1} dari {totalPages}
              </span>
              <span>•</span>
              <span>{portfolioItems.length} Total Projects</span>
              <span>•</span>
              <span >
                {getCurrentPageItemsCount()} Items pada halaman ini
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
