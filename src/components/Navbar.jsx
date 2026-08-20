import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
} from "react-bootstrap";

import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import iafLogo from "../assets/Indian_Air_Force-Logo.wine.png";

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active-nav" : "";
  };

  return (
    <BootstrapNavbar
      expand="lg"
      className="iaf-navbar"
    >
      <Container fluid>

        {/* BRAND */}
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="iaf-brand"
        >

          <div className="brand-icon">
            <img
              src={iafLogo}
              alt="Indian Air Force Logo"
            />
          </div>

          <div className="brand-text">
            <strong>
              IAF INVENTORY
            </strong>

            <span>
              MANAGEMENT SYSTEM
            </span>
          </div>

        </BootstrapNavbar.Brand>

        {/* MOBILE TOGGLE */}
        <BootstrapNavbar.Toggle
          aria-controls="iaf-navbar"
        />

        <BootstrapNavbar.Collapse
          id="iaf-navbar"
        >

          {/* NAVIGATION */}
          <Nav className="mx-auto iaf-nav">

            <Nav.Link
              as={Link}
              to="/"
              className={isActive("/")}
            >
              HOME
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/dashboard"
              className={isActive("/dashboard")}
            >
              DASHBOARD
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/fighters"
              className={isActive("/fighters")}
            >
              FIGHTERS
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/future"
              className={isActive("/future")}
            >
              FUTURE PLATFORMS
            </Nav.Link>

            <Nav.Link href="#">
              MAINTENANCE
            </Nav.Link>

            <Nav.Link href="#">
              REPORTS
            </Nav.Link>

            <Nav.Link href="#">
              ABOUT
            </Nav.Link>

          </Nav>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">

            <div className="notification">
              <FaBell />
              <span>3</span>
            </div>

            <FaUserCircle className="profile-icon" />

          </div>

        </BootstrapNavbar.Collapse>

      </Container>
    </BootstrapNavbar>
  );
}

export default Navigation;