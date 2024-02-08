import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import playbtn from "../media/png/play.png";
import promovideo from "../media/production_id_5207408 (1080p).mp4";
import serviceImg from "../media/png/services.png";
import chatbox from "../media/png/chatbox.png";
import closechat from "../media/svg/closechat.svg";
import workImg1 from "../media/jpg/work1.jpg";
import workImg2 from "../media/jpg/work2.jpg";
import workImg3 from "../media/jpg/work3.jpg";
import workImg4 from "../media/jpg/work4.jpg";
import prog1 from "../media/png/understandingVision 1.png";
import prog2 from "../media/png/lightbulb 1.png";
import prog3 from "../media/png/execution 1.png";
import prog4 from "../media/png/innovation 1.png";
import prog5 from "../media/png/creativity 1.png";
import aboutImg from "../media/jpg/image 46.jpg";
import upload from "../media/png/upload.png";
import blog1 from "../media/jpg/blog1.jpg";
import blog2 from "../media/jpg/blog2.jpg";
import arrow from "../media/png/Vector 1.png";
import part1 from "../media/png/legrand.png";
import part2 from "../media/png/wipro.png";
import part3 from "../media/png/harisons.png";
import part4 from "../media/png/masterLH.png";
import part5 from "../media/png/mahindra.png";
import part6 from "../media/png/fivestar.png";
import member1 from "../media/jpg/yashimg.jpg";
import member2 from "../media/jpg/divyaimg.jpg";
import FAQSec from "./FAQSec";
import SwiperSlider from "./SwiperSlider";
import axios from "axios";
import MessageBox from "./MessageBox";

