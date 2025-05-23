const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer orange-background py-4">
        <div className="container">
          <div className="row align-items-center gap-4 gap-md-0 justify-content-center justify-content-md-between mb-3">
            {/* Kiri: Deskripsi */}
            <div className="col-md-6 text-md-start text-center text-white">
              <h4 className="fw-bold">PT Barareca Niroga</h4>
              <p className="mb-0">
                Bara Reca Niroga merupakan perusahaan FMCG (Fast Moving Consumer
                Good) berbasis digital marketing yang bergerak di bidang produk
                herbal yang berkualitas
              </p>
            </div>

            <div className="col-md-6 text-white">
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-3">Hubungi Kami Di Bawah Ini :</p>
                <div className="social-links d-flex gap-3">
                  <a href="https://www.tiktok.com/@bararecaofficial">
                    <i className="bi bi-tiktok"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/barareca/">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-skype"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-white mt-4">
            <div className="copyright">
              <span>&copy; </span>
              <strong className="px-1 sitename">PT Barareca Niroga</strong>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
