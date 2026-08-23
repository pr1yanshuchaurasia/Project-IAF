import { Container, Row, Col } from "react-bootstrap";
import FighterCard from "../components/FighterCard";
import "./Fighters.css";

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
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Rafale_-_RIAT_2009_%283751416421%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
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
      "https://vajiramias.sgp1.cdn.digitaloceanspaces.com/wp/current-affairs/2025/04/su_30mki_fighter_jet.webp?v=2",
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
      "https://th-i.thgim.com/public/incoming/t7pitn/article69995560.ece/alternates/LANDSCAPE_1200/_DSC3525.JPG",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_5x2DPdyvlN9zL7GAGMveakpUOzGUH0oxGRkEdyWRSy1-tsCkCisbBw&s=10",
  },

  {
    name: "SEPECAT JAGUAR",
    manufacturer: "SEPECAT / HAL",
    generation: "3 GENERATION",
    speed: "1,699 km/h",
    range: "3,500+ km",
    engine: "2 × Adour Mk.804",
    crew: "1 / 2",
    role: "Deep Penetration / Strike",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGxFSMxEw3-r6DcuctOtVYpkVSxm2pbahGwIs_ez655BeNtRb-pNRyzmX&s=10",
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
      "https://i0.wp.com/iadnews.in/wp-content/uploads/2024/05/12mig-29.jpg?fit=1200%2C799&ssl=1",
  },
];

function Fighters() {
  return (
    <main className="fighters-page">

      {/* ============================= */}
      {/* HERO SECTION */}
      {/* ============================= */}

      <section className="fighter-hero">

        <div className="fighter-hero-overlay"></div>

        <div className="fighter-hero-grid"></div>

        <Container className="fighter-hero-content">

          <div className="hero-label">
            <span></span>
            INDIAN AIR FORCE
          </div>

          <h1>
            FIGHTER
            <br />
            <strong>PLATFORMS</strong>
          </h1>

          <p>
            Explore the Indian Air Force fighter platforms
            represented across the inventory management system,
            featuring key specifications, operational roles,
            and platform capabilities.
          </p>

          <div className="hero-divider">
            <span></span>
            <small>IAF INVENTORY MANAGEMENT SYSTEM</small>
          </div>

        </Container>

      </section>


      {/* ============================= */}
      {/* AIRCRAFT SECTION */}
      {/* ============================= */}

      <section className="fighter-grid-section">

        <Container>

          <div className="fighter-section-heading">

            <div>
              <span className="section-kicker">
                AIRCRAFT INVENTORY
              </span>

              <h2>
                Operational Fighter Fleet
              </h2>
            </div>

            <p>
              A curated overview of fighter platforms
              integrated into the inventory ecosystem.
            </p>

          </div>


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