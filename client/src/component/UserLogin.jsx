import React, { useState } from "react";
import axios from "axios";

function UserLogin({ closeModal }) {
  const [loginDetail, setLoginDetail] = useState({ email: "", password: "" });

  console.log(loginDetail)

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
    //   console.log(response.data)
      if(response.status === 200){
        console.log('login success')
        setLoginDetail(false)
        localStorage.setItem('key', false)
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default UserLogin;
