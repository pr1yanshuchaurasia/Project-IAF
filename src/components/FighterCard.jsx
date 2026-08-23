import { useState } from "react";
import { Card, Badge, Button, Modal } from "react-bootstrap";

import {
  FaTachometerAlt,
  FaMapMarkerAlt,
  FaCogs,
  FaUser,
  FaArrowRight,
  FaTimes,
  FaPlane,
  FaIndustry,
  FaCrosshairs,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import "./FighterCard.css";

function FighterCard({ fighter }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="fighter-card">

        {/* CARD HEADER */}
        <div className="fighter-card-header">
          <div>
            <span className="fighter-category">
              INDIAN AIR FORCE
            </span>

            <h2>{fighter.name}</h2>
          </div>

          <Badge className="generation-badge">
            {fighter.generation}
          </Badge>
        </div>


        {/* AIRCRAFT IMAGE */}
        <div className="fighter-card-image">

          <img
            src={fighter.image}
            alt={fighter.name}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="image-overlay"></div>

          <div className="image-caption">
            <FaPlane />
            <span>{fighter.role}</span>
          </div>

        </div>


        {/* SPECIFICATIONS */}
        <div className="fighter-specifications">

          {/* SPEED */}
          <div className="spec-item">
            <FaTachometerAlt className="spec-icon" />

            <div>
              <span>MAX SPEED</span>
              <strong>{fighter.speed}</strong>
            </div>
          </div>


          {/* RANGE */}
          <div className="spec-item">
            <FaMapMarkerAlt className="spec-icon" />

            <div>
              <span>RANGE</span>
              <strong>{fighter.range}</strong>
            </div>
          </div>


          {/* ENGINE */}
          <div className="spec-item">
            <FaCogs className="spec-icon" />

            <div>
              <span>ENGINE</span>
              <strong>{fighter.engine}</strong>
            </div>
          </div>


          {/* CREW */}
          <div className="spec-item">
            <FaUser className="spec-icon" />

            <div>
              <span>CREW</span>
              <strong>{fighter.crew}</strong>
            </div>
          </div>

        </div>


        {/* BUTTON */}
        <div className="fighter-card-footer">

          <Button
            className="spec-button"
            onClick={() => setShowModal(true)}
          >
            VIEW FULL SPECIFICATIONS

            <FaArrowRight />
          </Button>

        </div>

      </Card>


      {/* ======================================= */}
      {/* SPECIFICATION MODAL */}
      {/* ======================================= */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        className="fighter-modal"
      >

        <Modal.Header className="fighter-modal-header">

          <div className="modal-title-area">

            <div className="modal-plane-icon">
              <FaPlane />
            </div>

            <div>

              <span>
                INDIAN AIR FORCE • AIRCRAFT PROFILE
              </span>

              <Modal.Title>
                {fighter.name}
              </Modal.Title>

            </div>

          </div>

          <button
            className="modal-close-button"
            onClick={() => setShowModal(false)}
          >
            <FaTimes />
          </button>

        </Modal.Header>


        <Modal.Body className="fighter-modal-body">

          {/* TOP IMAGE */}
          <div className="modal-aircraft-image">

            <img
              src={fighter.image}
              alt={fighter.name}
            />

            <div className="modal-image-overlay"></div>

            <div className="modal-aircraft-label">
              <span>{fighter.generation}</span>
              <strong>{fighter.role}</strong>
            </div>

          </div>


          {/* BASIC INFORMATION */}
          <div className="modal-section">

            <div className="modal-section-title">
              <FaShieldAlt />
              PLATFORM OVERVIEW
            </div>

            <div className="overview-grid">

              <div className="overview-item">
                <span>Aircraft</span>
                <strong>{fighter.name}</strong>
              </div>

              <div className="overview-item">
                <span>Manufacturer</span>
                <strong>{fighter.manufacturer}</strong>
              </div>

              <div className="overview-item">
                <span>Generation</span>
                <strong>{fighter.generation}</strong>
              </div>

              <div className="overview-item">
                <span>Primary Role</span>
                <strong>{fighter.role}</strong>
              </div>

            </div>

          </div>


          {/* PERFORMANCE */}
          <div className="modal-section">

            <div className="modal-section-title">
              <FaRocket />
              PERFORMANCE SPECIFICATIONS
            </div>

            <div className="modal-spec-grid">

              <div className="modal-spec-card">

                <div className="modal-spec-icon">
                  <FaTachometerAlt />
                </div>

                <div>
                  <span>MAXIMUM SPEED</span>
                  <strong>{fighter.speed}</strong>
                </div>

              </div>


              <div className="modal-spec-card">

                <div className="modal-spec-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>OPERATIONAL RANGE</span>
                  <strong>{fighter.range}</strong>
                </div>

              </div>


              <div className="modal-spec-card">

                <div className="modal-spec-icon">
                  <FaCogs />
                </div>

                <div>
                  <span>POWERPLANT</span>
                  <strong>{fighter.engine}</strong>
                </div>

              </div>


              <div className="modal-spec-card">

                <div className="modal-spec-icon">
                  <FaUser />
                </div>

                <div>
                  <span>CREW</span>
                  <strong>{fighter.crew}</strong>
                </div>

              </div>

            </div>

          </div>


          {/* PLATFORM INFORMATION */}
          <div className="modal-section">

            <div className="modal-section-title">
              <FaIndustry />
              PLATFORM INFORMATION
            </div>

            <div className="platform-information">

              <div>
                <span>MANUFACTURER</span>
                <strong>{fighter.manufacturer}</strong>
              </div>

              <div>
                <span>MISSION PROFILE</span>
                <strong>{fighter.role}</strong>
              </div>

            </div>

          </div>

        </Modal.Body>


        <Modal.Footer className="fighter-modal-footer">

          <div className="modal-footer-status">

            <span className="status-dot"></span>

            PLATFORM INFORMATION

          </div>

          <Button
            className="modal-close-action"
            onClick={() => setShowModal(false)}
          >
            CLOSE
          </Button>

        </Modal.Footer>

      </Modal>

    </>
  );
}

export default FighterCard;