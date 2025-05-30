// components/BlogPagination.tsx
import React from "react";
import type { BlogPaginationProps } from "../../types/types";

const BlogPagination: React.FC<BlogPaginationProps> = ({
  pagination,
  currentPage,
  onPageChange,
  onNextPage,
  onPrevPage,
  loading = false,
}) => {
  if (!pagination || pagination.lastPage <= 1) return null;

  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    const { lastPage } = pagination;

    if (lastPage <= maxVisiblePages) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(lastPage - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== lastPage) {
          pages.push(i);
        }
      }

      if (currentPage < lastPage - 2) {
        pages.push("...");
      }

      if (lastPage > 1) {
        pages.push(lastPage);
      }
    }

    return pages;
  };

  return (
    <section id="blog-pagination" className="blog-pagination section">
      <div className="container">
        <div className="d-flex justify-content-center">
          <ul>
            <li>
              <button
                onClick={onPrevPage}
                disabled={!pagination.hasPrev || loading}
                className={`pagination-btn ${
                  !pagination.hasPrev || loading ? "disabled" : ""
                }`}
                aria-label="Previous page"
              >
                <i className="bi bi-chevron-left" />
              </button>
            </li>

            {generatePageNumbers().map((page, index) => (
              <li key={index}>
                {page === "..." ? (
                  <span className="pagination-ellipsis">...</span>
                ) : (
                  <button
                    onClick={() => onPageChange(page as number)}
                    className={`pagination-btn ${
                      currentPage === page ? "active" : ""
                    } ${loading ? "disabled" : ""}`}
                    disabled={loading}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}

            <li>
              <button
                onClick={onNextPage}
                disabled={!pagination.hasNext || loading}
                className={`pagination-btn ${
                  !pagination.hasNext || loading ? "disabled" : ""
                }`}
                aria-label="Next page"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogPagination;
