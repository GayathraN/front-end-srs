import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MainPage.css';

const MainPage = () => {
  useEffect(() => {
    // Script for booking message typing effect
    const bookingMessages = [
      { head: "Convenience of Booking", sub: "Book from home, no long lines!" },
      { head: "Security and Privacy", sub: "Your information is safe and secure!" },
      { head: "Guaranteed Seating", sub: "Your spot is secure upon booking!" },
      { head: "Time-Saving", sub: "Quick booking saves you precious time!" },
      { head: "Easy Modification", sub: "Change or cancel your reservation easily!" },
      { head: "Instant Confirmation", sub: "Get an instant receipt with all booking details." },
      { head: "User-Friendly Interface", sub: "Simplified steps guide your booking!" }
    ];

    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    const headElement = document.querySelector('#booking-text .head-msg');
    const subElement = document.querySelector('#booking-text .sub-msg');

    function typeMessage() {
      const { head, sub } = bookingMessages[currentMessageIndex];

      if (currentCharIndex < head.length) {
        headElement.innerHTML += head.charAt(currentCharIndex);
      } else if (currentCharIndex < head.length + sub.length) {
        subElement.innerHTML += sub.charAt(currentCharIndex - head.length);
      } else {
        setTimeout(clearMessage, 2000); // Pause before clearing the message
        return;
      }
      currentCharIndex++;
      setTimeout(typeMessage, 100); // Speed of typing effect
    }

    function clearMessage() {
      headElement.innerHTML = '';
      subElement.innerHTML = '';
      currentCharIndex = 0;
      currentMessageIndex = (currentMessageIndex + 1) % bookingMessages.length;
      setTimeout(typeMessage, 500); // Delay before next message
    }

    typeMessage();
  }, []); // Empty dependency array ensures this effect runs once after the component mounts

  return (
    <div className="main-page">
      <Header />
      <div className="container my-6">
        {/* Booking messages section */}
        <div className="booking-messages-container mb-4">
          <div className="booking-messages bg-light p-3">
            <div id="booking-text">
              <span className="head-msg"></span>
              <span className="sub-msg"></span>
            </div>
          </div>
        </div>

        {/* Card section */}
        <div className="card mx-auto shadow-lg p-4">
          <img
            src="https://logotyp.us/file/sltmobitel.svg"
            alt="SLTMobitel Logo"
            className="logo animate-fade mb-3"
          />
          <form>
            <button
              type="submit"
              className="btn btn-primary w-100 mb-3"
              formaction="/login_intern"
            >
              INTERN
            </button>
            <button
              type="submit"
              className="btn btn-secondary w-100"
              formaction="/login_admin"
            >
              ADMIN
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
