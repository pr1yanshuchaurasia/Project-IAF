import { Container, Row, Col } from "react-bootstrap";
import FighterCard from "../components/FighterCard";

const fighters = [
  {
    name: "Rafale",
    generation: "4.5 Generation",
    speed: "1912 km/h",
    role: "Multirole Fighter",
  },
  {
    name: "Su-30MKI",
    generation: "4++ Generation",
    speed: "2120 km/h",
    role: "Air Superiority / Multirole",
  },
  {
    name: "Tejas Mk1A",
    generation: "4.5 Generation",
    speed: "2205 km/h",
    role: "Multirole Fighter",
  },
  {
    name: "Mirage 2000",
    generation: "4 Generation",
    speed: "2336 km/h",
    role: "Multirole Fighter",
  },
];

function Fighters() {
  return (
    <div className="fighters-page">

      {/* Header */}
      <section className="fighters-header">
        <Container>
          <div className="text-center">
            <p className="section-label">INDIAN AIR FORCE</p>

            <h1>Fighter Platforms</h1>

            <p>
              Explore the fighter aircraft platforms currently
              represented in the inventory management system.
            </p>
          </div>
        </Container>
      </section>

      {/* Fighter Cards */}
      <Container className="py-5">

        <Row className="g-4">

          {fighters.map((fighter) => (
            <Col
              key={fighter.name}
              lg={3}
              md={6}
              sm={12}
            >
              <FighterCard fighter={fighter} />
            </Col>
          ))}

        </Row>

      </Container>

    </div>
  );
}

export default Fighters;