import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>

        <Navbar.Brand as={Link} to="/">
          <strong>IAF</strong> INVENTORY
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/fighters">
              Fighters
            </Nav.Link>

            <Nav.Link as={Link} to="/future">
              Future Platforms
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;