import React from "react";
import { motion, useScroll } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footerTextCont">
          <div className="container" id="footerCont">
            <div className="innerCont" id="footerTextBox">
              <div className="addressCont">
                <motion.div
                  className="addressBox"
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <h3>Our Address</h3>
                  <p>
                    Office 1, Second Floor, Indira Heights, Gangapur Rd, Near
                    Pramod Mahajan Garden, Old Gangapur Naka, Nashik,
                    Maharashtra 422005
                  </p>
                </motion.div>
                <motion.div
                  className="addressBox"
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <h3>Inquires</h3>
                  <p>
                    <HashLink to="mailto: info@veteranmedias.com">
                      info@veteranmedias.com
                    </HashLink>
                  </p>
                </motion.div>
                {/* <motion.h2
                 initial={{ opacity: 0, y: -100 }}
                 whileInView={{opacity: 1,  y: 0 }}
                 transition={{
                   duration: 1,
                 }}
                >
                  Website Visitors: <span id="count"> 10</span>
                </motion.h2> */}
              </div>
              <div className="linkCont">
                <motion.div
                  className="linkBox"
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <h3>Main Pages</h3>
                  <ul className="flinkCont">
                    <li>
                      <HashLink to="/portfolio/#projectSec">Portfolio</HashLink>
                    </li>
                    <li>
                      <HashLink to="/service/#serviceSec">Services</HashLink>
                    </li>

                    <li>
                      <HashLink to="/career/#careerPage">Career</HashLink>
                    </li>
                    <li>
                      <HashLink to="/contact/#ContactSec">Contact Us</HashLink>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="linkBox"
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <h3>Services</h3>
                  <ul className="flinkCont">
                    <li>
                      <HashLink>Graphic Design</HashLink>
                    </li>
                    <li>
                      <HashLink>Printing Design</HashLink>
                    </li>
                    <li>
                      <HashLink>Marketing</HashLink>
                    </li>
                    <li>
                      <HashLink>Web Design and Development</HashLink>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="linkBox"
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <ul className="flinkCont">
                    <li>
                      <HashLink>Privacy Policy</HashLink>
                    </li>
                    <li>
                      <HashLink>Terms of Service</HashLink>
                    </li>
                    <li>
                      <HashLink>Sitemap</HashLink>
                    </li>
                    <li>
                      <HashLink>Client Area</HashLink>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyCont">
          <div className="container" id="copyCont">
            <div className="innerCont" id="copy">
              <h6>All rights reserved © 2009 - 2023 Veteran Media LLP.</h6>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
