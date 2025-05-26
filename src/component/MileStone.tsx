import { useState, useRef, useEffect } from "react";
import featuresBg from "../styles/assets/img/features-bg.jpg";

const Milestone = () => {
  const milestones = [
    {
      year: "2020",
      icon: "bi bi-rocket-takeoff",
      title: "Company Founded",
      description:
        "Started our journey with a vision to revolutionize digital solutions and create innovative experiences for our clients.",
      stats: { projects: "10+", clients: "5+", team: "3" },
    },
    {
      year: "2021",
      icon: "bi bi-award",
      title: "First Major Achievement",
      description:
        "Successfully delivered 50+ projects and established partnerships with leading companies in the industry.",
      stats: { projects: "50+", clients: "20+", team: "8" },
    },
    {
      year: "2022",
      icon: "bi bi-graph-up-arrow",
      title: "Rapid Growth",
      description:
        "Expanded our team to 25+ professionals and launched our AI-powered solutions that transformed client operations.",
      stats: { projects: "150+", clients: "50+", team: "25" },
    },
    {
      year: "2023",
      icon: "bi bi-globe",
      title: "Global Expansion",
      description:
        "Opened international offices and served clients across 15+ countries with our cutting-edge technology solutions.",
      stats: { projects: "300+", clients: "80+", team: "40" },
    },
    {
      year: "2024",
      icon: "bi bi-trophy",
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation and became a trusted partner for Fortune 500 companies worldwide.",
      stats: { projects: "500+", clients: "100+", team: "60" },
    },
    {
      year: "2025",
      icon: "bi bi-stars",
      title: "Future Innovation",
      description:
        "Launching next-generation AI solutions and expanding into emerging markets with cutting-edge technology platforms.",
      stats: { projects: "750+", clients: "150+", team: "80" },
    },
    {
      year: "2026",
      icon: "bi bi-lightbulb",
      title: "Tech Leadership",
      description:
        "Establishing ourselves as industry leaders in AI and blockchain technology with revolutionary products.",
      stats: { projects: "1000+", clients: "200+", team: "100" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll timeline when milestone changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const timelineItem = scrollContainerRef.current.children[
        currentIndex
      ] as HTMLElement;
      if (timelineItem) {
        timelineItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  const currentMilestone = milestones[currentIndex];

  return (
    <section id="milestone" className="milestone-section">
      <div className="container section-title text-center" data-aos="fade-up">
        <h2>Our Journey</h2>
        <p className="subtitle">
          Milestones that define our path to excellence
        </p>
      </div>

      <div className="container">
        <div className="d-flex flex-column flex-lg-row align-items-center gap-5">
          {/* Image Section */}
          <div
            className="milestone-image col-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="milestone-image-container">
              <img
                src={featuresBg}
                alt="Our Journey"
                className="img-fluid rounded-4"
              />
              <div className="milestone-overlay">
                <div className="milestone-stats">
                  <div className="stat-item">
                    <span className="stat-number">
                      {currentMilestone.stats.projects}
                    </span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">
                      {currentMilestone.stats.clients}
                    </span>
                    <span className="stat-label">Clients</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">
                      {currentMilestone.stats.team}
                    </span>
                    <span className="stat-label">Team Size</span>
                  </div>
                </div>
                <div className="milestone-year-display">
                  <span className="current-year">{currentMilestone.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Section */}
          <div className="col-lg-7 ">
            <div
              className="milestone-slider"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {/* Current Single Milestone Display */}
              <div className="milestone-viewport">
                <div className="milestone-single">
                  <div className="milestone-card" key={currentIndex}>
                    <div className="milestone-header">
                      <div className="milestone-icon-wrapper">
                        <i
                          className={`${currentMilestone.icon} milestone-icon`}
                        ></i>
                      </div>
                      <div className="milestone-meta">
                        <span className="milestone-year-badge">
                          {currentMilestone.year}
                        </span>
                        <h3 className="milestone-title">
                          {currentMilestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="milestone-description">
                      {currentMilestone.description}
                    </p>
                    <div className="milestone-mini-stats">
                      <span>{currentMilestone.stats.projects} Projects</span>
                      <span>{currentMilestone.stats.clients} Clients</span>
                      <span>{currentMilestone.stats.team} Team</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Timeline Overview */}
              <div className="milestone-timeline-section">
                <div className="timeline-header">
                  <h5>Complete Timeline</h5>
                </div>

                <div
                  className="milestone-timeline-scroll"
                  ref={scrollContainerRef}
                >
                  {milestones.map((milestone, index) => {
                    const isActive = index === currentIndex;

                    return (
                      <div
                        key={index}
                        className={`timeline-item ${isActive ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                      >
                        <div className="timeline-dot">
                          <i className={milestone.icon}></i>
                        </div>
                        <div className="timeline-content">
                          <span className="timeline-year">
                            {milestone.year}
                          </span>
                          <span className="timeline-title">
                            {milestone.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="milestone-controls">
                <button
                  className="control-btn prev-btn"
                  onClick={goToPrevious}
                  title="Previous Milestone"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <div className="milestone-indicators">
                  {milestones.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${
                        index === currentIndex ? "active" : ""
                      }`}
                      onClick={() => goToSlide(index)}
                      title={`Go to ${milestones[index].year}`}
                    />
                  ))}
                </div>

                <button
                  className="control-btn next-btn"
                  onClick={goToNext}
                  title="Next Milestone"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>

              {/* Progress and Info */}
              <div className="milestone-footer">
                <div className="milestone-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${
                          ((currentIndex + 1) / milestones.length) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {currentIndex + 1} of {milestones.length} Milestones
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
