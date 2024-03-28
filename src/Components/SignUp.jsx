import React, { useState } from "react";
import "./signup.css";
import CoverImage from "../assets/Registration/ttci.png";
import Axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4001/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="main-Container">
        <div className="cover-image container12">
          <img src={CoverImage} alt="" />
        </div>
        <div className="signup container12">
          <h1 className="Heading-sign-up">Create an Account</h1>
          <p>Please enter your details</p>

          <form className="signup-form" onSubmit={handleSubmit} action="">
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Set Password"
                onChange={(e) => {
                  setPasssword(e.target.value);
                }}
              />
            </div>

            <div className="btn">
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
