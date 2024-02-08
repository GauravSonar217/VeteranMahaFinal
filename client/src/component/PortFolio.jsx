import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Portfolio from "../media/png/portfolio.png";
import projectData from "../data/projectData.json";
import bar from "../media/png/career.png";
import employee from "../media/png/employee.png";
import { HashLink } from "react-router-hash-link";
const imageSrc = require('../media/jpg/p1.jpg');
import p1 from "../media/jpg/p1.jpg";
import p2 from "../media/jpg/p2.jpg";
import p3 from "../media/jpg/p3.jpg";
import p4 from "../media/jpg/p4.jpg";
import p5 from "../media/jpg/p5.jpg";
import p6 from "../media/jpg/p6.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PortfolioPage() {
  const [serviceInfo, setServiceInfo] = useState(projectData[0]);
  const [activeService, setActiveService] = useState(
    projectData[0].serviceName
  );

  const handleService = (service) => {
    setServiceInfo(service);
    setActiveService(service.serviceName);
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="projectSec">
        <section className="portHead" id="projectSec">
          <div className="container" id="projectCont">
            <div className="projectText">
              <motion.h1
               animate={{ opacity: 1, y: 0}}
               transition={{
                 duration: 1,
               }}
               initial={{ opacity: 0,y: -200}}
              >
                Portfolio Showcase: <br /> Where Vision Meets Victor
              </motion.h1>
            </div>
            <div className="careerImg">
              <motion.img src={Portfolio} alt="vector image"
              animate={{ opacity: 1, x: 0}}
              transition={{
                duration: 1,
              }}
              initial={{ opacity: 0,x: 300}}
               />
            </div>
          </div>
        </section>
        <div className="container" id="textSec">
          <div className="innerCont">
            <motion.p
             animate={{ opacity: 1, y: 0}}
             transition={{
               duration: 1,
             }}
             initial={{ opacity: 0,y: 100}}
            >
              Welcome to the Portfolio Showcase at Veteran Media Solutions LLP,
              where new ideas and hard work come together. This carefully chosen
              group of projects shows an assortment of wins, with each story
              featuring problems that were solved, challenges that were
              overcome, and hopes that were turned into reality. Our showcase
              shows how creative people can do anything, from redefining brands
              in a fast-paced world to making immersive digital experiences and
              using smart packaging to turn goods into iconic stories.
            </motion.p>
            <img id="bar" src={bar} alt="bar" />
          </div>
        </div>
      </section>
      <section className="porfolioSec sectionPadding">
        <div className="container" id="portfolioCont">
          <h1>Portfolio</h1>
          <div className="projectbar">
            {projectData.map((service, index) => (
              <HashLink
                id="projectLink"
                key={index}
                onClick={() => handleService(service)}
                className={
                  service.serviceName === activeService ? "activeService" : ""
                }
              >
                {service.serviceName}
              </HashLink>
            ))}
          </div>
          <div className="projectCont">
            <div className="projectRow row1">
              <div className="projectBox">
                <div className="projectImgBox p1">
                  {/* <img src={serviceInfo.serviceData[0].projectImg} alt="" /> */}
                  {/* <img src={p1} alt="" /> */}
                </div>
                <div className="projectTextBox big">
                  <h3>{serviceInfo.serviceData[0].projectName}</h3>
                  <p>{serviceInfo.serviceData[0].projectDesc}</p>
                </div>
              </div>
              <div className="projectBox"
              
              >
                <div className="projectImgBox p2">
                  {/* <img src={p2} alt="project image" /> */}
                </div>
                <div className="projectTextBox small">
                  <h3>{serviceInfo.serviceData[1].projectName}</h3>
                  <p>{serviceInfo.serviceData[1].projectDesc}</p>
                </div>
              </div>
            </div>

            <div className="projectRow row2">
              <div className="projectBox"
               
              >
                <div className="projectImgBox p3">
                  {/* <img src={p3} alt="project image" /> */}
                </div>
                <div className="projectTextBox small">
                  <h3>{serviceInfo.serviceData[2].projectName}</h3>
                  <p>{serviceInfo.serviceData[2].projectDesc}</p>
                </div>
              </div>
              <div className="projectBox"
                
              >
                <div className="projectImgBox p4">
                  {/* <img src={p4} alt="project image" /> */}
                </div>
                <div className="projectTextBox big">
                  <h3>{serviceInfo.serviceData[3].projectName}</h3>
                  <p>{serviceInfo.serviceData[3].projectDesc}</p>
                </div>
              </div>
            </div>
            <div className="projectRow row1">
              <div className="projectBox"

              >
                <div className="projectImgBox p5">
                  {/* <img src={p5} alt="project image" /> */}
                </div>
                <div className="projectTextBox big">
                  <h3>{serviceInfo.serviceData[4].projectName}</h3>
                  <p>{serviceInfo.serviceData[4].projectDesc}</p>
                </div>
              </div>
              <div className="projectBox"
               
              >
                <div className="projectImgBox p6">
                  {/* <img src={p6} alt="project image" /> */}
                </div>
                <div className="projectTextBox small">
                  <h3>{serviceInfo.serviceData[5].projectName}</h3>
                  <p>{serviceInfo.serviceData[5].projectDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="connectSec sectionPadding">
        <div className="container" id="connectSec">
          <motion.div className="innerCont" id="connectCont"
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
            }}
          >
            <h2>
              Are you looking for <br /> The Best Design Agency <br /> for your
              ideas?
            </h2>
            <p>And we can help you bring it to the world.</p>
            <HashLink className="nav-link" to="/contact/#ContactSec">
              <motion.button id="connectBtn"
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                }}
              >Let’s Talk</motion.button>
            </HashLink>
          </motion.div>
        </div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default PortfolioPage;
