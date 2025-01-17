import React, { useState } from "react";
import "./Registration.css";

const RegistrationForm = ({ adminList }) => {
  const [formData, setFormData] = useState({
    internId: "",
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
    adminId: "",
    startDate: "",
    endDate: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [errorInternId, setErrorInternId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Auto-calculate endDate when startDate is changed
    if (name === "startDate") {
      const startDate = new Date(value);
      if (!isNaN(startDate.getTime())) {
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 6);

        const formattedEndDate = endDate.toISOString().split("T")[0];
        setFormData({ ...formData, startDate: value, endDate: formattedEndDate });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Submit form logic
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
        <p className="registraton-error-message"></p>

        <form onSubmit={handleSubmit}>
          <div className="registraton-form-group">
            <label htmlFor="internId">Intern ID:</label>
            <input
              type="text"
              id="internId"
              name="internId"
              className="registraton-form-control"
              placeholder="Intern ID"
              value={formData.internId}
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
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="registraton-form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registraton-form-group">
            <label htmlFor="contactnumber">Contact Number:</label>
            <input
              type="text"
              id="contactnumber"
              name="contactnumber"
              className="registraton-form-control"
              placeholder="Contact Number"
              pattern="\d{9}"
              maxLength="9"
              title="Please enter exactly 9 digits."
              value={formData.contactnumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registraton-form-group">
            <label htmlFor="adminId">Supervisor (Admin ID):</label>
            <select
              id="adminId"
              name="adminId"
              className="registraton-form-control"
              value={formData.adminId}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Admin
              </option>
              {/* {adminList.map((admin) => (
                <option key={admin.adminId} value={admin.adminId}>
                  {admin.adminId}
                </option>
              ))} */}
            </select>
          </div>

          <div className="registraton-form-group registraton-date-group">
            <div className="registraton-date-input">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="registraton-form-control-date"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="registraton-date-input">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="registraton-form-control-date"
                value={formData.endDate}
                readOnly
              />
            </div>
          </div>

          {/* Error message display */}
          <p className="error-message"></p>

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
          <a href="/loginintern" className="registraton-login-link">
            LOGIN HERE
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
