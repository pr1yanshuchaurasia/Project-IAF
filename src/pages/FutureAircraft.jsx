import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Modal,
  ProgressBar,
} from "react-bootstrap";

import {
  FaTimes,
  FaPlane,
  FaRocket,
  FaShieldAlt,
  FaIndustry,
  FaCalendarAlt,
  FaCogs,
  FaUser,
  FaCrosshairs,
  FaArrowRight,
  FaClock,
  FaGlobe,
  FaBolt,
} from "react-icons/fa";

// import "../styles/FutureAircraft.css";

import iafLogo from "../assets/Indian_Air_Force-Logo.wine.png";

import amcaImage from "../assets/amca.jpg";
import tejasMk2Image from "../assets/tejasmk2.jpg";
import tedbfImage from "../assets/tedbf.jpg";


const futureAircraft = [
  {
    name: "AMCA",
    fullName: "Advanced Medium Combat Aircraft",

    generation: "5TH GENERATION",

    role: "MULTIROLE STEALTH FIGHTER",

    status: "FUTURE INDUCTION",

    statusType: "future",

    manufacturer: "Aeronautical Development Agency / HAL",

    developer: "Aeronautical Development Agency",

    expectedInduction: "Target: Early 2030s",

    developmentStatus: "Under Development",

    crew: "1",

    engine: "Twin-engine configuration",

    speed: "Supersonic",

    range: "Long Range",

    image: amcaImage,

    progress: 35,

    capabilities: [
      "Stealth / Low Observable Design",
      "Internal Weapons Carriage",
      "Advanced AESA Radar",
      "Sensor Fusion",
      "Network-Centric Operations",
    ],

    description:
      "India's planned fifth-generation stealth fighter platform designed for air superiority, strike and multirole missions.",
  },

  {
    name: "TEJAS MK2",
    fullName: "Medium Weight Fighter",

    generation: "4.5 GENERATION",

    role: "MULTIROLE FIGHTER",

    status: "UNDER DEVELOPMENT",

    statusType: "development",

    manufacturer: "Hindustan Aeronautics Limited",

    developer: "Aeronautical Development Agency / HAL",

    expectedInduction: "Target: Early 2030s",

    developmentStatus: "Under Development",

    crew: "1",

    engine: "GE F414 class",

    speed: "Supersonic",

    range: "Extended Range",

    image: tejasMk2Image,

    progress: 50,

    capabilities: [
      "AESA Radar",
      "Beyond Visual Range Combat",
      "Precision Strike",
      "Electronic Warfare",
      "Advanced Avionics",
    ],

    description:
      "A larger and more capable evolution of the Tejas family intended to provide increased range, payload and multirole capability.",
  },

  {
    name: "TEDBF",
    fullName: "Twin Engine Deck Based Fighter",

    generation: "4.5 GENERATION",

    role: "CARRIER-BASED FIGHTER",

    status: "FUTURE PLATFORM",

    statusType: "future",

    manufacturer: "Aeronautical Development Agency / HAL",

    developer: "Aeronautical Development Agency",

    expectedInduction: "Target: 2030s",

    developmentStatus: "Concept / Development",

    crew: "1 / 2 variants",

    engine: "Twin-engine configuration",

    speed: "Supersonic",

    range: "Carrier Operations",

    image: tedbfImage,

    progress: 25,

    capabilities: [
      "Carrier-Based Operations",
      "Twin-Engine Configuration",
      "Arrestor Hook System",
      "Folding Wings",
      "Multirole Combat Capability",
    ],

    description:
      "India's planned twin-engine carrier-based fighter designed for future naval aviation operations.",
  },
];


