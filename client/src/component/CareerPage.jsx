import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import careerImg from "../media/png/Group 96.png";
import bar from "../media/png/career.png";
import Feedback from "./Feedback";
import { HashLink } from "react-router-hash-link";
import SwiperSlider from "./SwiperSlider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import MessageBox from "./MessageBox";
import cross2 from "../media/svg/cross2.svg";
import checkmark from "../media/svg/checkmark.svg";

function CareerPage() {
  const [toggle, setToggle] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    vacancy: "",
    message: "",
    file: "",
  });
  console.log(careerForm);

  const checkToggle = () => {
    setToggle(!toggle);
  };

  const careerInputHandler = (e) => {
    const { name, value } = e.target;
    setCareerForm({ ...careerForm, [name]: value });
  };

  const fileInputChangeHandler = (e) => {
    const file = e.target.files[0];
    setCareerForm({ ...careerForm, file });
  };

  const careerSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/career",
        careerForm
      );

      if (response.status === 201) {
        setShowMessageBox(true);
        setShowMessage(response.data.message);
        setMessageClass("success");
        setCareerForm({
          name: "",
          email: "",
          phone: "",
          vacancy: "",
          message: "",
          file: "",
        });
        hideDivAfterDelay();
        // alert(response.data.message);
      }
    } catch (error) {
      setShowMessageBox(true);
      setShowMessage(error.response.data.message);
      setMessageClass("failed");
      hideDivAfterDelay();
      // alert(error.response.data.message);
    }
  };

  // const careerSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append("name", careerForm.name);
  //     formData.append("email", careerForm.email);
  //     formData.append("phone", careerForm.phone);
  //     formData.append("vacancy", careerForm.vacancy);
  //     formData.append("message", careerForm.message);
  //     formData.append("file", careerForm.file);

  //     console.log("Form Data:", Object.fromEntries(formData)); // Log the form data

  //     const response = await axios.post(
  //       "http://localhost:4000/career",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (response.status === 201) {
  //       setShowMessageBox(true);
  //       setShowMessage(response.data.message);
  //       setMessageClass("success");
  //       setCareerForm({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         vacancy: "",
  //         message: "",
  //         file: null,
  //       });
  //       setTimeout(() => {
  //         setShowMessageBox(false);
  //       }, 3000);
  //     }
  //   } catch (error) {
  //     setShowMessageBox(true);
  //     setShowMessage(error.response.data.message);
  //     setMessageClass("failed");
  //     setTimeout(() => {
  //       setShowMessageBox(false);
  //     }, 3000);
  //   }
  // };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="careerTop" id="careerPage">
        <section className="careerHead">
          <div className="container" id="careerHead">
            <div className="careerText">
              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
                initial={{ opacity: 0, y: -100 }}
              >
                Join Our Dynamic Team <br /> At Veteran Media
              </motion.h1>
            </div>
            <div className="careerImg">
              <motion.img
                src={careerImg}
                alt="vector image"
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                }}
                initial={{ opacity: 0, x: 300 }}
              />
            </div>
            <div className="searchBar">
              <input type="text" placeholder="Search..." />
              <button id="searchBtn">Looking for</button>
            </div>
          </div>
        </section>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          initial={{ opacity: 0, y: 200 }}
        >
          Are you passionate about creativity, innovation, and making a
          significant impact in advertising and branding? At Veteran Media
          Solutions LLP, We're looking for dynamic individuals to join our
          dedicated team of professionals.
        </motion.p>
        <img id="bar" src={bar} alt="bar" />
      </section>

      <section className="careerSec sectionPadding">
        <div className="container" id="careerSec">
          <motion.h3
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
            initial={{ opacity: 0, y: -200 }}
          >
            Apply Now to be part of the Veteran Team
          </motion.h3>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
            initial={{ opacity: 0, y: -200 }}
          >
            As a rapidly growing agency with a proven track record, we offer a
            collaborative and inspiring work environment where your skills and
            ideas can thrive. We are giving you the moment to explore exciting
            career opportunities with us and be part of a journey that shapes
            our clients and our team's success stories.
          </motion.p>
          <div className="careerCont">
            {showMessageBox ? (
              <MessageBox boxclass={messageClass} alertMessage={showMessage} />
            ) : null}

            <div className="feedbackCont">
              <SwiperSlider></SwiperSlider>
            </div>

            <form className="contactCont" onSubmit={careerSubmitHandler}>
              <div className="inputCont">
                <input
                  type="text"
                  name="name"
                  value={careerForm.name}
                  onChange={careerInputHandler}
                  placeholder="Full Name*"
                />
                <input
                  type="email"
                  name="email"
                  value={careerForm.email}
                  onChange={careerInputHandler}
                  placeholder="Email*"
                />
                <input
                  type="text"
                  name="phone"
                  value={careerForm.phone}
                  onChange={careerInputHandler}
                  placeholder="Contact No*"
                />
                <input
                  type="text"
                  name="vacancy"
                  value={careerForm.vacancy}
                  onChange={careerInputHandler}
                  placeholder="Job Vacancy*"
                />
              </div>
              <label
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "2px solid #e8e8e8",
                }}
                htmlFor="file"
                className="fileInputLabel"
              >
                Upload CV/Portfolio
              </label>
              <input
                type="file"
                name="file"
                placeholder="Upload CV/ Portfolio"
                id="file"
                style={{ display: "none" }}
                onChange={fileInputChangeHandler} // Use fileInputChangeHandler for file input
              />
              <textarea
                name="message"
                id="cover"
                cols="30"
                rows="6"
                placeholder="Write your cover letter*"
                value={careerForm.message}
                onChange={careerInputHandler}
              ></textarea>
              <div className="formfooter">
               
                <div className="left">
                  <div className="checker" onClick={checkToggle}>
                    <div className="slider-button">x</div>
                  </div>
                  <p>
                    I agree with <HashLink>privacy policy</HashLink>
                  </p>
                </div>
                <button type="submit" id="applybtn">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default CareerPage;
