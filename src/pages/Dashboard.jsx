import { Card, Row, Col, Container } from "react-bootstrap";

function Dashboard() {
  return (
    <Container className="mt-5">

      <Row>

        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Aircraft Inventory</h4>
              <h2>635</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Weapons Inventory</h4>
              <h2>1520</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Maintenance Status</h4>
              <h2>87%</h2>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Dashboard;