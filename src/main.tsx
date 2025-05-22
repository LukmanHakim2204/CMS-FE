import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//css
import "./styles/assets/vendor/bootstrap/css/bootstrap.min.css";
import "./styles/assets/vendor/bootstrap-icons/bootstrap-icons.css";
// import "./styles/assets/vendor/aos/aos.css";
import "./styles/assets/vendor/glightbox/css/glightbox.min.css";
import "./styles/assets/vendor/swiper/swiper-bundle.min.css";
import "./styles/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";

//js
import "./styles/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./styles/assets/vendor/php-email-form/validate.js";
// import "./styles/assets/vendor/aos/aos.js";
import "./styles/assets/vendor/glightbox/js/glightbox.min.js";
import "./styles/assets/vendor/purecounter/purecounter_vanilla.js";
import "./styles/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js";
import "./styles/assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "./styles/assets/vendor/swiper/swiper-bundle.min.js";
// import "./styles/assets/js/main.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
