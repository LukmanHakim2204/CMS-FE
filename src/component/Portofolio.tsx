import { useState } from "react";

interface PortfolioItem {
  image: string;
  category: string;
  title: string;
  description: string;
  gallery: string;
  details: string;
  technologies: string[];
  client: string;
  duration: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-app",
      title: "Mobile App Development",
      description: "Aplikasi mobile modern dengan UI/UX terbaik",
      gallery: "portfolio-gallery-app",
      details:
        "Pengembangan aplikasi mobile cross-platform menggunakan React Native dan Flutter. Fokus pada performa tinggi, user experience yang intuitif, dan design yang modern.",
      technologies: ["React Native", "Flutter", "Firebase", "Redux"],
      client: "TechCorp Solutions",
      duration: "3 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-product",
      title: "Product Design",
      description: "Desain produk inovatif dan fungsional",
      gallery: "portfolio-gallery-product",
      details:
        "Desain produk digital yang mengutamakan user-centered design. Melakukan riset pengguna, wireframing, prototyping, dan testing untuk menciptakan produk yang user-friendly.",
      technologies: ["Figma", "Sketch", "InVision", "Principle"],
      client: "DesignStudio Inc",
      duration: "2 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-branding",
      title: "Brand Identity",
      description: "Identitas brand yang kuat dan memorable",
      gallery: "portfolio-gallery-branding",
      details:
        "Pengembangan identitas brand komprehensif mulai dari logo design, color palette, typography, hingga brand guidelines. Menciptakan brand yang konsisten dan memorable.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      client: "StartupXYZ",
      duration: "4 minggu",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-app",
      title: "Web Application",
      description: "Aplikasi web responsive dan modern",
      gallery: "portfolio-gallery-app",
      details:
        "Pengembangan aplikasi web full-stack dengan teknologi modern. Implementasi real-time features, responsive design, dan optimasi performa untuk pengalaman pengguna terbaik.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      client: "WebTech Solutions",
      duration: "5 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-product",
      title: "E-commerce Platform",
      description: "Platform e-commerce dengan fitur lengkap",
      gallery: "portfolio-gallery-product",
      details:
        "Pengembangan platform e-commerce enterprise dengan fitur lengkap: payment gateway, inventory management, analytics dashboard, dan sistem CRM terintegrasi.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      client: "RetailCorp",
      duration: "8 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-branding",
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang efektif",
      gallery: "portfolio-gallery-branding",
      details:
        "Strategi pemasaran digital komprehensif meliputi SEO, SEM, social media marketing, content marketing, dan email marketing untuk meningkatkan brand awareness dan konversi.",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
      client: "MarketingPro",
      duration: "6 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-app",
      title: "AI Integration",
      description: "Integrasi AI untuk solusi pintar",
      gallery: "portfolio-gallery-app",
      details:
        "Implementasi solusi AI dan machine learning untuk automatisasi proses bisnis. Pengembangan chatbot, sistem rekomendasi, dan analisis prediktif untuk meningkatkan efisiensi operasional.",
      technologies: ["Python", "TensorFlow", "OpenAI API", "Docker"],
      client: "AI Innovations Ltd",
      duration: "4 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-product",
      title: "IoT Solutions",
      description: "Solusi IoT untuk industri modern",
      gallery: "portfolio-gallery-product",
      details:
        "Pengembangan solusi IoT end-to-end untuk monitoring dan kontrol perangkat industri. Implementasi sensor networks, data analytics, dan dashboard real-time untuk optimasi operasional.",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB"],
      client: "IndustryTech Corp",
      duration: "6 bulan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "filter-branding",
      title: "Corporate Website",
      description: "Website korporat yang profesional",
      gallery: "portfolio-gallery-branding",
      details:
        "Pengembangan website korporat yang profesional dengan fokus pada brand storytelling, SEO optimization, dan user experience. Implementasi CMS untuk kemudahan maintenance konten.",
      technologies: ["WordPress", "PHP", "MySQL", "GSAP"],
      client: "Corporate Solutions Inc",
      duration: "3 bulan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const goToPrevious = (): void => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = (): void => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const openModal = (item: PortfolioItem): void => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>
  ): void => {
    e.currentTarget.style.display = "none";
    e.currentTarget.parentElement?.classList.add("loading");
  };

  const getCurrentPageItemsCount = (): number => {
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
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  loading="lazy"
                                  onError={handleImageError}
                                />
                              </div>
                              <div className="portfolio-info">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <div className="portfolio-actions">
                                  <button
                                    className="action-btn"
                                    title="View Details"
                                    onClick={() => openModal(item)}
                                    type="button"
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
                type="button"
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
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        goToSlide(index);
                      }
                    }}
                  />
                ))}
              </div>

              <button
                className="nav-button"
                onClick={goToNext}
                title="Next"
                type="button"
              >
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
              <span>{getCurrentPageItemsCount()} Items pada halaman ini</span>
            </div>
          </div>
        </div>

        {/* Portfolio Modal */}
        <div
          className={`portfolio-modal ${isModalOpen ? "active" : ""}`}
          onClick={handleModalClick}
        >
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
              type="button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {selectedItem && (
              <>
                <div className="modal-image">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    loading="lazy"
                  />
                </div>

                <div className="modal-body">
                  <div className="modal-header">
                    <h3 className="modal-title">{selectedItem.title}</h3>
                  </div>

                  <div className="modal-details">{selectedItem.details}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
