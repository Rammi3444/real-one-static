const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="index.html">
                <img alt="img" src="assets/img/logo.png" />
              </a>
              <p>
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Morbi in sem quis dui placerat ornare.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Quick links</h6>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Our Product</a>
                </li>

                <li className="pb-0">
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Policies</h6>
              <ul>
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Connect with Us</h6>
              <p>
                <span>
                  <i className="fa fa-address-card" />
                </span>
                7th Block, SLN Arcade, 585, 2nd Main Rd, 2nd Phase, Banashankari
                3rd Stage, Bengaluru, Karnataka 560085
              </p>
              <p>
                <a href="tel:+919876543210">
                  <span>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  +91 9876543210
                </a>
              </p>
              <p>
                <a href="mailto:info@realone.com">
                  <span>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  info@realone.com
                </a>
              </p>
              <div className="frt-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-m" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RealOne - All Rights Reserved</p>
          <p>
            <a href="https://www.nextwebi.com/">
              Website Developed by Nextwebi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
