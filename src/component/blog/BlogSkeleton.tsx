// components/BlogSkeleton.tsx
import React from "react";

interface BlogSkeletonProps {
  count?: number;
}

const BlogSkeleton: React.FC<BlogSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="row gy-4">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="col-lg-4">
          <article>
            <div className="post-img">
              <div
                className="placeholder-glow"
                style={{
                  height: "200px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div className="placeholder w-100 h-100"></div>
              </div>
            </div>
            <div className="placeholder-glow mt-3">
              <span className="placeholder col-3"></span>
            </div>
            <h2 className="title mt-2">
              <div className="placeholder-glow">
                <span className="placeholder col-8"></span>
                <span className="placeholder col-6"></span>
              </div>
            </h2>
            <div className="d-flex align-items-center mt-3">
              <div
                className="placeholder-glow"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              >
                <div className="placeholder w-100 h-100 rounded-circle"></div>
              </div>
              <div className="post-meta">
                <div className="placeholder-glow">
                  <span className="placeholder col-4"></span>
                </div>
                <div className="placeholder-glow">
                  <span className="placeholder col-3"></span>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
