import React, { useState } from "react";
import "./Registration.css";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    adminId: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Clear errors and log form submission
    setError("");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="registraton-container">
      <div className="registraton-card">
        <img
          src="https://logotyp.us/file/sltmobitel.svg"
          alt="SLT Mobitel Logo"
          className="registraton-logo"
        />
        <h2>REGISTRATION</h2>

        {/* Error message display */}
        {error && <p className="registraton-error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="registraton-form-group">
            <label htmlFor="adminId">Admin ID:</label>
            <input
              type="text"
              id="adminId"
              name="adminId"
              className="registraton-form-control"
              placeholder="Admin ID"
              value={formData.adminId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registraton-form-group">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="registraton-form-control"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registraton-form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="registraton-form-control"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registraton-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="registraton-form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registraton-form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="registraton-form-control"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="registraton-btn">
            REGISTER
          </button>
        </form>

        <p className="registraton-login-text">
          Already have an account?{" "}
          <a href="/loginadmin" className="registraton-login-link">
            LOGIN HERE
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminRegistration;
