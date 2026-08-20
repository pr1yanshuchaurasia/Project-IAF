import { Container, Form, Button, Card } from "react-bootstrap";

function Signup() {
  return (
    <div className="py-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">

            <Card className="shadow border-0">
              <Card.Body className="p-4">

                <h2 className="text-center fw-bold mb-2">
                  Create Account
                </h2>

                <p className="text-center text-muted mb-4">
                  IAF Inventory Management System
                </p>

                <Form>

                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create a password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm your password"
                    />
                  </Form.Group>

                  <Button
                    variant="dark"
                    type="submit"
                    className="w-100"
                  >
                    Create Account
                  </Button>

                </Form>

              </Card.Body>
            </Card>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;