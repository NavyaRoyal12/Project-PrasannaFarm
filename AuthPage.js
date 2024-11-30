// src/components/AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', mobile: '', password: '' });
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState(''); // For displaying messages
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setOtpSent(false); // Reset OTP state when toggling forms
    setMessage(''); // Clear message when toggling forms
  };

  const handleForgotPassword = () => {
    // Logic to handle forgot password
    alert("Forgot Password functionality not implemented yet.");
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', { email: user.email, password: user.password });
      if (response.status === 200) {
        navigate('/home'); // Navigate to home on successful login
      }
    } catch (error) {
      setMessage('Invalid email or password');
      console.error(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/generateOtp', { email: user.email });
      if (response.status === 200) {
        setOtpSent(true);
        setMessage('OTP sent to your email');
      }
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
      console.error(error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/verifyOtpAndSaveUser', { ...user, otp });
      if (response.status === 200) {
        setMessage('OTP verified and user registered');
        navigate('/home'); // Navigate to home after successful registration
      }
    } catch (error) {
      setMessage('Invalid OTP or verification failed');
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-header">
        <h1>{isLogin ? "Welcome to PrasannaFarm" : "Create Account"}</h1>
        <p>{isLogin ? "Sign In to your account" : "Join us today!"}</p>
      </div>

      {message && <p>{message}</p>}

      {isLogin ? (
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <input type="email" name="email" placeholder="E-mail Address" required onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleInputChange} />
          <button type="submit">SIGN IN</button>
          <p className="forgot-password">
            <button
              onClick={handleForgotPassword}
              style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            >
              Forgot your Password?
            </button>
          </p>
          <p className="toggle-form">
            Don’t have an account? <span onClick={toggleForm}>Create</span>
          </p>
        </form>
      ) : otpSent ? (
        <form className="auth-form" onSubmit={handleOtpSubmit}>
          <input type="text" name="otp" placeholder="Enter OTP" required onChange={(e) => setOtp(e.target.value)} />
          <button type="submit">VERIFY OTP</button>
          <p className="toggle-form">
            <span onClick={() => setOtpSent(true)}>Resend OTP</span>
          </p>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleRegisterSubmit}>
          <input type="text" name="firstName" placeholder="First Name*" required onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Last Name*" required onChange={handleInputChange} />
          <input type="email" name="email" placeholder="E-mail Address" required onChange={handleInputChange} />
          <input type="tel" name="mobile" placeholder="Mobile Number" required onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password*" required onChange={handleInputChange} />
          <button type="submit">SEND OTP</button>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
