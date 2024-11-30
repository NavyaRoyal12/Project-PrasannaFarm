import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Assuming you have some styling for the HomePage

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the token in localStorage
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
      // If no token found, redirect to login/register page
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to PrasannaFarm!</h1>
        <p>Explore fresh and organic fruits and vegetables directly from our farm to your doorstep.</p>
      </header>

      <section className="home-content">
        <div className="home-section">
          <h2>Our Products</h2>
          <p>Discover a wide variety of farm-fresh fruits and vegetables.</p>
          <button onClick={() => navigate('/products')}>Explore Products</button>
        </div>

        <div className="home-section">
          <h2>About Us</h2>
          <p>Learn more about PrasannaFarm and our commitment to quality and freshness.</p>
          <button onClick={() => navigate('/about')}>Learn More</button>
        </div>

        <div className="home-section">
          <h2>Contact Us</h2>
          <p>Have questions? We're here to help!</p>
          <button onClick={() => navigate('/contact')}>Get in Touch</button>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 PrasannaFarm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
