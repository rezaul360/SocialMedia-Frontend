import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>BD Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <Login />
    </div>
  );
};
function Login() {
  return (
    <div className="a-right">
      <form action="" className="InfoForm AuthForm">
        <h3>Login</h3>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
        </div>
        <button className="Button infoButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
function Signup() {
  return (
    <div className="a-right">
      <form action="" className="InfoForm AuthForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="InfoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="InfoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="InfoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="Button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
