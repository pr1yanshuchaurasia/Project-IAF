import { Container, Row, Col } from "react-bootstrap";
import FighterCard from "../components/FighterCard";

const fighters = [
  {
    name: "RAFALE",
    manufacturer: "Dassault Aviation",
    generation: "4.5 GENERATION",
    speed: "1,912 km/h",
    range: "3,700 km",
    engine: "2 × SNECMA M88",
    crew: "1 / 2",
    role: "Multirole Fighter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Dassault_Rafale_B_of_the_French_Air_and_Space_Force.jpg",
  },

  {
    name: "SU-30MKI",
    manufacturer: "Sukhoi / HAL",
    generation: "4++ GENERATION",
    speed: "2,120 km/h",
    range: "3,000 km",
    engine: "2 × AL-31FP",
    crew: "2",
    role: "Air Superiority / Multirole",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Sukhoi_Su-30MKI.jpg",
  },

  {
    name: "TEJAS MK1A",
    manufacturer: "HAL",
    generation: "4.5 GENERATION",
    speed: "2,205 km/h",
    range: "3,000+ km",
    engine: "1 × F404-IN20",
    crew: "1",
    role: "Multirole Fighter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tejas_LCA_Tejas.jpg",
  },

  {
    name: "MIRAGE 2000",
    manufacturer: "Dassault Aviation",
    generation: "4 GENERATION",
    speed: "2,336 km/h",
    range: "1,550 km",
    engine: "1 × SNECMA M53",
    crew: "1 / 2",
    role: "Multirole Fighter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mirage_2000C_in_flight.jpg",
  },

  {
    name: "SEPECAT JAGUAR",
    manufacturer: "SEPECAT / HAL",
    generation: "4 GENERATION",
    speed: "1,699 km/h",
    range: "3,500+ km",
    engine: "2 × Adour Mk.804",
    crew: "1 / 2",
    role: "Deep Penetration / Strike",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Indian_Air_Force_Jaguar.jpg",
  },

  {
    name: "MIKOYAN MiG-29",
    manufacturer: "Mikoyan",
    generation: "4 GENERATION",
    speed: "2,400 km/h",
    range: "1,430 km",
    engine: "2 × Klimov RD-33",
    crew: "1 / 2",
    role: "Air Superiority / Multirole",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mikoyan_MiG-29_in_flight.jpg",
  },
];

function Fighters() {
  return (
    <main className="fighters-page">

      {/* HERO */}
      <section className="fighter-hero">

        <div className="fighter-hero-overlay"></div>

        <Container className="fighter-hero-content">

          <div className="hero-label">
            <span></span>
            INDIAN AIR FORCE
          </div>

          <h1>FIGHTER PLATFORMS</h1>

          <p>
            Explore the fighter aircraft platforms currently
            represented in the inventory management system.
          </p>

        </Container>

      </section>


      {/* AIRCRAFT GRID */}
      <section className="fighter-grid-section">

        <Container>

          <Row className="g-4">

            {fighters.map((fighter) => (
              <Col
                key={fighter.name}
                xs={12}
                sm={12}
                md={6}
                lg={4}
              >
                <FighterCard fighter={fighter} />
              </Col>
            ))}

          </Row>

        </Container>

      </section>

    </main>
  );
}

export default Fighters;