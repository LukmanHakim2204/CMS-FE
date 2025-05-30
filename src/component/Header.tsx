import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img
            className="w-5"
            src="/src/styles/assets/img/logoputih.png"
            alt=""
          />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <HashLink smooth to="/#hero">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#visimisi">
                Visi & Misi
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio">
                Portfolio
              </HashLink>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
}
