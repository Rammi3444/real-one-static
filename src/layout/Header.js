import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "transparent" }
      }
    >
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  <img alt="logo" src="assets/img/logo.png" />
                </a>
              </Link>
            </div>
            <ul className="menu">
              {/* <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/">
                      homepage 1
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-2">
                      homepage 2
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-3">
                      homepage 3
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  Our Product
                </Link>
              </li>

              <li>
                <Link legacyBehavior href="/">
                  Policies
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="/">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index-2">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link legacyBehavior href="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link legacyBehavior href="/contacts">
              <a className="themebtu">Get Started</a>
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;
