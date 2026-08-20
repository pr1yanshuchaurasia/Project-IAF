import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const futureAircraft = [
  {
    name: "AMCA",
    fullName: "Advanced Medium Combat Aircraft",
    generation: "5th Generation",
    role: "Multirole Stealth Fighter",
    status: "Future Induction",
  },
  {
    name: "Tejas Mk2",
    fullName: "Medium Weight Fighter",
    generation: "4.5 Generation",
    role: "Multirole Fighter",
    status: "Under Development",
  },
  {
    name: "TEDBF",
    fullName: "Twin Engine Deck Based Fighter",
    generation: "4.5 Generation",
    role: "Carrier-Based Fighter",
    status: "Future Platform",
  },
];

function FutureAircraft() {
  return (
    <div className="future-page">
      <Container className="py-5">

        <div className="text-center mb-5">
          <Badge bg="warning" text="dark" className="mb-3">
            FUTURE INDUCTION
          </Badge>

          <h1 className="display-4 fw-bold">
            Future Fighter Platforms
          </h1>

          <p className="text-secondary">
            Next-generation platforms planned for the Indian Air Force
          </p>
        </div>

        <Row className="g-4">
          {futureAircraft.map((aircraft) => (
            <Col lg={4} md={6} key={aircraft.name}>
              <Card className="h-100 shadow-sm border-0">

                <Card.Body className="p-4">

                  <h2 className="fw-bold">
                    {aircraft.name}
                  </h2>

                  <p className="text-secondary">
                    {aircraft.fullName}
                  </p>

                  <hr />

                  <p>
                    <strong>Generation:</strong>{" "}
                    {aircraft.generation}
                  </p>

                  <p>
                    <strong>Role:</strong>{" "}
                    {aircraft.role}
                  </p>

                  <Badge bg="dark">
                    {aircraft.status}
                  </Badge>

                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default FutureAircraft;