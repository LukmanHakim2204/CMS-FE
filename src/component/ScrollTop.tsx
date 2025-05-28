import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Scroll ke atas setiap kali route berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Hapus preloader saat mount
  useEffect(() => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  }, []);

  // Tampilkan tombol scroll-top saat scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Tombol Scroll to Top */}
      <a
        href="#"
        onClick={handleScrollTop}
        className={`scroll-top d-flex align-items-center justify-content-center ${
          showButton ? "active" : ""
        }`}
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
          transition: "all 0.3s ease",
          zIndex: 9999,
          opacity: showButton ? 1 : 0,
          visibility: showButton ? "visible" : "hidden",
        }}
      >
        <i className="bi bi-arrow-up-short" style={{ fontSize: "24px" }}></i>
      </a>

      {/* Preloader */}
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
            borderTop: "3px solid transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
      </div>

      {/* CSS Global Style */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
          .scroll-top{
          background-color:rgb(253, 51, 0) !important;
          }
        .scroll-top:hover {
          background-color:rgb(245, 125, 55) !important;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
