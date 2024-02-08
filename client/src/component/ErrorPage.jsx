import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import errorImg from "../media/svg/404.svg";
import { HashLink } from "react-router-hash-link";

function ErrorPage() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="errorPage sectionPadding">
        <div className="errorCont">
          <h1>We lost this page</h1>
          <p>
            We searched high and low but couldn’t find what you’re looking for.
            Let’s find a better place for you to go.
          </p>
          <HashLink to="/">
            <button className="goHomeBtn">Veteran Home</button>
          </HashLink>
          <img className="errorPic" src={errorImg} alt="ErrorPage Image" />
        </div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default ErrorPage;
