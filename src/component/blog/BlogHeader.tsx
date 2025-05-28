// components/BlogHeader.tsx
import React from "react";
import { Link } from "react-router-dom";
import { BlogHeaderProps } from "../../types/types";

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title = "Blog",
  description = "Discover our latest articles, insights, and stories. Stay updated with fresh content and engaging discussions.",
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
      className={`page-title ${backgroundType}`}
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

      <div className="container position-relative">
        <div className="content-wrapper">
          <h1 className="hero-title">
            <span className="title-line">{title}</span>
            <div className="title-underline"></div>
          </h1>

          <p className="hero-description">{description}</p>

          {/* Stats or Additional Info */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Readers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Categories</span>
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

          {/* Scroll Down Indicator */}
        
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
