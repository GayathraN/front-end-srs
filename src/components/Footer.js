// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Section */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <a href="#">Privacy Policy</a> | 
            <a href="#">Terms of Use</a> | 
            <a href="#">General Terms & Conditions</a>
            <p>© 2024 Java Team 1 Application. All rights reserved.</p>
          </div>
          
          {/* Right Section */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <p>Join Us :</p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="social-icon"/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="Facebook" className="social-icon"/>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="Twitter" className="social-icon"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
