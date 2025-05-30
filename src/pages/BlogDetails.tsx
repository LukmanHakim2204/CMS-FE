// BlogDetails.tsx
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import BlogDetailHeader from "../component/BlogDetails/BlogDetailHeader";
import Header from "../component/Header";
import type { Post } from "../types/types"; // Only import Post type

// CSS styles for consistent image sizing
const imageStyles = `
  .post-img img {
    width: 100% !important;
    height: 400px !important;
    object-fit: cover !important;
    object-position: top center !important;
  }
  
  .blog-author-widget img {
    width: 80px !important;
    height: 80px !important;
    object-fit: cover !important;
    object-position: center !important;
  }
  
  .recent-posts-widget .post-item img {
    width: 80px !important;
    height: 60px !important;
    object-fit: cover !important;
    object-position: center !important;
  }
`;

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>(); // Type the params
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Inject CSS styles
    const styleElement = document.createElement("style");
    styleElement.innerHTML = imageStyles;
    document.head.appendChild(styleElement);

    return () => {
      AOS.refreshHard();
      // Clean up styles when component unmounts
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/post/${slug}`
        );
        // Extract data from the response wrapper
        setPost(response.data.data);
        setError(null);
      } catch (err) {
        // Properly type the error
        if (err instanceof AxiosError) {
          setError(
            err.response?.data?.message || err.message || "Failed to fetch post"
          );
        } else {
          setError("An unexpected error occurred");
        }
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <BlogDetailHeader />
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "400px" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Header />
        <BlogDetailHeader />
        <div className="container">
          <div className="alert alert-danger" role="alert">
            <h4>Error</h4>
            <p>{error}</p>
          </div>
        </div>
      </>
    );
  }

  // No post found
  if (!post) {
    return (
      <>
        <Header />
        <BlogDetailHeader />
        <div className="container">
          <div className="alert alert-warning" role="alert">
            <h4>Post Not Found</h4>
            <p>The requested post could not be found.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <BlogDetailHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Details Section */}
            <section id="blog-details" className="blog-details section">
              <div className="container">
                <article className="article">
                  <div className="post-img">
                    <img
                      src={
                        post.thumbnail
                          ? `http://localhost:8000/storage/${post.thumbnail}`
                          : "/assets/img/blog/blog-1.jpg"
                      }
                      alt={post.title}
                      className="img-fluid blog-detail-image"
                    />
                  </div>
                  <h2 className="title">{post.title}</h2>
                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person" />{" "}
                        <a href="#">{post.author_id?.name || "Anonymous"}</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock" />{" "}
                        <a href="#">
                          <time dateTime={post.published_at}>
                            {new Date(post.published_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </time>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End meta top */}
                  <div className="content">
                    {/* Render description as HTML if it comes from a rich text editor */}
                    {post.description && (
                      <div
                        dangerouslySetInnerHTML={{ __html: post.description }}
                      />
                    )}
                  </div>
                  {/* End post content */}
                  <div className="meta-bottom">
                    {post.category_id?.name && (
                      <>
                        <i className="bi bi-folder" />
                        <ul className="cats">
                          <li>
                            <a href="#">{post.category_id.name}</a>
                          </li>
                        </ul>
                      </>
                    )}
                    {post.tags_id && (
                      <>
                        <i className="bi bi-tags" />
                        <ul className="tags">
                          <li>
                            <a href="#">{post.tags_id.name}</a>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                  {/* End meta bottom */}
                </article>
              </div>
            </section>
            {/* /Blog Details Section */}
          </div>
          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              {/* Blog Author Widget */}
              <div className="blog-author-widget widget-item">
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex align-items-center w-100">
                    <img
                      src="/assets/img/blog/blog-author.jpg"
                      className="rounded-circle flex-shrink-0"
                      alt={post.author_id?.name || "Author"}
                    />
                    <div>
                      <h4>{post.author_id?.name || "Jane Smith"}</h4>
                      <div className="social-links">
                        <a href="https://x.com/#">
                          <i className="bi bi-twitter-x" />
                        </a>
                        <a href="https://facebook.com/#">
                          <i className="bi bi-facebook" />
                        </a>
                        <a href="https://instagram.com/#">
                          <i className="bi bi-instagram" />
                        </a>
                        <a href="https://linkedin.com/#">
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi
                    eum sed possimus accusantium. Quas repellat voluptatem
                    officia numquam sint aspernatur voluptas. Esse et
                    accusantium ut unde voluptas.
                  </p>
                </div>
              </div>
              {/*/Blog Author Widget */}

              {/* Search Widget */}
              <div className="search-widget widget-item">
                <h3 className="widget-title">Search</h3>
                <form action="">
                  <input type="text" />
                  <button type="submit" title="Search">
                    <i className="bi bi-search" />
                  </button>
                </form>
              </div>
              {/*/Search Widget */}

              {/* Categories Widget */}
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  <li>
                    <a href="#">
                      General <span>(25)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Travel <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Design <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Creative <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Education <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/*/Categories Widget */}

              {/* Recent Posts Widget */}
              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="post-item">
                  <img
                    src="/assets/img/blog/blog-recent-1.jpg"
                    alt=""
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4>
                      <a href="blog-details.html">
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>
                {/* You can also fetch recent posts from API */}
                {/* Add more recent post items here */}
              </div>
              {/*/Recent Posts Widget */}

              {/* Tags Widget */}
              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  {post.tags_id ? (
                    <li>
                      <a href="#">{post.tags_id.name}</a>
                    </li>
                  ) : (
                    <>
                      <li>
                        <a href="#">App</a>
                      </li>
                      <li>
                        <a href="#">IT</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              {/*/Tags Widget */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
