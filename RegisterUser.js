// src/components/RegisterUser.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterUser = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const data = {
            email,
            userName: username,
            phoneNumber,
            password,
            address,
        };

        try {
            const response = await axios.post('http://localhost:8080/users/register', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data); // Log the response
            setMessage(response.data);

            if (response.data === "Registration Successful") {
                await sendOTP(email); // Send OTP after successful registration
            } else {
                setMessage("Registration failed or unexpected response.");
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage(error.response?.data || "An error occurred during registration");
        }
    };

    const sendOTP = async (email) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/send-otp-email', { email });
            console.log('OTP sent:', response.data);
            setOtpSent(true); // Mark OTP as sent
            setMessage('OTP has been sent to your email.');
        } catch (error) {
            console.error('Error sending OTP:', error);
            setMessage("Error sending OTP. Please try again.");
        }
    };

    const verifyOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/verify-otp', { email, otp });
            console.log('OTP verification response:', response.data);
            if (response.data === "OTP verified successfully") {
                navigate('/home'); // Redirect to home page after successful verification
            } else {
                setMessage("OTP verification failed. Please try again.");
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setMessage("Error verifying OTP. Please try again.");
        }
    };

    return (
        <div>
            <h2>Register User</h2>
            <form onSubmit={handleRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
            
            {otpSent && (
                <div>
                    <h3>Verify OTP</h3>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
                    <button onClick={verifyOTP}>Verify OTP</button>
                </div>
            )}
            <button onClick={() => navigate('/home')}>Go to Home Page</button> {/* Home Page button */}
        </div>
    );
};

export default RegisterUser;
