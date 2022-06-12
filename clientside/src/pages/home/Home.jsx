import React from "react";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const { user, dispatch } = useContext(AuthContext);
  const desc = useRef();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const submitDetail = (e) => {
    e.preventDefault();
    const updateDesc = {
      desc: desc.current.value,
    };
    console.log(updateDesc);
    try {
      handleLogout();
    } catch (err) {
      console.log(err);
    }
  };

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    var timer;
    timer = setInterval(() => {
      setSeconds(seconds + 5);
      if (seconds > 50) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 10) {
        handleLogout();
      }
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <>
      <div className="Navbar">
        <h1>{user.username}</h1>
        <div className="timer">
          <p>will auto logout in 10 minutes</p>
          <p>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
        </div>
        <Link to="/login" onClick={handleLogout}>
          <button>Logut</button>
        </Link>
      </div>

      <form className="submitForm">
        <input
          placeholder="desc"
          type="text"
          minLength="3"
          className="descInput"
          ref={desc}
        />
        <button className="submitButton" onSubmit={submitDetail}>
          Submit
        </button>
      </form>
    </>
  );
}
