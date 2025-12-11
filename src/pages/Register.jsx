// src/pages/Register.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form)).then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <br /><br />

        <input
          placeholder="Last Name"
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <br /><br />

        <input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <br /><br />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register; // ✅ MUST HAVE DEFAULT EXPORT
