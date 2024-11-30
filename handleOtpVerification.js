const handleOtpVerification = async () => {
    const data = {
        email,
        otp,
        userName: username,
        phoneNumber,
        password,
        address,
    };

    try {
        const response = await axios.post('http://localhost:8080/users/verifyOtpAndSaveUser', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        console.log(response.data); // Log the response to check its content

        setMessage(response.data);

        // Check for specific success message to redirect
        if (response.data === "OTP Verified Successfully") {
            navigate('/home'); // Redirect to home page after successful OTP verification
        } else {
            setMessage("OTP verification failed or unexpected response.");
        }
    } catch (error) {
        console.error('Error during OTP verification:', error);
        setMessage(error.response?.data || "An error occurred during verification");
    }
};
