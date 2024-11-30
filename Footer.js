import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>PrasannaFarm provides fresh and organic fruits and vegetables directly from the farm to your doorstep.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@prasannafarm.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Farm Street, Green City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 PrasannaFarm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
