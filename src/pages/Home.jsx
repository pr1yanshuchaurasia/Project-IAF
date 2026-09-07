import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaShieldAlt,
  FaPlane,
  FaTools,
  FaBoxes,
  FaSatelliteDish,
  FaCrosshairs,
  FaChartLine,
  FaDatabase,
  FaChevronRight,
} from "react-icons/fa";

import "../styles/Home.css";

import iafLogo from "../assets/Indian_Air_Force-Logo.wine.png";
import heroImage from "../assets/future-aircraft-hero.jpg";

function Home() {
  return (
    <main className="iaf-home">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
        className="iaf-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="iaf-hero-overlay"></div>
        <div className="iaf-hero-grid"></div>

        <Container className="iaf-hero-container">
          <Row className="align-items-center g-5">

            {/* HERO CONTENT */}
            <Col lg={8} xl={7}>
              <div className="iaf-hero-content">

                <div className="iaf-command-label">
                  <span className="command-dot"></span>
                  INDIAN AIR FORCE
                  <span className="command-line"></span>
                  DIGITAL COMMAND SYSTEM
                </div>

                <div className="iaf-hero-brand">
                  <img
                    src={iafLogo}
                    alt="Indian Air Force"
                  />

                  <div>
                    <span>BHARATIYA VAYU SENA</span>
                    <strong>
                      INVENTORY MANAGEMENT SYSTEM
                    </strong>
                  </div>
                </div>

                <h1>
                  AIR POWER
                  <span>MANAGEMENT</span>
                </h1>

                <p className="iaf-hero-description">
                  A unified digital platform for monitoring aircraft,
                  equipment, maintenance assets, logistics and future
                  aviation platforms across the air-power ecosystem.
                </p>

                {/* ACTION BUTTONS */}
                <div className="iaf-hero-actions">

                  <Button
                    as={Link}
                    to="/inventory"
                    className="iaf-primary-btn"
                  >
                    ACCESS INVENTORY
                    <FaArrowRight />
                  </Button>

                  <Button
                    as={Link}
                    to="/fighters"
                    className="iaf-secondary-btn"
                  >
                    EXPLORE PLATFORMS
                    <FaArrowRight />
                  </Button>

                </div>

                {/* SYSTEM STATUS */}
                <div className="iaf-hero-status">

                  <div>
                    <span className="status-dot"></span>
                    SYSTEM OPERATIONAL
                  </div>

                  <div>
                    <FaShieldAlt />
                    SECURE DEFENCE NETWORK
                  </div>

                  <div>
                    <FaDatabase />
                    REAL-TIME DATA
                  </div>

                </div>
              </div>
            </Col>

            {/* COMMAND PANEL */}
            <Col lg={4} xl={5}>
              <div className="iaf-command-panel">

                <div className="command-panel-header">
                  <span>COMMAND OVERVIEW</span>

                  <span className="live-status">
                    <i></i>
                    LIVE
                  </span>
                </div>

                <div className="command-panel-main">

                  <span className="panel-kicker">
                    AIR ASSET READINESS
                  </span>

                  <strong>98.7%</strong>

                  <div className="readiness-bar">
                    <span></span>
                  </div>

                  <small>
                    OPERATIONAL READINESS INDEX
                  </small>

                </div>

                <div className="command-panel-grid">

                  <div>
                    <FaPlane />
                    <strong>240+</strong>
                    <span>AIRCRAFT</span>
                  </div>

                  <div>
                    <FaTools />
                    <strong>86</strong>
                    <span>MAINTENANCE</span>
                  </div>

                  <div>
                    <FaBoxes />
                    <strong>1.8K+</strong>
                    <span>ASSETS</span>
                  </div>

                  <div>
                    <FaSatelliteDish />
                    <strong>24/7</strong>
                    <span>MONITORING</span>
                  </div>

                </div>

                <div className="command-panel-footer">
                  LAST SYSTEM SYNC
                  <strong>18:42:09 IST</strong>
                </div>

              </div>
            </Col>

          </Row>
        </Container>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="iaf-introduction">
        <Container>

          <div className="iaf-section-heading">

            <div>
              <span className="section-kicker">
                DIGITAL AIR COMMAND
              </span>

              <h2>
                One Platform.
                <br />
                <span>Complete Visibility.</span>
              </h2>
            </div>

            <p>
              Designed to provide a centralized operational view of
              aircraft platforms, inventory assets, maintenance status
              and strategic aviation capabilities.
            </p>

          </div>

          <Row className="g-4">

            {/* AIRCRAFT */}
            <Col md={6} lg={3}>
              <Card className="iaf-feature-card">

                <div className="feature-number">
                  01
                </div>

                <FaPlane className="feature-icon" />

                <h3>
                  Aircraft Fleet
                </h3>

                <p>
                  Monitor fighter aircraft, transport platforms,
                  helicopters and support assets from one interface.
                </p>

                <Link
                  to="/fighters"
                  className="feature-link"
                >
                  VIEW FLEET
                  <FaChevronRight />
                </Link>

              </Card>
            </Col>


            {/* INVENTORY */}
            <Col md={6} lg={3}>
              <Card className="iaf-feature-card">

                <div className="feature-number">
                  02
                </div>

                <FaBoxes className="feature-icon" />

                <h3>
                  Inventory Control
                </h3>

                <p>
                  Maintain centralized records of aviation equipment,
                  components, spares and mission-critical assets.
                </p>

                <Link
                  to="/inventory"
                  className="feature-link"
                >
                  VIEW INVENTORY
                  <FaChevronRight />
                </Link>

              </Card>
            </Col>


            {/* MAINTENANCE */}
            <Col md={6} lg={3}>
              <Card className="iaf-feature-card">

                <div className="feature-number">
                  03
                </div>

                <FaTools className="feature-icon" />

                <h3>
                  Maintenance
                </h3>

                <p>
                  Track maintenance cycles, service schedules,
                  aircraft availability and technical readiness.
                </p>

                <Link
                  to="/maintenance"
                  className="feature-link"
                >
                  MAINTENANCE DATA
                  <FaChevronRight />
                </Link>

              </Card>
            </Col>


            {/* ANALYTICS */}
            <Col md={6} lg={3}>
              <Card className="iaf-feature-card">

                <div className="feature-number">
                  04
                </div>

                <FaChartLine className="feature-icon" />

                <h3>
                  Analytics
                </h3>

                <p>
                  Transform inventory and operational data into
                  actionable readiness and performance insights.
                </p>

                <Link
                  to="/analytics"
                  className="feature-link"
                >
                  VIEW ANALYTICS
                  <FaChevronRight />
                </Link>

              </Card>
            </Col>

          </Row>
        </Container>
      </section>


      {/* =====================================================
          COMMAND STATISTICS
      ===================================================== */}
      <section className="iaf-statistics">
        <Container>

          <div className="statistics-header">

            <span className="section-kicker">
              OPERATIONAL OVERVIEW
            </span>

            <h2>
              MISSION READINESS
            </h2>

            <p>
              Strategic visibility across the aviation inventory
              management ecosystem.
            </p>

          </div>

          <Row className="g-0 iaf-stat-row">

            <Col xs={6} lg={3}>
              <div className="iaf-stat">
                <span>01</span>
                <strong>240+</strong>
                <small>AIRCRAFT PLATFORMS</small>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="iaf-stat">
                <span>02</span>
                <strong>1,800+</strong>
                <small>INVENTORY ASSETS</small>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="iaf-stat">
                <span>03</span>
                <strong>98.7%</strong>
                <small>READINESS INDEX</small>
              </div>
            </Col>

            <Col xs={6} lg={3}>
              <div className="iaf-stat">
                <span>04</span>
                <strong>24/7</strong>
                <small>SYSTEM MONITORING</small>
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      {/* =====================================================
          FUTURE AIR POWER
      ===================================================== */}
      <section className="iaf-future-section">
        <Container>

          <Row className="align-items-center g-5">

            {/* IMAGE */}
            <Col lg={6}>

              <div className="future-visual">

                <div className="future-image-frame">
                  <img
                    src={heroImage}
                    alt="Future Indian Air Force aircraft"
                  />
                </div>

                <div className="future-visual-overlay"></div>

                <div className="future-visual-label">
                  <span>FUTURE AIR POWER</span>
                  <strong>NEXT GENERATION</strong>
                </div>

                <div className="future-coordinates">
                  28°36'50"N
                  <br />
                  77°12'32"E
                </div>

              </div>

            </Col>


            {/* CONTENT */}
            <Col lg={6}>

              <div className="future-content">

                <span className="section-kicker">
                  NEXT GENERATION AIR POWER
                </span>

                <h2>
                  Preparing for the
                  <span>Future Battlefield</span>
                </h2>

                <p>
                  Explore next-generation aviation platforms and
                  emerging technologies shaping the future of
                  Indian air power.
                </p>

                <div className="future-points">

                  <div>
                    <FaCrosshairs />

                    <div>
                      <strong>
                        Advanced Combat Platforms
                      </strong>

                      <span>
                        Next-generation fighter and combat aircraft.
                      </span>
                    </div>
                  </div>


                  <div>
                    <FaSatelliteDish />

                    <div>
                      <strong>
                        Network-Centric Operations
                      </strong>

                      <span>
                        Integrated command, control and intelligence.
                      </span>
                    </div>
                  </div>


                  <div>
                    <FaChartLine />

                    <div>
                      <strong>
                        Technology Readiness
                      </strong>

                      <span>
                        Track development and future induction
                        programs.
                      </span>
                    </div>
                  </div>

                </div>

                <Button
                  as={Link}
                  to="/future-aircraft"
                  className="future-explore-btn"
                >
                  EXPLORE FUTURE PLATFORMS
                  <FaArrowRight />
                </Button>

              </div>

            </Col>

          </Row>
        </Container>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="iaf-final-cta">
        <Container>

          <div className="cta-content">

            <span className="section-kicker">
              INDIAN AIR FORCE DIGITAL INITIATIVE
            </span>

            <h2>
              AIR POWER.
              <span>
                PRECISION. READINESS.
              </span>
            </h2>

            <p>
              A unified digital approach to managing aviation assets,
              operational readiness and future capabilities.
            </p>

            <Button
              as={Link}
              to="/inventory"
              className="iaf-primary-btn"
            >
              ENTER COMMAND SYSTEM
              <FaArrowRight />
            </Button>

          </div>

        </Container>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="iaf-home-footer">

        <Container>

          <div className="footer-inner">

            <div className="footer-brand">

              <img
                src={iafLogo}
                alt="Indian Air Force Logo"
              />

              <div>
                <strong>
                  INDIAN AIR FORCE
                </strong>

                <span>
                  INVENTORY MANAGEMENT SYSTEM
                </span>
              </div>

            </div>

            <div className="footer-classification">
              DIGITAL DEFENCE PLATFORM
            </div>

          </div>

        </Container>

      </footer>

    </main>
  );
}

export default Home;