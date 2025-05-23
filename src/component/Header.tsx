import { useEffect } from "react";
export default function Header() {
  useEffect(() => {
    const toggleBtn = document.querySelector(".mobile-nav-toggle");
    const header = document.querySelector("#header");

    const handleToggle = () => {
      document.body.classList.toggle("mobile-nav-active");
      toggleBtn?.classList.toggle("bi-list");
      toggleBtn?.classList.toggle("bi-x");
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    toggleBtn?.addEventListener("click", handleToggle);
    window.addEventListener("scroll", handleScroll);

    // Call scroll on load
    handleScroll();

    return () => {
      toggleBtn?.removeEventListener("click", handleToggle);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <img
            className="w-5"
            src="/src/styles/assets/img/logoputih.png"
            alt=""
          />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* <a className="cta-btn" href="#about">
          Get Started
        </a> */}
      </div>
    </header>
  );
}
