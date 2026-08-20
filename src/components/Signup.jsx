import { useState } from "react";

import {
  Container,
  Form,
  Button,
} from "react-bootstrap";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import iafLogo from "../assets/Indian_Air_Force-Logo.wine.png";


function Signup() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);


  return (

    <div className="signup-page">

      <Container fluid>

        <div className="signup-wrapper">

          {/* ================================= */}
          {/* LEFT PANEL */}
          {/* ================================= */}

          <div className="signup-info">

            <div className="signup-info-content">

              {/* Logo */}

              <div className="signup-logo">

                <img
                  src={iafLogo}
                  alt="Indian Air Force Logo"
                />

              </div>


              <div className="signup-label">
                INDIAN AIR FORCE
              </div>


              <h1>
                IAF INVENTORY
                <br />
                MANAGEMENT
              </h1>


              <p>
                Secure access to the centralized
                inventory management platform
                for fighter platforms, assets,
                maintenance and operational data.
              </p>


              {/* Security Features */}

              <div className="signup-features">

                <div className="signup-feature">

                  <div className="feature-icon">
                    <FaShieldAlt />
                  </div>

                  <div>
                    <strong>
                      Secure Access
                    </strong>

                    <span>
                      Protected user authentication
                    </span>
                  </div>

                </div>


                <div className="signup-feature">

                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <strong>
                      Centralized Management
                    </strong>

                    <span>
                      Manage inventory from one platform
                    </span>
                  </div>

                </div>

              </div>

            </div>

            <div className="signup-info-footer">
              IAF INVENTORY MANAGEMENT SYSTEM
            </div>

          </div>


          {/* ================================= */}
          {/* RIGHT FORM */}
          {/* ================================= */}

          <div className="signup-form-section">

            <div className="signup-form-container">

              <div className="signup-form-header">

                <span>
                  CREATE ACCOUNT
                </span>

                <h2>
                  Register Your Account
                </h2>

                <p>
                  Enter your details to create
                  your secure IAF account.
                </p>

              </div>


              <Form>

                {/* Full Name */}

                <Form.Group className="signup-field">

                  <Form.Label>
                    FULL NAME
                  </Form.Label>

                  <div className="input-wrapper">

                    <FaUser />

                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                    />

                  </div>

                </Form.Group>


                {/* Email */}

                <Form.Group className="signup-field">

                  <Form.Label>
                    EMAIL ADDRESS
                  </Form.Label>

                  <div className="input-wrapper">

                    <FaEnvelope />

                    <Form.Control
                      type="email"
                      placeholder="Enter your official email"
                    />

                  </div>

                </Form.Group>


                {/* Password */}

                <Form.Group className="signup-field">

                  <Form.Label>
                    PASSWORD
                  </Form.Label>

                  <div className="input-wrapper">

                    <FaLock />

                    <Form.Control
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Create a secure password"
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >

                      {showPassword
                        ? <FaEyeSlash />
                        : <FaEye />
                      }

                    </button>

                  </div>

                </Form.Group>


                {/* Confirm Password */}

                <Form.Group className="signup-field">

                  <Form.Label>
                    CONFIRM PASSWORD
                  </Form.Label>

                  <div className="input-wrapper">

                    <FaLock />

                    <Form.Control
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                    >

                      {showConfirmPassword
                        ? <FaEyeSlash />
                        : <FaEye />
                      }

                    </button>

                  </div>

                </Form.Group>


                {/* Terms */}

                <Form.Check
                  type="checkbox"
                  className="signup-terms"
                  label={
                    <>
                      I agree to the
                      <span>
                        {" "}security and access policy
                      </span>
                    </>
                  }
                />


                {/* Button */}

                <Button
                  type="submit"
                  className="signup-button"
                >

                  CREATE ACCOUNT

                </Button>

              </Form>


              {/* Login */}

              <div className="login-link">

                Already have an account?

                <Link to="/login">
                  Login here
                </Link>

              </div>


              {/* Security */}

              <div className="secure-note">

                <FaShieldAlt />

                <span>
                  Your information is protected
                  with secure authentication.
                </span>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </div>
  );
}


export default Signup;