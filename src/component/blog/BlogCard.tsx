// components/BlogCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../types/types";

interface BlogCardProps {
  post: Post;
}

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
    <div className="col-lg-4">
      <article>
        <div className="post-img">
          <img
            src={getImageUrl(post.thumbnail)}
            alt={post.title}
            className="img-fluid"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "assets/img/blog/blog-placeholder.jpg";
            }}
          />
        </div>
        <p className="post-category">{post.category_id.name}</p>
        <h2 className="title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="d-flex align-items-center">
          <img
            src={getAuthorAvatar(post.author_id.name)}
            alt={post.author_id.name}
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author">{post.author_id.name}</p>
            <p className="post-date">
              <time dateTime={post.published_at}>
                {formatDate(post.published_at)}
              </time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
