import { useEffect, useState } from "react";
import axios from "axios";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const postsPerSlide = 8; // 4 columns x 2 rows
  const totalSlides = Math.ceil(posts.length / postsPerSlide);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/instagram-posts"
        );
        setPosts(response.data.data);
        setError(null);
      } catch (err) {
        setError(
          "Failed to load Instagram posts. Please check your connection or try again later."
        );
        console.error("Error fetching Instagram posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const truncateCaption = (caption: string, maxLength: number = 80) => {
    if (caption.length <= maxLength) return caption;
    return caption.slice(0, maxLength) + "...";
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * postsPerSlide;
    const endIndex = Math.min(startIndex + postsPerSlide, posts.length);
    return posts.slice(startIndex, endIndex);
  };

  if (loading) {
    return (
      <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div className="instagram-feed">
          <div className="feed-header">
            <h1 className="feed-title">Instagram Feed</h1>
            <p className="feed-subtitle">Loading our latest moments...</p>
          </div>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Fetching Instagram posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <style>{`
          .error-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            text-align: center;
            background: #fafafa;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .error-icon {
            font-size: 4rem;
            color: #e1306c;
            margin-bottom: 20px;
          }

          .error-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #262626;
            margin-bottom: 10px;
          }

          .error-message {
            color: #8e8e8e;
            font-size: 1rem;
            margin-bottom: 20px;
            max-width: 400px;
          }

          .retry-btn {
            background: linear-gradient(45deg, #f09433, #e6683c);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .retry-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(240, 148, 51, 0.4);
          }
        `}</style>

        <div className="error-container">
          <div className="error-icon">📱</div>
          <h2 className="error-title">Unable to load Instagram feed</h2>
          <p className="error-message">{error}</p>
          <button
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="instagram-feed">
        <div className="feed-header">
          <h1 className="feed-title">
            <span className="instagram-icon">📸</span>
            Our Instagrams Bara Reca
          </h1>
          <p className="feed-subtitle">
            Ikuti perjalanan kami melalui beragam momen istimewa dan cerita
            inspiratif yang tercipta dari kerja keras, kreativitas, dan semangat
            untuk terus berkembang.
          </p>
          <span className="posts-count">{posts.length} Posts</span>
        </div>

        {posts.length > 0 && (
          <div className="carousel-container">
            <div className="posts-grid">
              {getCurrentSlideItems().map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-image-container">
                    <img
                      src={
                        post.media_type === "VIDEO"
                          ? post.thumbnail_url || post.media_url
                          : post.media_url
                      }
                      alt={post.caption || "Instagram Post"}
                      className="post-image"
                      loading="lazy"
                    />
                    <div
                      className={`media-type-badge ${
                        post.media_type === "VIDEO" ? "video-badge" : ""
                      }`}
                    >
                      {post.media_type === "VIDEO" ? "🎥" : "📷"}
                    </div>
                  </div>

                  <div className="post-content">
                    {post.caption && (
                      <p className="post-caption">
                        {truncateCaption(post.caption, 60)}
                      </p>
                    )}

                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-post-btn"
                    >
                      View Post
                      <span className="external-icon">↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {totalSlides > 1 && (
              <div className="carousel-navigation">
                <button
                  className="nav-button"
                  onClick={goToPrevious}
                  disabled={totalSlides <= 1}
                  title="Previous"
                >
                  ‹
                </button>

                <div className="carousel-indicators">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                      key={index}
                      className={`indicator ${
                        index === currentSlide ? "active" : ""
                      }`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>

                <button
                  className="nav-button"
                  onClick={goToNext}
                  disabled={totalSlides <= 1}
                  title="Next"
                >
                  ›
                </button>
              </div>
            )}

            <div className="slide-info">
              Slide {currentSlide + 1} of {totalSlides} • Showing{" "}
              {getCurrentSlideItems().length} posts
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InstagramFeed;