function Template() {
  const [showVideo, setShowVideo] = useState(false);
  const [showbtn, setShowbtn] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [counter, setCounter] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showMessage, setShowMessage] = useState();
  const [messageClass, setMessageClass] = useState();
  const targetRef = useRef();

  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
    file: "",
  });

  let hideDivAfterDelay = () => {
    setTimeout(() => {
      setShowMessageBox(false);
    }, 3000);

    // return () => {
    //   clearTimeout(hideTimeout);
    // };
  };

  const handleInquiryInput = (e) => {
    const { name, value } = e.target;
    return setInquiryForm({ ...inquiryForm, [name]: value });
  };

  const inquirySubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/inquiry",
        inquiryForm
      );

      if (response.status === 201) {
        // alert(response.data.message)
        setShowMessage(response.data.message);
        setShowMessageBox(true);
        setMessageClass("success");

        setInquiryForm({
          name: "",
          email: "",
          phone: "",
          services: "",
          message: "",
          file: "",
        });
        hideDivAfterDelay();
      }
    } catch (error) {
      // alert(error.response.data.message);
      setShowMessageBox(true);
      setShowMessage(error.response.data.message);
      setMessageClass("failed");
      hideDivAfterDelay();
    }
  };

  let clientCounter, regularClient, projectDone, experience;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the counter when the section is visible
            startCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      // Clear the intervals when the component unmounts or is no longer visible
      clearInterval(clientCounter);
      clearInterval(regularClient);
      clearInterval(projectDone);
      clearInterval(experience);
    };
  }, []);

  const startCounter = () => {
    let a = 0,
      b = 0,
      c = 0,
      d = 0;

    const updateCounter = () => {
      a = Math.min(a + Math.floor(Math.random() * 100), 700);
      b = Math.min(b + Math.floor(Math.random() * 10), 30);
      c = Math.min(c + Math.floor(Math.random() * 100), 999);
      d = Math.min(d + Math.floor(Math.random() * 2), 5);

      document.querySelector("#one").innerHTML = a + "+";
      document.querySelector("#two").innerHTML = b + "+";
      document.querySelector("#three").innerHTML = c + "+";
      document.querySelector("#four").innerHTML = d;
    };

    // Update the counter values at intervals
    clientCounter = setInterval(updateCounter, 100);
    regularClient = setInterval(updateCounter, 500);
    projectDone = setInterval(updateCounter, 100);
    experience = setInterval(updateCounter, 500);

    return () => {
      clearInterval(clientCounter);
      clearInterval(regularClient);
      clearInterval(projectDone);
      clearInterval(experience);
    };
  };

  useEffect(() => {
    function moveCursor(dets) {
      const cursor = document.getElementById("cursor");
      const imgCont = document.getElementById("imgCont");
      const imgContRect = imgCont.getBoundingClientRect();
      const mouseX = dets.clientX - imgContRect.left;
      const mouseY = dets.clientY - imgContRect.top;

      if (
        mouseX >= 0 &&
        mouseX <= imgContRect.width &&
        mouseY >= 0 &&
        mouseY <= imgContRect.height
      ) {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
      }
    }

    const imgCont = document.getElementById("imgCont");
    imgCont.addEventListener("mousemove", moveCursor);
    return () => {
      imgCont.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  function playVideo() {
    const video = document.getElementById("video");
    const videoSection = document.getElementById("videoSection");
    const videoCont = document.getElementById("videoOuter");
    const playButton = document.querySelector(".play-button");

    // Check if the device width is below 425px (mobile device)
    if (window.innerWidth <= 425) {
      videoCont.style.height = "30vh"; // Set height to 30vh for mobile devices
    } else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
      videoCont.style.height = "50vh"; // Set height to 50vh for tablet-sized screens
    } else {
      videoCont.style.height = "100vh"; // Set height to 100vh for other devices
    }

    videoSection.style.width = "100%";
    videoSection.style.height = "100%";
    playButton.style.display = "none";

    video.play();
  }

  function mapShower() {
    let mapShow = document.getElementById("mapShower");
    let mapShadow = document.getElementById("mapShadow");
    let contactBox = document.querySelector(".contactText");
    let head = document.querySelector("#head");

    if (!showMap) {
      mapShadow.style.visibility = "hidden";
      contactBox.style.backgroundColor = "black";
      setShowMap(true);
    } else {
      mapShadow.style.visibility = "visible";
      contactBox.style.backgroundColor = "transparent";
      setShowMap(false);
    }
  }

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <div className="chatBoxIcon">
        <img src={chatbox} alt="" />
      </div>
      <div id="chatBox">
        <div className="chatHead">
          <h5>Introduce yourself and chat!</h5>
          <img src={closechat} alt="" />
        </div>
        <div className="chatInputCont">
          <input type="text" placeholder="Your name*" />
          <input type="email" placeholder="Your email*" />
          <input type="phone" placeholder="Your phone*" />
          <textarea
            name="message"
            id="message"
            placeholder="Your message*"
          ></textarea>
          <button className="chatBtn">Start Chat</button>
        </div>
      </div>
      <section className="videoCont">
        <div id="videoOuter">
          <img
            src={playbtn}
            alt="Play Button"
            className="play-button"
            onClick={playVideo}
            id="pause"
          />
          <div className="video-section" id="videoSection">
            <video id="video" loop muted autoPlay>
              <source src={promovideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="counterCont sectionPadding" ref={targetRef}>
        <div className="container" id="clientCont">
          <motion.div
            className="innerCont"
            id="innercont"
            initial={{ opacity: 0, translateY: 200 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="projectBox">
              <h2 id="one"></h2>
              <h3>Happy clients</h3>
            </div>
            <div className="projectBox">
              <h2 id="two"></h2>
              <h3>Regular Client’s</h3>
            </div>
            <div className="projectBox">
              <h2 id="three"></h2>
              <h3>Project done</h3>
            </div>
            <div className="projectBox">
              <h2 id="four"></h2>
              <h3>Years experience</h3>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="serviceSec sectionPadding">
        <div className="container" id="serviceSec">
          <div className="innerCont" id="innercont">
            <div className="serviceImgCont">
              <img src={serviceImg} alt="service section image" />
            </div>
            <div className="serviceTextCont">
              <div className="serve">
                <motion.h2
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  Our Services
                </motion.h2>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Branding</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Space Buying</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Marketing Plans</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>On-Air Promotions</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Merchandising</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Digital Printing</HashLink>
                </motion.h3>
              </div>
              <div className="serve">
                <h2>f</h2>
                <motion.h3
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Marketing Push</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Indoor & Outdoor Branding</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Finishing & Packaging</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Web Design</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Offset Printing</HashLink>
                </motion.h3>
                <motion.h3
                  className="ourServiceList"
                  initial={{ opacity: 0, translateY: -50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <HashLink>Web Development</HashLink>
                </motion.h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourWorkSec sectionPadding">
        <div className="container" id="workSec">
          <div className="innerCont" id="ourWork">
            <h2>Our Work</h2>
            <div className="workCont">
              <motion.div
                initial={{ translateX: -300 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 1,
                }}
                className="workBox"
              >
                <div className="workImgBox">
                  <img src={workImg1} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Packaging Design</h3>
                  <h5>
                    <HashLink>Read More</HashLink>
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ translateX: 300 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 1,
                }}
                className="workBox"
              >
                <div className="workImgBox">
                  <img src={workImg2} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Merchandising Design</h3>
                  <h5>
                    <HashLink>Read More</HashLink>
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ translateX: -300 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 1,
                }}
                className="workBox"
              >
                <div className="workImgBox">
                  <img src={workImg4} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Printing</h3>
                  <h5>
                    <HashLink>Read More</HashLink>
                  </h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ translateX: 300 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 1,
                }}
                className="workBox"
              >
                <div className="workImgBox">
                  <img src={workImg3} alt="workdone image" />
                </div>
                <div className="workTextBox">
                  <h3>Outdoor Branding</h3>
                  <h5>
                    <HashLink>Read More</HashLink>
                  </h5>
                </div>
              </motion.div>
            </div>
            <HashLink to="/portfolio/#projectSec">
              <motion.button
                id="workBtn"
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                See Our Work
              </motion.button>
            </HashLink>
          </div>
        </div>
      </section>
      <section className="progressSec sectionPadding">
        <div className="container" id="progressSec">
          <div className="innerCont" id="innerProgressSec">
            <motion.h3
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              Our work process
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              Mastering Brilliance: A Seamless Journey through Veteran Media
              Solutions LLP's Success Blueprint.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
            >
              Behind every successful brand is a meticulously crafted process
              that transforms ideas into impactful results. At Veteran Media.
              our work process is more than a series of steps; it's a journey of
              creativity, strategy, and dedication. Check our success steps out!
            </motion.p>
          </div>
          <div className="progressCont">
            <div className="progressBox">
              <img src={prog1} alt="Understading Your Vision" />
              <h4>Understading Your Vision</h4>
              <p>
                The first step is understanding your vision for your brand. We
                delve deep into your goals, values, and the story you want to
                tell, ensuring that every element of our work aligns with your
                brand identity.
              </p>
            </div>
            <div className="progressBox">
              <img src={prog2} alt="Strategic Implementation" />
              <h4>Strategic Implementation</h4>
              <p>
                Creativity needs a strategic foundation to thrive. Our team
                integrates innovative ideas into a strategic framework, ensuring
                that every campaign, design, or promotion enhances your brand's
                visibility and resonance.
              </p>
            </div>
            <div className="progressBox">
              <img src={prog3} alt="Dedicated Execution" />
              <h4>Dedicated Execution</h4>
              <p>
                The best ideas are only as good as their execution. We take
                pride in our dedicated execution, ensuring every project is
                brought to life with precision. From branding to web
                development, our team delivers excellence.
              </p>
            </div>
            <div className="progressBox">
              <img src={prog4} alt="Continuous Refinement" />
              <h4>Continuous Refinement</h4>
              <p>
                The journey doesn't end with the delivery of a project. We
                believe in continuous refinement and improvement. We analyze the
                results, gather feedback, and adjust to ensure your brand meets
                and exceeds expectations
              </p>
            </div>
            <div className="progressBox">
              <img src={prog5} alt="Creative Ideation" />
              <h4>Creative Ideation</h4>
              <p>
                With a clear understanding of your vision, our creative minds go
                to work. Ideas are brainstormed, concepts are crafted, and
                innovation is ignited. The magic happens in this phase, setting
                the stage for a distinctive narrative.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSec sectionPadding">
        <div className="container" id="aboutSec">
          <div className="innerCont" id="aboutInner">
            <motion.div
              initial={{ opacity: 0, translateX: -300 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                duration: 1,
              }}
              className="aboutImgCont"
              id="imgCont"
            >
              <img src={aboutImg} alt="about section image" />
              <div id="cursor">
                <HashLink>Read More</HashLink>
              </div>
            </motion.div>
            <div className="aboutTextCont">
              <motion.h3
                initial={{ opacity: 0, translateY: -80 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.8,
                }}
              >
                About us
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, translateY: -80 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.8,
                }}
              >
                Crafting Stories, Building Brands, Meet Veteran Media Solutions
                LLP
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, translateY: -80 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                You need to dive into the heart of Veteran Media Solutions,
                where the journey of creativity and innovation unfolds. With
                years of expertise, we've navigated the ever-evolving landscape
                of advertising, marketing, and branding, leaving a trail of
                success stories. Our hardworking group of professionals is more
                than just a job; we're a group of visionaries, planners, and
                creative thinkers who will take your brand to new heights.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      <section className="partnerSec sectionPadding container">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
        >
          Our Major Clients
        </motion.h2>
        <div className="logo-slider">
          <div className="logo-slide-track">
            <div className="slide">
              <img
                src={part1}
                alt="legrand logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part2}
                alt="wipro logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part3}
                alt="harisons logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part4}
                alt="master light house"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part5}
                alt="mahindra logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part6}
                alt="fivestar decore & events"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part1}
                alt="legrand logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part2}
                alt="wipro logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part3}
                alt="harisons logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part4}
                alt="master light house"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part5}
                alt="mahindra logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="slide">
              <img
                src={part6}
                alt="mahindra logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="teamSec sectionPadding">
        <div className="container" id="teamSec">
          <div className="innerCont" id="teamCont">
            <h4>Our Team</h4>
            <h2>The Creative Minds Behind Untitled UI</h2>
            <p>
              Our philosophy centers on providing our exceptional team with the
              resources and support they need to excel. Witness the synergy of
              talent and dedication as we strive for excellence in every
              project.
            </p>
            <div className="teamBoxCont">
              <div className="teamBox">
                <img src={member1} alt="employess image" />
                <h3>Piyush More</h3>
                <h6>Founder & Managing Director</h6>
              </div>
              <div className="teamBox">
                <img src={member1} alt="employess image" />
                <h3>Yashwant Gosavi</h3>
                <h6>Cnslt. Web Designer & Developer</h6>
              </div>
              <div className="teamBox">
                <img src={member1} alt="employess image" />
                <h3>Darshan Chaudhari</h3>
                <h6>Motion Graphic Designer</h6>
              </div>
              <div className="teamBox">
                <img src={member2} alt="employess image" />
                <h3>Divya Sonar</h3>
                <h6>UI-UX & Graphic Designer</h6>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <FAQSec></FAQSec>
      <section className="blogSection sectionPadding">
        <div className="container" id="blogSec">
          <div className="innerCont" id="blogCont">
            <div className="blogHead">
              <h2>Latest Blogs</h2>
              <h5>View All</h5>
            </div>
            <div className="blogBoxCont">
              <motion.div
                initial={{ translateX: -200 }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 1,
                }}
                className="blogBox"
              >
                <div className="blogImgCont">
                  <img src={blog1} alt="blo1" />
                </div>
                <div className="blogTextCont">
                  <h3>
                    <HashLink>Our design process explained</HashLink>
                  </h3>
                  <h5>April 27, 2023</h5>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="blogBox"
              >
                <div className="blogImgCont">
                  <img src={blog2} alt="blo2" />
                </div>
                <div className="blogTextCont">
                  <h3>
                    <HashLink>A peek into our branding strategy</HashLink>
                  </h3>
                  <h5>May 10, 2023</h5>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSection">
        {showMessageBox ? (
          <MessageBox boxclass={messageClass} alertMessage={showMessage} />
        ) : null}

        <div className="contactTextBox">
          <div className="contactText">
            <h2 id="head">Contact Us</h2>
            <p>
              Ready to take the next step in transforming your brand? Whether
              you have questions, ideas bubbling, or are ready to embark on a
              creative journey with us, we're here for you.
            </p>
          </div>
        </div>
        <iframe
          className="contactMap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3748.406429425029!2d73.8036145!3d20.0334121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea323f2ad1ef%3A0xba3a9388a398fa65!2sVeteran%20Media%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1700457867538!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div id="mapShadow" className="shadow"></div>
        <h3 id="mapShower" onClick={mapShower}>
          <p>
            Click here to adjust google map
            <img
              src={arrow}
              alt="arrow"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </p>
        </h3>
        <motion.div
          initial={{ translateX: 200 }}
          whileInView={{ translateX: 0 }}
          transition={{
            duration: 1,
          }}
          className="contactForm"
        >
          {/* <div className="firstCont"> */}
          <h2>Enquiry Form</h2>
          <form onSubmit={inquirySubmitHandler}>
            <div>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                value={inquiryForm.name}
                required
                onChange={handleInquiryInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                value={inquiryForm.email}
                onChange={handleInquiryInput}
              />
            </div>
            <div>
              <label htmlFor="contactNo">Contact No*</label>
              <input
                type="text"
                name="phone"
                id="contact"
                value={inquiryForm.phone}
                onChange={handleInquiryInput}
              />
            </div>
            <div>
              <select
                name="services"
                value={inquiryForm.services}
                onChange={handleInquiryInput}
              >
                <option disabled>What are you looking for*</option>
                <option value="Branding"> Branding</option>
                <option value="Marketing Push"> Marketing Push</option>
                <option value="Space Buying"> Space Buying</option>
                <option value="Indoor & Outdoor Branding">
                  Indoor & Outdoor Branding
                </option>
                <option value="Marketing Plans"> Marketing Plans</option>
                <option value="Finishing & Packaging">
                  Finishing & Packaging
                </option>
                <option value="On-Air Promotions"> On-Air Promotions</option>
                <option value="Web Design"> Web Design</option>
                <option value="Merchandising"> Merchandising</option>
                <option value="Offset Printing"> Offset Printing</option>
                <option value="Digital Printing"> Digital Printing</option>
                <option value="Web Development"> Web Development</option>
              </select>
            </div>
            {/* <div>
            </div> */}
            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols="15"
                rows="1"
                value={inquiryForm.message}
                onChange={handleInquiryInput}
              ></textarea>
            </div>

            <div id="upload-container" className="uploadCont">
              <label htmlFor="file-input" id="upload-label">
                <div id="upload-icon">
                  <img
                    src={upload}
                    alt="upload Image"
                    style={{ maxWidth: "100%", height: "auto" }}
                  ></img>
                </div>
                Upload File
              </label>
              <input
                type="file"
                name="file"
                id="file-input"
                accept=".pdf"
                onChange={handleInquiryInput}
              ></input>
              <button type="submit" id="messageBtn" className="btn1">
                Send Message
              </button>
            </div>
          </form>
          {/* </div> */}
        </motion.div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Template;
