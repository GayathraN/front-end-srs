import React from "react";
import  "./Login.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src="https://logotyp.us/file/sltmobitel.svg" alt="SLT Mobitel Logo" className="login-logo" />

        {/* Error Message */}
        {/* <p th:text="${error}" className="error-message"></p> */}
        <p className="login-error-message"></p>

        {/* Login Form */}
        <form action="/login_intern" method="post">
          <div className="login-form-group">
            <input
              type="text"
              id="internId"
              name="internId"
              className="login-form-control"
              placeholder="Intern ID"
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

        <p className="register-text">Don't have an account? <a href="/registerintern" className="register-link">REGISTER HERE</a></p>


        <p className="separator">OR</p>

        <p className="continue-text">Continue with</p>

        {/* Social Login Buttons */}
        <div className="social-login">
          <form action="/oauth2/authorization/google" method="get">
            <button type="submit" className="btn-icon google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google Logo" className="icon" />
            </button>
          </form>

          <form action="/oauth2/authorization/facebook" method="get">
            <button type="submit" className="btn-icon facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/512px-Facebook_f_logo_%282019%29.svg.png"
                alt="Facebook Logo" className="icon" />
            </button>
          </form>
        </div>


      </div>
    </div>
  );
};

export default LoginForm;
