// components/BlogCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { BlogCardProps } from "../../types/types";

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getImageUrl = (thumbnail: string): string => {
    if (thumbnail.startsWith("http")) {
      return thumbnail;
    }
    return `http://localhost:8000/storage/${thumbnail}`;
  };

  const getAuthorAvatar = (authorName: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      authorName
    )}&background=random&size=40`;
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
      <article className="card h-100 w-100 d-flex flex-column shadow-sm rounded overflow-hidden">
        <div className="post-img">
          <img
            src={getImageUrl(post.thumbnail)}
            alt={post.title}
            className="img-fluid w-100"
            style={{
              height: "200px",
              objectFit: "cover",
              objectPosition: "top center",
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "assets/img/blog/blog-placeholder.jpg";
            }}
          />
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <p className="post-category text-muted mb-1">
            {post.category_id.name}
          </p>
          <h2 className="title h6 mb-2">
            <Link
              to={`/blog/${post.slug}`}
              className="text-decoration-none text-dark"
            >
              {post.title}
            </Link>
          </h2>
          <div className="mt-auto d-flex align-items-center">
            <img
              src={getAuthorAvatar(post.author_id.name)}
              alt={post.author_id.name}
              className="img-fluid post-author-img flex-shrink-0 rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="post-meta">
              <p className="post-author mb-0 small">{post.author_id.name}</p>
              <p className="post-date mb-0 small text-muted">
                <time dateTime={post.published_at}>
                  {formatDate(post.published_at)}
                </time>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