function FutureAircraft() {

  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const [showModal, setShowModal] = useState(false);


  const openSpecifications = (aircraft) => {
    setSelectedAircraft(aircraft);
    setShowModal(true);
  };


  const closeSpecifications = () => {
    setShowModal(false);
    setSelectedAircraft(null);
  };


  return (
    <div className="future-page">

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className="future-hero">

        <div className="future-hero-overlay"></div>

        <Container>

          <div className="future-hero-content">

            <div className="future-hero-badge">
              <span className="future-live-dot"></span>
              FUTURE AIRCRAFT PROGRAMME
            </div>

            <div className="future-brand">

              <img
                src={iafLogo}
                alt="Indian Air Force"
              />

              <div>
                <span>INDIAN AIR FORCE</span>
                <strong>FUTURE AIR COMBAT PLATFORM</strong>
              </div>

            </div>

            <h1>
              NEXT GENERATION
              <span> FIGHTER PLATFORMS</span>
            </h1>

            <p>
              Advanced combat aircraft programmes shaping
              India's future aerospace and air power capabilities.
            </p>

            <div className="hero-line"></div>

          </div>

        </Container>

      </section>


      {/* ===================================================== */}
      {/* PLATFORM INTRO */}
      {/* ===================================================== */}

      <section className="future-introduction">

        <Container>

          <div className="future-section-heading">

            <div>

              <span className="section-kicker">
                FUTURE FORCE STRUCTURE
              </span>

              <h2>
                Emerging Combat Platforms
              </h2>

            </div>

            <p>
              Explore India's next generation of indigenous
              fighter aircraft programmes.
            </p>

          </div>


          {/* ================================================= */}
          {/* AIRCRAFT CARDS */}
          {/* ================================================= */}

          <Row className="g-4">

            {futureAircraft.map((aircraft) => (

              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                key={aircraft.name}
              >

                <Card className="future-aircraft-card">

                  {/* AIRCRAFT IMAGE */}

                  <div className="future-aircraft-image">

                    <img
                      src={aircraft.image}
                      alt={aircraft.name}
                    />

                    <div className="future-image-overlay"></div>


                    <div className="aircraft-top-label">

                      <span>
                        FUTURE PLATFORM
                      </span>

                      <Badge
                        className={`future-status-badge ${aircraft.statusType}`}
                      >
                        {aircraft.status}
                      </Badge>

                    </div>


                    <div className="aircraft-image-title">

                      <span>
                        {aircraft.generation}
                      </span>

                      <h2>
                        {aircraft.name}
                      </h2>

                    </div>

                  </div>


                  {/* CARD BODY */}

                  <Card.Body className="future-card-body">

                    <div className="future-card-heading">

                      <div>

                        <span>
                          {aircraft.fullName}
                        </span>

                        <h3>
                          {aircraft.role}
                        </h3>

                      </div>

                      <FaPlane />

                    </div>


                    <p className="future-description">
                      {aircraft.description}
                    </p>


                    {/* QUICK INFORMATION */}

                    <div className="future-quick-info">

                      <div>

                        <FaCalendarAlt />

                        <span>
                          EXPECTED INDUCTION
                        </span>

                        <strong>
                          {aircraft.expectedInduction}
                        </strong>

                      </div>


                      <div>

                        <FaIndustry />

                        <span>
                          DEVELOPER
                        </span>

                        <strong>
                          {aircraft.developer}
                        </strong>

                      </div>

                    </div>


                    {/* DEVELOPMENT PROGRESS */}

                    <div className="development-progress">

                      <div className="progress-header">

                        <span>
                          DEVELOPMENT STATUS
                        </span>

                        <strong>
                          {aircraft.progress}%
                        </strong>

                      </div>

                      <ProgressBar
                        now={aircraft.progress}
                      />

                    </div>


                    {/* BUTTON */}

                    <Button
                      className="future-spec-button"
                      onClick={() =>
                        openSpecifications(aircraft)
                      }
                    >

                      VIEW FULL SPECIFICATIONS

                      <FaArrowRight />

                    </Button>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </section>


      {/* ===================================================== */}
      {/* FUTURE CAPABILITY STRIP */}
      {/* ===================================================== */}

      <section className="future-capability-section">

        <Container>

          <div className="future-capability-header">

            <span>
              FUTURE AIR POWER
            </span>

            <h2>
              Building The Next Generation
            </h2>

          </div>


          <Row className="g-4">

            <Col lg={3} md={6}>

              <div className="capability-card">

                <FaShieldAlt />

                <strong>
                  STEALTH
                </strong>

                <span>
                  Low observable combat platforms
                </span>

              </div>

            </Col>


            <Col lg={3} md={6}>

              <div className="capability-card">

                <FaCrosshairs />

                <strong>
                  PRECISION
                </strong>

                <span>
                  Advanced sensors and precision strike
                </span>

              </div>

            </Col>


            <Col lg={3} md={6}>

              <div className="capability-card">

                <FaGlobe />

                <strong>
                  NETWORKED
                </strong>

                <span>
                  Integrated network-centric operations
                </span>

              </div>

            </Col>


            <Col lg={3} md={6}>

              <div className="capability-card">

                <FaRocket />

                <strong>
                  INDIGENOUS
                </strong>

                <span>
                  Next-generation domestic aerospace capability
                </span>

              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* ===================================================== */}
      {/* SPECIFICATION MODAL */}
      {/* ===================================================== */}

      <Modal
        show={showModal}
        onHide={closeSpecifications}
        centered
        size="xl"
        className="future-aircraft-modal"
      >

        {selectedAircraft && (

          <div className="future-modal-container">

            {/* ================================================= */}
            {/* MODAL HEADER */}
            {/* ================================================= */}

            <div className="future-modal-header">

              <div className="future-modal-brand">

                <div className="future-modal-logo">

                  <img
                    src={iafLogo}
                    alt="Indian Air Force"
                  />

                </div>

                <div>

                  <span>
                    INDIAN AIR FORCE
                  </span>

                  <strong>
                    FUTURE AIRCRAFT DATABASE
                  </strong>

                </div>

              </div>


              <div className="future-modal-title">

                <span>
                  FUTURE PLATFORM / {selectedAircraft.generation}
                </span>

                <h2>
                  {selectedAircraft.name}
                </h2>

              </div>


              <button
                className="future-modal-close"
                onClick={closeSpecifications}
              >
                <FaTimes />
              </button>

            </div>


            {/* ================================================= */}
            {/* MODAL BODY */}
            {/* ================================================= */}

            <div className="future-modal-body">


              {/* ================================================= */}
              {/* 3D / VISUAL SECTION */}
              {/* ================================================= */}

              <section className="future-model-section">

                <div className="future-model-heading">

                  <div className="future-heading-icon">
                    <FaPlane />
                  </div>

                  <div>

                    <span>
                      FUTURE PLATFORM VISUALIZATION
                    </span>

                    <h3>
                      {selectedAircraft.name} / 3D VIEW
                    </h3>

                  </div>

                  <div className="future-model-status">

                    <span></span>

                    PLATFORM MODEL

                  </div>

                </div>


                <div className="future-model-viewer">

                  <div className="future-model-placeholder">

                    <img
                      src={selectedAircraft.image}
                      alt={selectedAircraft.name}
                    />

                    <div className="future-model-overlay">

                      <FaPlane />

                      <strong>
                        {selectedAircraft.name}
                      </strong>

                      <span>
                        Interactive 3D model
                        integration point
                      </span>

                      <small>
                        MODEL VISUALIZATION
                      </small>

                    </div>

                  </div>

                </div>


                <div className="future-model-instructions">

                  <span>
                    <FaCrosshairs />
                    DRAG TO ROTATE
                  </span>

                  <span>•</span>

                  <span>
                    SCROLL TO ZOOM
                  </span>

                  <span>•</span>

                  <span>
                    EXPLORE PLATFORM
                  </span>

                </div>

              </section>


              {/* ================================================= */}
              {/* PROGRAMME IDENTIFICATION */}
              {/* ================================================= */}

              <section className="future-modal-section">

                <div className="future-modal-section-title">

                  <div className="future-title-icon">
                    <FaShieldAlt />
                  </div>

                  <div>

                    <span>
                      PROGRAMME IDENTIFICATION
                    </span>

                    <h3>
                      Platform Overview
                    </h3>

                  </div>

                </div>


                <div className="future-overview-grid">

                  <div>
                    <span>
                      AIRCRAFT
                    </span>

                    <strong>
                      {selectedAircraft.name}
                    </strong>
                  </div>


                  <div>
                    <span>
                      FULL DESIGNATION
                    </span>

                    <strong>
                      {selectedAircraft.fullName}
                    </strong>
                  </div>


                  <div>
                    <span>
                      GENERATION
                    </span>

                    <strong>
                      {selectedAircraft.generation}
                    </strong>
                  </div>


                  <div>
                    <span>
                      PRIMARY ROLE
                    </span>

                    <strong>
                      {selectedAircraft.role}
                    </strong>
                  </div>

                </div>

              </section>


              {/* ================================================= */}
              {/* INDUCTION TIMELINE */}
              {/* ================================================= */}

              <section className="future-modal-section">

                <div className="future-modal-section-title">

                  <div className="future-title-icon">
                    <FaCalendarAlt />
                  </div>

                  <div>

                    <span>
                      PROGRAMME TIMELINE
                    </span>

                    <h3>
                      Expected Induction
                    </h3>

                  </div>

                </div>


                <div className="induction-timeline">

                  <div className="timeline-icon">
                    <FaClock />
                  </div>

                  <div className="timeline-content">

                    <span>
                      TARGET / EXPECTED INDUCTION
                    </span>

                    <strong>
                      {selectedAircraft.expectedInduction}
                    </strong>

                    <p>
                      {selectedAircraft.developmentStatus}
                    </p>

                  </div>

                  <div className="timeline-progress">

                    <ProgressBar
                      now={selectedAircraft.progress}
                    />

                    <span>
                      DEVELOPMENT PROGRESS
                    </span>

                  </div>

                </div>

              </section>


              {/* ================================================= */}
              {/* TECHNICAL SPECIFICATIONS */}
              {/* ================================================= */}

              <section className="future-modal-section">

                <div className="future-modal-section-title">

                  <div className="future-title-icon">
                    <FaRocket />
                  </div>

                  <div>

                    <span>
                      TECHNICAL DATA
                    </span>

                    <h3>
                      Platform Specifications
                    </h3>

                  </div>

                </div>


                <div className="future-spec-grid">

                  <div className="future-spec-card">

                    <FaBolt />

                    <span>
                      PERFORMANCE
                    </span>

                    <strong>
                      {selectedAircraft.speed}
                    </strong>

                  </div>


                  <div className="future-spec-card">

                    <FaMapMarkerAlt />

                    <span>
                      RANGE
                    </span>

                    <strong>
                      {selectedAircraft.range}
                    </strong>

                  </div>


                  <div className="future-spec-card">

                    <FaCogs />

                    <span>
                      POWERPLANT
                    </span>

                    <strong>
                      {selectedAircraft.engine}
                    </strong>

                  </div>


                  <div className="future-spec-card">

                    <FaUser />

                    <span>
                      CREW
                    </span>

                    <strong>
                      {selectedAircraft.crew}
                    </strong>

                  </div>

                </div>

              </section>


              {/* ================================================= */}
              {/* CAPABILITIES */}
              {/* ================================================= */}

              <section className="future-modal-section">

                <div className="future-modal-section-title">

                  <div className="future-title-icon">
                    <FaCrosshairs />
                  </div>

                  <div>

                    <span>
                      SYSTEM CAPABILITIES
                    </span>

                    <h3>
                      Key Capabilities
                    </h3>

                  </div>

                </div>


                <div className="capabilities-grid">

                  {selectedAircraft.capabilities.map(
                    (capability, index) => (

                      <div
                        className="capability-item"
                        key={index}
                      >

                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <strong>
                          {capability}
                        </strong>

                      </div>

                    )
                  )}

                </div>

              </section>


              {/* ================================================= */}
              {/* MANUFACTURING */}
              {/* ================================================= */}

              <section className="future-modal-section">

                <div className="future-modal-section-title">

                  <div className="future-title-icon">
                    <FaIndustry />
                  </div>

                  <div>

                    <span>
                      INDUSTRIAL INFORMATION
                    </span>

                    <h3>
                      Development & Manufacturing
                    </h3>

                  </div>

                </div>


                <div className="future-manufacturing">

                  <div>

                    <span>
                      DEVELOPER
                    </span>

                    <strong>
                      {selectedAircraft.developer}
                    </strong>

                  </div>


                  <div>

                    <span>
                      MANUFACTURER
                    </span>

                    <strong>
                      {selectedAircraft.manufacturer}
                    </strong>

                  </div>


                  <div>

                    <span>
                      PROGRAMME STATUS
                    </span>

                    <strong>
                      {selectedAircraft.developmentStatus}
                    </strong>

                  </div>

                </div>

              </section>

            </div>


            {/* ================================================= */}
            {/* MODAL FOOTER */}
            {/* ================================================= */}

            <div className="future-modal-footer">

              <div className="future-system-status">

                <span></span>

                PROGRAMME STATUS:
                <strong>
                  {selectedAircraft.status}
                </strong>

              </div>


              <div className="future-classification">
                IAF • FUTURE AIRCRAFT DATABASE
              </div>


              <Button
                className="future-close-button"
                onClick={closeSpecifications}
              >
                CLOSE PROFILE
              </Button>

            </div>

          </div>

        )}

      </Modal>

    </div>
  );
}

export default FutureAircraft;