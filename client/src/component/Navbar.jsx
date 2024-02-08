import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import call from "../media/svg/phone.svg";
import mail from "../media/svg/mail.svg";
import link from "../media/svg/link.svg";
import logo from "../media/svg/logo.svg";
import menubar from "../media/svg/hamburger.svg";
import cross from "../media/svg/cross.svg";
import facebook from "../media/svg/facebook.svg";
import insta from "../media/svg/insta.svg";
import linkedin from "../media/svg/linkedin.svg";
import twitter from "../media/svg/twitter.svg";
import close from "../media/svg/close.svg";
import serviceData from "../data/serviceData.json";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [selectedService, setSelectedService] = useState(serviceData[0]);
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = window.innerWidth <= 575;
  const socialCont = document.getElementById("followCont");

  const handleClick = (service) => {
    setSelectedService(service);
  };
  useEffect(() => {
    setSelectedService(serviceData[0]);
  }, []);

  const toggleDiv= () => {
    // if (window.innerWidth >= 992) {
    //   socialCont.style.display = "block";
    // }
      setIsVisible(!isVisible);
      return false;
  };

  const closeFollow = () => {
    setIsVisible(!isVisible);
  };

  function menuToggler() {
    let menubar = document.getElementById("toggleMenu");
    let linkbar1 = document.querySelector(".firstLinkCont");
    let linkbar2 = document.querySelector(".secondLinkCont");

    if (!showMenu) {
      linkbar1.style.display = "flex";
      linkbar2.style.display = "flex";
      setShowMenu(true);
    } else {
      linkbar1.style.display = "none";
      linkbar2.style.display = "none";
      setShowMenu(false);
    }
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <div id="followCont" className={`${isVisible ? "visible" : ""}`}>
          <h2>
            Follow us:
            <img
              onClick={closeFollow}
              id="close"
              src={close}
              alt="close icon"
            />
          </h2>
          <div className="socialIconBox">
            <a href="https://www.facebook.com/VeteranMedias">
              <img src={facebook} alt="facebook-icon" />
            </a>
            <a href="https://www.instagram.com/vetaranmedias/">
              <img src={insta} alt="instagram-icon" />
            </a>
            <a href="https://www.linkedin.com/company/veteran-media-solutions/">
              <img src={linkedin} alt="Linkedin icon" />
            </a>
            <a href="https://twitter.com/veteran-media-solutions/">
              <img src={twitter} alt="twitter-icon" />
            </a>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg" id="nav">
          <div className="container" id="navbar">
            <h1 className="navbar-brand">
              <HashLink to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </HashLink>
            </h1>
            <ul className="firstLinkCont">
              <li id="homelink" className="nav-item">
                <HashLink className="nav-link active" to="/">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/about/#aboutSec">
                  About us
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/portfolio/#projectSec">
                  Projects
                </HashLink>
              </li>
              <li className="nav-item serviceLink">
                {isMobile ? (
                  <HashLink to="/service/#serviceSec" className="nav-link">
                    Services
                  </HashLink>
                ) : (
                  <HashLink className="nav-link">Services</HashLink>
                )}

                <div className="serviceDropdown">
                  <div className="serviceCont">
                    <div className="services">
                      {serviceData.map((service, index) => (
                        <h1
                          key={index}
                          className="serveName"
                          onClick={() => handleClick(service)}
                        >
                          <HashLink>{service.serviceName}</HashLink>
                        </h1>
                      ))}
                    </div>
                    <div className="subServices">
                      <ul id="subServeCont">
                        {selectedService &&
                          selectedService.subServices.map(
                            (subService, index) => (
                              <motion.li
                                initial={{ opacity: 0, translateY: -50 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{
                                  duration: 1,
                                }}
                                key={index}
                              >
                                <HashLink>{subService}</HashLink>
                              </motion.li>
                            )
                          )}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/contact/#ContactSec">
                  contact
                </HashLink>
              </li>
            </ul>
            <ul className="secondLinkCont" style={{ marginBottom: "0" }}>
              <li className="links">
                <a href="tel: +91 9372938392">
                  <img
                    src={call}
                    alt="Call"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </a>
              </li>
              <li className="links">
                <a href="mailto: info@veteranmedias.com" target="_blank">
                  <img
                    src={mail}
                    alt="Mail"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </a>
              </li>
              <li className="links">
                <HashLink to="#" onClick={toggleDiv} id="sociaLinks">
                  <img
                    src={link}
                    alt="links"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </HashLink>
              </li>
            </ul>
            <div id="toggleMenu" className="menubar" onClick={menuToggler}>
              <img src={showMenu ? cross : menubar} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
