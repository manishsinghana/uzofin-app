import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer background-overlay">
      <div className="container">
        <div className="footer-main">
          <div className="row gy-4">
            <div className="col-xl-5">
              <div className="footer-company-info">
                <div className="footer-logo mb-3">
                  <img src="/images/footer-logo.png" alt="Uzofin" />
                </div>
                <p>
                  Experience the new age of payments with UzOFin and explore new
                  growth opportunities to reach greater heights
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-3">
                  <div className="footer-links">
                    <h4 className="footer-links-title">Products</h4>
                    <ul>
                      <li>
                        <Link to="/">AI Banking</Link>
                      </li>
                      <li>
                        <Link to="/">Payment</Link>
                      </li>
                      <li>
                        <Link to="/">Payout</Link>
                      </li>
                      <li>
                        <Link to="/">Merchant Onboarding</Link>
                      </li>
                      <li>
                        <Link to="/">FRM</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="footer-links">
                    <h4 className="footer-links-title">Company</h4>
                    <ul>
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Help Center</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="footer-links">
                    <h4 className="footer-links-title">Legal</h4>
                    <ul>
                      <li>
                        <Link to="/">Cookie Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Terms of Service</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-lg-flex justify-content-lg-end">
                    <div className="footer-links">
                      <h4 className="footer-links-title">Social</h4>
                      <div className="footer-social">
                        <Link to="/" className="footer-social-link">
                          <span className="footer-social-link--icon">
                            <img
                              src="/images/icons/linkedIn.svg"
                              alt="Linked In Icon"
                            />
                          </span>
                          <span>/uzofin</span>
                        </Link>
                        <Link to="/" className="footer-social-link">
                          <span className="footer-social-link--icon">
                            <img
                              src="/images/icons/twitter.svg"
                              alt="Twitter Icon"
                            />
                          </span>
                          <span>/uzofin</span>
                        </Link>
                        <Link to="/" className="footer-social-link">
                          <span className="footer-social-link--icon">
                            <img
                              src="/images/icons/instagram.svg"
                              alt="Instagram Icon"
                            />
                          </span>
                          <span>/uzofin</span>
                        </Link>
                        <Link to="/" className="footer-social-link">
                          <span className="footer-social-link--icon">
                            <img
                              src="/images/icons/facebook.svg"
                              alt="Facebook Icon"
                            />
                          </span>
                          <span>/uzofin</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright d-flex flex-column flex-md-row justify-content-md-between">
          <p>Copyright &copy; 2025 UzOFin. All rights reserved</p>
          <p className="country">India(EN)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
