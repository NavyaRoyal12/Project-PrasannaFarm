// src/components/LoginUser.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginUser.css'; // Import login-specific styles

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock validation for demo purpose
    if (email === 'test@example.com' && password === 'password') {
      // Redirect to home page on successful login
      navigate('/home'); 
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleLogin} aria-label="Login Form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password input"
          required
        />
        <button type="submit" aria-label="Login Button">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => navigate('/register')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Register here</span></p>
    </div>
  );
};
const handleLogin = async (e) => {
    e.preventDefault();
    // Mock validation for demo purpose
    if (email === 'test@example.com' && password === 'password') {
        onSuccess(); // Call onSuccess on successful login
        navigate('/home'); // Redirect to home page after successful login
    } else {
        setErrorMessage('Invalid email or password'); // Set error message
    }
};


export default LoginUser;
