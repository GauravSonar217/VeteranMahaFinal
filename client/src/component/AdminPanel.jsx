import React, { useState, useEffect } from "react";
import Clogo from "../media/svg/logo.svg";
import inquiry from "../media/png/conversation.png";
import contact from "../media/png/email.png";
import career from "../media/png/career-choice.png";
import { HashLink } from "react-router-hash-link";
import UserDetails from "./UserDetails";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AdminPanel() {
  // const [inquiryData, setInquiryData] = useState([]);
  // const [contactData, setContactData] = useState([]);
  // const [careerData, setCareerData] = useState([]);
  // const [displayedData, setDisplayedData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [isLoggin, setIsLoggin] = useState(true); 
  const [loginDetail, setLoginDetail] = useState({ email: "", password: "" });



  const [currentEndpoint, setCurrentEndpoint] = useState("inquiry");
  const [allFormData, setAllFormData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/${currentEndpoint}`
      );

      setAllFormData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentEndpoint]);

  const setEndpoint = (endpoint) => {
    setCurrentEndpoint(endpoint);
  };


  const deleteUserData = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/${currentEndpoint}/${id}`);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };
















































  // const handleButtonClick = (data) => {
  //   setDisplayedData(data);
  // };

  // const fetchData = async () => {
  //   try {
  //     const response1 = await axios.get("http://localhost:4000/inquiry");
  //     // const response2 = axios.get("http://localhost:4000/contact");
  //     // const response3 = axios.get("http://localhost:4000/career");

  //     // const [inquiry, contact, career] = await Promise.all([
  //     //   response1,
  //     //   response2,
  //     //   response3,
  //     // ]);

  //     setInquiryData(inquiry.data);
  //     setContactData(contact.data);
  //     setCareerData(career.data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   setDisplayedData(inquiryData);
  // }, [inquiryData]);

  // if (displayedData.length === 0) return <h1>loading...</h1>;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginDetail({ ...loginDetail, [name]: value });
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        loginDetail
      );

      if (response.status === 200) {
        setIsLoggin(false);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // user details show popup
  function showPopup(data) {
    setShowModel(true);
    setUserData(data);
  }

  // user details close popup
  function closePop() {
    setShowModel(false);
  }

  return (
    <React.Fragment>
      {isLoggin ? (
        <section className="loginSec">
          <form className="userloginCont" onSubmit={loginSubmitHandler}>
            <h2>Login</h2>
            <div className="inputField">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter your Email"
                id="email"
                name="email"
                value={loginDetail.email}
                onChange={inputHandler}
                required
              />
            </div>
            <div className="inputField">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={loginDetail.password}
                onChange={inputHandler}
                required
              />
            </div>
            <button type="submit" id="loginBtn">
              Login
            </button>
          </form>
        </section>
      ) : (
        <section className="adminPanelSec">
          <div className="adminHeader">
            <div className="container" id="adminHeaderSec">
              <HashLink to="/"><img src={Clogo} alt="Company logo" /></HashLink>
              <nav className="adminNavbar">
                <div className="linkgrp">
                  <p>
                    <HashLink to="/">Home</HashLink> &gt;
                  </p>
                  <p>
                    <HashLink>Tickets</HashLink>
                  </p>
                </div>
                <button id="logoutBtn"><HashLink to="/">Logout</HashLink></button>
              </nav>
            </div>
          </div>
          <div className="adminPanel">
            <div className="container" id="adminPanelCont">
              <div className="dataBoxCont">
                <div
                  className="dataBox"
                  onClick={() => setEndpoint("inquiry")}
                >
                  <img src={inquiry} alt="inquiry" />
                  <h3>Inquiry</h3>
                </div>
                <div
                  className="dataBox"
                  onClick={() => setEndpoint("contact")}
                >
                  <img src={contact} alt="contact" />
                  <h3>Contact</h3>
                </div>
                <div
                  className="dataBox"
                  onClick={() => setEndpoint("career")}
                >
                  <img src={career} alt="career" />
                  <h3>Career</h3>
                </div>
              </div>
              <div className="userDetailsCont">
                <table className="dataTable">
                  <thead >
                    <tr className="tableHead">
                      <th style={{ width: "5%" }}>Sr. No</th>
                      <th style={{ width: "20%" }}>Name</th>
                      <th style={{ width: "65%" }}>Subject</th>
                      <th style={{ width: "10%" }}>Delete</th>
                    </tr>
                  </thead>
                  <tbody className="tableBody">
                    {/* <HashLink to="/userDetail"> */}
                    {allFormData.map((data, index) => {
                      return (
                        <tr style={{ padding: "2rem" }} key={data._id}>
                          <td>{index + 1}</td>
                          <td onClick={() => showPopup(data)}>{data.name}</td>
                          <td onClick={() => showPopup(data)}>
                            {data.message}
                          </td>
                          <td>
                            <button onClick={()=> deleteUserData(data._id)} className="deleteBtn">Delete</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
      {showModel && <UserDetails userData={userData} close={closePop} />}
    </React.Fragment>
  );
}

export default AdminPanel;
