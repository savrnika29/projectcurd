import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form))
      .unwrap()
      .then(() => {
        // optionally navigate on success
        navigate('/products');
      })
      .catch(() => {
        // error is handled in slice; nothing extra needed here
      });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type='password'
          placeholder='password'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type='submit' disabled={loading}>
          {loading ? "loading..." : "Login"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {user && (
        <div style={{ marginTop: 12 }}>
          <strong>Signed in as:</strong> {user.username || user.firstName || 'User'}
        </div>
      )}
    </div>
  );
};

export default Login;
