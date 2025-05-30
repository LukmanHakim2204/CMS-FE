// Blog.tsx (Main Component)
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import BlogHeader from "../component/blog/BlogHeader";
import BlogPostsList from "../component/blog/BlogPostsList";
import BlogPagination from "../component/blog/BlogPagination";
import { useBlog } from "../hooks/useBlog";

const Blog: React.FC = () => {
  const {
    posts,
    loading,
    error,
    currentPage,
    pagination,
    goToPage,
    nextPage,
    prevPage,
    refresh,
  } = useBlog({ limit: 9 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <>
      <Header />

      <BlogHeader />

      {/* Blog Posts Section */}
      <section id="blog-posts" className="blog-posts section">
        <div className="container">
          <BlogPostsList
            posts={posts}
            loading={loading}
            error={error}
            onRetry={refresh}
          />
        </div>
      </section>

      {/* Pagination */}
      {pagination && (
        <BlogPagination
          pagination={pagination}
          currentPage={currentPage}
          onPageChange={goToPage}
          onNextPage={nextPage}
          onPrevPage={prevPage}
          loading={loading}
        />
      )}

      <Footer />
    </>
  );
};

export default Blog;
