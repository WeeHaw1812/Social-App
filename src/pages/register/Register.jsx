import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Hawsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Hawsocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="User" type="text" className="loginInput" />
            <input placeholder="Email" type="text" className="loginInput" />
            <input placeholder="Password" type="text" className="loginInput" />
            <input
              placeholder="Password Agian"
              type="text"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegister">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
