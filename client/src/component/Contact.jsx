import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import MessageBox from "./MessageBox";
import ContactHead from "../media/png/contact.png";
import bar from "../media/png/career.png";
import address from "../media/svg/address.svg";
import phone from "../media/svg/mobile.svg";
import mail from "../media/svg/email.svg";
import FAQSec from "./FAQSec";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  const hideDivAfterDelay = () => {
    setTimeout(() => {
      setShowMessageBox(false);
    }, 3000);
  };

  const contactInputHandler = (e) => {
    const { name, value } = e.target;
    return setContactForm({ ...contactForm, [name]: value });
  };

  const contactSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/contact",
        contactForm
      );
      console.log(response);
      if (response.status === 201) {
        setShowMessageBox(true);
        setShowMessage(response.data.message);
        setMessageClass("success");
        hideDivAfterDelay();
        setContactForm({ name: "", email: "", services: "", message: "" });
      }
    } catch (error) {
      setShowMessageBox(true);
      setShowMessage(error.response.data.message);
      setMessageClass("failed");
      hideDivAfterDelay();
    }
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="projectSec">
        <section id="ContactSec">
          <div className="container" id="projectCont">
            <motion.div
              className="contactText"
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
              initial={{ opacity: 0, y: -100 }}
            >
              <h1>Let's Shape Your Vision</h1>
              <p>Ready to take the next step in transforming your brand?</p>
              <p>
                Whether you have questions, Ideas bubbling, or are ready to
                embark on a creative journey with us, we're here for you.
                Contacting us at Veteran Media Solutions LLP is more than a
                transaction; it's the beginning of a collaboration that will
                shape your brand's narrative.
              </p>
            </motion.div>
            <div className="contactImg">
              <motion.img
                src={ContactHead}
                alt="vector image"
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                initial={{ opacity: 0, x: 300 }}
              />
            </div>
          </div>
        </section>
        <div className="container" id="textSec">
          <div className="innerCont">
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
              initial={{ opacity: 0, y: 100 }}
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
      <section className="contactFormSec sectionPadding">
        {showMessageBox ? (
          <MessageBox boxclass={messageClass} alertMessage={showMessage} />
        ) : null}
        <div className="container" id="formWrapper">
          <div className="innerCont" id="formCont">
            <div className="getInTouchForm">
              <form id="getForm" onSubmit={contactSubmitHandler}>
                <div>
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={contactForm.name}
                    onChange={contactInputHandler}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={contactForm.email}
                    onChange={contactInputHandler}
                  />
                </div>

                <div>
                  <select
                    name="services"
                    value={contactForm.services}
                    onChange={contactInputHandler}
                  >
                    <option disabled>What are you looking for*</option>
                    <option value="Branding"> Branding</option>
                    <option value="Marketing Push"> Marketing Push</option>
                    <option value=" Space Buying"> Space Buying</option>
                    <option value="Indoor & Outdoor Branding">
                      {" "}
                      Indoor & Outdoor Branding
                    </option>
                    <option value=" Marketing Plans"> Marketing Plans</option>
                    <option value="Finishing & Packaging">
                      {" "}
                      Finishing & Packaging
                    </option>
                    <option value=" On-Air Promotions">
                      {" "}
                      On-Air Promotions
                    </option>
                    <option value="Web Design"> Web Design</option>
                    <option value=" Merchandising"> Merchandising</option>
                    <option value="Offset Printing"> Offset Printing</option>
                    <option value="Digital Printing"> Digital Printing</option>
                    <option value="Web Development"> Web Development</option>
                  </select>
                  {/* <label htmlFor="query">What are you looking for*</label> */}
                  {/* <input type="text" name="query" id="query" /> */}
                </div>
                <label htmlFor="message">Message*</label>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    value={contactForm.message}
                    onChange={contactInputHandler}
                  ></textarea>
                </div>
                <div className="">
                  <button type="submit" id="messageBtn" className="btn2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="contactTextBox">
              <h3>Get in touch</h3>
              <h5>Send a message</h5>
              <p>
                If you have questions, feedback, or collaboration ideas, we're
                here to respond promptly and ensure your experience with us is
                seamless.
              </p>
              <div className="addBox">
                <h5>
                  <span>
                    <img src={address} alt="" />
                  </span>
                  Address:
                </h5>
                <p>
                  Office 1, Second Floor, Indira Heights, Gangapur Rd, Near
                  Pramod Mahajan Garden, Old Gangapur Naka, Nashik,
                  Maharashtra 422005
                </p>
              </div>
              <div className="addBox">
                <h5>
                  <span>
                    <img src={phone} alt="" />
                  </span>
                  Phone number:
                </h5>
                <p>+91 93729 38392</p>
              </div>
              <div className="addBox">
                <h5>
                  <span>
                    <img src={mail} alt="" />
                  </span>
                  Email:
                </h5>
                <div className="mailbox">
                  <p>
                    <span>Contact: </span>
                    info@veteranmedias.com
                  </p>
                  <p>
                    <span>Jobs: </span>
                    talent@veteranmedias.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mapSec sectionPadding">
        <div className="container" id="mapCont">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
          >
            Find us on Google Map
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
          >
            Discover our location effortlessly on Google Maps – your gateway to
            our doorstep. <br /> Navigate with ease and join us on the map for a
            seamless experience.
          </motion.p>
          <iframe
            className="outMap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3748.406429425029!2d73.8036145!3d20.0334121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea323f2ad1ef%3A0xba3a9388a398fa65!2sVeteran%20Media%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1700457867538!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="faqSec">
        <FAQSec></FAQSec>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Contact;
