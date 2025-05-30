// components/BlogPostsList.tsx
import React from "react";
import type { BlogPostsListProps } from "../../types/types";
import BlogCard from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";

const BlogPostsList: React.FC<BlogPostsListProps> = ({
  posts,
  loading,
  error,
  onRetry,
}) => {
  if (loading) {
    return <BlogSkeleton />;
  }

  if (error) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="alert alert-danger text-center" role="alert">
            <h4 className="alert-heading">Oops! Something went wrong</h4>
            <p>{error}</p>
            <hr />
            <button className="btn btn-outline-danger" onClick={onRetry}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h3>No posts found</h3>
            <p className="text-muted">
              There are no blog posts available at the moment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row gy-4">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostsList;
