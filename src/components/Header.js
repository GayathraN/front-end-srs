// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header class="bg-primary text-white py-3">
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center justify-content-md-start">
            
            <div class="col-12 col-md-auto text-center text-md-start">
                <div class="header-content">
                    <h3>Intern</h3>
                    <h3>Seat Reservation System</h3>
                </div>
            </div>
        </div>
    </div>
</header>

  );
};

export default Header;
