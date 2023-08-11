

import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Phnumber, setPhnumber] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");
  const navigate = useNavigate();

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const phoneNumberRegex = /^\d{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email, password, and phone number using regex
    if (!emailRegex.test(Email)) {
      alert("Invalid email address");
      return;
    }
    if (!passwordRegex.test(Password)) {
      alert(
        "Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one digit"
      );
      return;
    }
    if (!phoneNumberRegex.test(Phnumber)) {
      alert("Invalid phone number");
      return;
    }

    console.log(
      "name :",
      User,
      " email :",
      Email,
      " password :",
      Password,
      " phone :",
      Phnumber,
      "role:",
      Role
    );

    axios
      .post("http://localhost:5000/mangal/register", {
        Name: User,
        Email: Email,
        Password: Password,
        Phnumber: Phnumber,
        // "Role":Role
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhnumber(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <div className="input-box">
            <input
              type="password"
              placeholder="Enter Admin Code"
              onChange={(e) => setRole(e.target.value)}
            />
          </div> */}
          {/* <Link to="/login"> */}
            <button type="submit" className="btn">
              Welcome!!!
            </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
