import React from "react";
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      {
        username: username.current.value,
        email: email.current.value,
        phone: phone.current.value,
      },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <h1>Login into Arnowa</h1>
      <form className="loginBox">
        <input
          placeholder="userame"
          type="text"
          required
          minLength="3"
          className="loginInput"
          ref={username}
        />
        <input
          placeholder="email"
          type="email"
          required
          className="loginInput"
          ref={email}
        />
        <input
          placeholder="Phone Number"
          type="number"
          required
          minLength="10"
          className="loginInput"
          ref={phone}
        />
        <button className="loginButton" type="submit" onClick={handleClick}>
          login
        </button>
      </form>
    </div>
  );
}
