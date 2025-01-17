import React from "react";
import "./Login.css";

const AdminLoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src="https://logotyp.us/file/sltmobitel.svg"
          alt="SLT Mobitel Logo"
          className="login-logo"
        />

        {/* Error Message */}
        {/* <p th:text="${error}" className="error-message"></p> */}
        <p className="login-error-message"></p>

        {/* Login Form */}
        <form action="/login_admin" method="post">
          <div className="login-form-group">
            <input
              type="text"
              id="adminId"
              name="adminId"
              className="login-form-control"
              placeholder="Admin ID"
              required
            />
          </div>
          <div className="login-form-group">
            <input
              type="password"
              id="password"
              name="password"
              className="login-form-control"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <a href="/registeradmin" className="register-link">
            REGISTER HERE
          </a>
        </p>
        
      </div>
    </div>
  );
};

export default AdminLoginForm;
