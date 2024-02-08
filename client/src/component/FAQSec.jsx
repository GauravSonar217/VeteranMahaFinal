import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function FAQSec() {
  const [showAns, setShowAns] = useState(false);

  function faqToggler(event) {
    const question = event.currentTarget;
    //   const answer = question.nextElementSibling;
    const parent = question.parentNode;
    const icon = parent.querySelector(".icon");

    setShowAns((prevShowAns) => !prevShowAns);
    if (!showAns) {
      // setShowAns(true);
      parent.classList.add("activeAns");
      icon.textContent = "-";
    } else {
      // setShowAns(false);
      parent.classList.remove("activeAns");
      icon.textContent = "+";
    }
  }

  return (
    <React.Fragment>
      <section id="faq" className="sectionPadding">
        <div className="container" id="faqSection">
          <motion.h4
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
          >
            More Information
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
          >
            Frequently asked questions
          </motion.h2>
          <div className="row my-4" id="faqCont">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <motion.div
                className="faq-card"
                id="faq-card-1"
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                <div onClick={faqToggler} className="question">
                  <h3>What services does Veteran Media offer?</h3>
                  <div className="toggle">
                    <span className="icon">+</span>
                  </div>
                </div>
                <div className="answer">
                  <p>
                    Veteran Media provides a comprehensive range of services
                    tailored to meet your specific needs. Our offerings include
                    Services.html designed to empower businesses and individuals
                    in achieving their goals. &nbsp;
                    <HashLink to="/#serviceSec">Check Services</HashLink>
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <motion.div
                className="faq-card"
                id="faq-card-2"
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                <div onClick={faqToggler} className="question">
                  <h3>How can I get started with Veteran Media?</h3>
                  <div className="toggle">
                    <span className="icon">+</span>
                  </div>
                </div>
                <div className="answer">
                  <p>
                    Simply fill this form &nbsp;
                    <HashLink to="/contact/#ContactSec">Contact Us</HashLink>.
                    Our team is ready to guide you through every step.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <motion.div
                className="faq-card"
                id="faq-card-3"
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                <div onClick={faqToggler} className="question">
                  <h3>
                    What sets Veteran Media apart from other agencies in the
                    industry?
                  </h3>
                  <div className="toggle">
                    <span className="icon">+</span>
                  </div>
                </div>
                <div className="answer">
                  <p>
                    At Veteran, we distinguish ourselves through Veteran Media
                    stands out in the industry through its:
                  </p>  
                  <ul>
                    <li>
                      1. Expertise: A team with extensive experience and
                      specialized knowledge.
                    </li>
                    <li>
                      2. Personalized Approach: Tailoring solutions to each
                      client's unique needs. Cutting-edge
                    </li>
                    <li>
                      3. Technology: Utilizing innovative tools and staying
                      current with industry trends.
                    </li>
                    <li>
                      4. Commitment to Excellence: Industry recognition,
                      certifications, and a track record of success.
                    </li>
                    <li>
                      5. Client Satisfaction: Positive testimonials, case
                      studies, and a client-centric approach.
                    </li>
                    <li>
                      6. Innovative Strategies: Creative problem-solving and
                      adaptability to industry changes.
                    </li>
                    <li>
                      7. Proven Track Record: Successful past campaigns and
                      long-term client relationships.
                    </li>
                    <li>
                      8. Collaborative Partnerships: Working closely with
                      clients as trusted, long-term partners..
                    </li>
                  </ul>
                  <p>
                    Our commitment to excellence and client satisfaction sets us
                    apart in the competitive landscape.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <motion.div
                className="faq-card"
                id="faq-card-4"
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                <div onClick={faqToggler} className="question">
                  <h3>
                    Is Veteran suitable for small Businesses/ Startups or larger
                    enterprises?
                  </h3>
                  <div className="toggle">
                    <span className="icon">+</span>
                  </div>
                </div>
                <div className="answer">
                  <p>
                    Veteran Media caters to a diverse clientele, including small
                    businesses, startups, and larger enterprises. Our scalable
                    solutions are adaptable to the unique requirements of
                    businesses of all sizes. Whether you're just starting or
                    looking to expand, we have the expertise to assist you.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <motion.div
                className="faq-card"
                id="faq-card-5"
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                <div onClick={faqToggler} className="question">
                  <h3>What is the typical timeline for project completion?</h3>
                  <div className="toggle">
                    <span className="icon">+</span>
                  </div>
                </div>
                <div className="answer">
                  <p>
                    Project timelines can vary based on the nature and scope of
                    the work. During the initial consultation, we'll work with
                    you to establish realistic timelines that align with your
                    objectives. Our commitment to efficiency ensures timely
                    delivery without compromising on quality.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <motion.div
                className="faq-card"
                id="faq-card-6"
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                <div onClick={faqToggler} className="question">
                  <h3>
                    How does Veteran Media LLP ensure client satisfaction?
                  </h3>
                  <div className="toggle">
                    <span className="icon">+</span>
                  </div>
                </div>
                <div className="answer">
                  <p>
                    Client satisfaction is at the core of our values. We
                    maintain transparent communication throughout the project,
                    provide regular updates, and actively seek feedback. Our
                    team is dedicated to surpassing your expectations, and we
                    prioritize your satisfaction in every aspect of our
                    partnership.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FAQSec;
