import { Container, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container className="mt-5">

      <h2>Login</h2>

      <Form>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button>Login</Button>

      </Form>

    </Container>
  );
}

export default Login;