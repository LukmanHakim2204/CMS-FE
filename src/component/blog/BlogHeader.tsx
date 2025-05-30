// components/BlogHeader.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { BlogHeaderProps } from "../../types/types";

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title = "Blog",
  description = "Temukan beragam wawasan, berita terkini, dan kisah menarik yang dikemas secara informatif dan inspiratif. Kami menghadirkan konten yang relevan untuk memperluas pengetahuan, memicu ide baru, dan memperkaya perspektif Anda.",
  backgroundImage, // Optional prop for custom background
  backgroundType = "gradient", // gradient, image, video
}) => {
  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case "image":
        return {
          backgroundImage: backgroundImage
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
            : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/img/blog/blog-hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        };
      case "video":
        return {};
      default: // gradient
        return {};
    }
  };

  return (
    <div
      className={`blog-page-title ${backgroundType}`}
      data-aos="fade"
      style={getBackgroundStyle()}
    >
      {/* Video Background */}
      {backgroundType === "video" && (
        <div className="video-background">
          <video autoPlay muted loop className="video-bg">
            <source src="/assets/video/blog-hero.mp4" type="video/mp4" />
            <source src="/assets/video/blog-hero.webm" type="video/webm" />
          </video>
          <div className="video-overlay"></div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="bg-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Particles Effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div className="container position-relative mt-5">
        <div className="content-wrapper ">
          <h1 className="hero-title mt-4">
            <span className="title-line">{title}</span>
          </h1>
          <div className="title-underline"></div>

          <p className="hero-description">{description}</p>

          {/* Stats or Additional Info */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number-blog">500+</span>
              <span className="stat-label-blog">Articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number-blog">50K+</span>
              <span className="stat-label-blog">Readers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number-blog">25+</span>
              <span className="stat-label-blog">Categories</span>
            </div>
          </div>

          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/" className="breadcrumb-link">
                  <i className="bi bi-house-door"></i>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-separator">/</li>
              <li className="current">Blog</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
