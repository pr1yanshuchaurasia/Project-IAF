import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import iafLogo from "../assets/Indian_Air_Force-Logo.wine.png";
import '../styles/Login.css';


function Login() {
  return (
    <div className="auth-page">
      <Container>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <Card className="auth-card">
              <Card.Body>

                {/* Logo */}
                <div className="auth-logo">
                  <img
                    src={iafLogo}
                    alt="Indian Air Force Logo"
                  />
                </div>

                {/* Heading */}
                <h2>Welcome Back</h2>

                <p className="auth-subtitle">
                  Sign in to IAF Inventory Management System
                </p>

                {/* Login Form */}
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>

                  <Button
                    variant="dark"
                    type="submit"
                    className="auth-button"
                  >
                    Login
                  </Button>
                </Form>

                {/* Signup Link */}
                <div className="auth-footer">
                  Don't have an account?
                  <Link to="/signup">
                    Create Account
                  </Link>
                </div>

              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;