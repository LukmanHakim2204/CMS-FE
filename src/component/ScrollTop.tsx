import { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    // Hapus preloader setelah component mount
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      // Hapus preloader setelah delay singkat
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  }, []);

  return (
    <>
      {/* Scroll Top Button */}
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "50%",
          textDecoration: "none",
          opacity: 0,
          visibility: "hidden",
          transition: "all 0.3s ease",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="bi bi-arrow-up-short" style={{ fontSize: "24px" }}></i>
      </a>

      {/* Preloader - akan dihapus otomatis */}
      <div
        id="preloader"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "3px solid #ec5f0dee",
            borderTop: "3px solid #ec5f0dee",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
      </div>

      {/* CSS Styles */}
      <style>{`
        /* Scroll Top Button Active State */
        .scroll-top.active {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        .scroll-top:hover {
          background-color: #0056b3 !important;
          transform: scale(1.1) !important;
        }
        
        /* Preloader Animation */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Header Scroll Effects */
        body.scrolled .header {
          background-color: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.1) !important;
          backdrop-filter: blur(10px) !important;
        }
        
        /* Mobile Navigation */
        body.mobile-nav-active {
          overflow: hidden !important;
        }
        
        body.mobile-nav-active .mobile-nav-toggle {
          color: #007bff !important;
        }
        
        /* FAQ Styling */
        .faq-item.faq-active .faq-content {
          max-height: 300px !important;
          opacity: 1 !important;
          padding: 20px 0 !important;
        }
        
        .faq-content {
          max-height: 0 !important;
          opacity: 0 !important;
          overflow: hidden !important;
          transition: all 0.3s ease !important;
          padding: 0 !important;
        }
        
        .faq-item.faq-active .faq-toggle {
          transform: rotate(180deg) !important;
        }
        
        .faq-toggle {
          transition: transform 0.3s ease !important;
        }
        
        /* Portfolio Filters */
        .isotope-filters .filter-active {
          background-color: #007bff !important;
          color: white !important;
        }
        
        /* Smooth Transitions */
        .portfolio-item {
          transition: all 0.3s ease !important;
        }
        
        .header {
          transition: all 0.3s ease !important;
        }
        
        /* Fix untuk z-index issues */
        .header.fixed-top {
          z-index: 997 !important;
        }
        
        .scroll-top {
          z-index: 999 !important;
        }
      `}</style>
    </>
  );
}
