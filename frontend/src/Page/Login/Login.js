import React, { useRef, useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const nameInpt = useRef();
  const emailInpt = useRef();
  const passwordInpt = useRef();
  const submitBtn = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    nameInpt.current.focus();
  }, []);

  const submit = () => {
    const name = nameInpt.current.value.trim();
    const email = emailInpt.current.value.trim();
    const password = passwordInpt.current.value.trim();

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Password validation
    if (password.length < 4) {
      setError("Password must be at least 4 characters long");
      return;
    }

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email");
      return;
    }

    // If all fields are valid, proceed with submission
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/W");
  };

  return (
    <div className="Login">
      <Nav />
      <div className="LoginForm">
        <div className="LoginFormInput">
          <h1>Login</h1>
          <input
            ref={nameInpt}
            placeholder="Enter name"
            type="text"
            onKeyUp={(e) => {
              if (e.key === "Tab" || (e.key === "Enter" && !e.shiftKey)) {
                passwordInpt.current.focus();
              }
            }}
          />
          <input
            ref={passwordInpt}
            placeholder="Enter Password"
            onKeyUp={(e) => {
              if (e.key === "Tab" || (e.key === "Enter" && !e.shiftKey)) {
                emailInpt.current.focus();
              }
            }}
            type="password"
          />
          <input
            ref={emailInpt}
            placeholder="Enter Email"
            onKeyUp={(e) => {
              if (e.key === "Tab" || (e.key === "Enter" && !e.shiftKey)) {
                submitBtn.current.focus();
              }
            }}
            type="email"
          />
          <button ref={submitBtn} onClick={submit}>
            Submit
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
