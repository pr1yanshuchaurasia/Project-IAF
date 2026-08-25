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
  FaRocket,
  FaShieldAlt,
  FaCrosshairs,
} from "react-icons/fa";

import "../styles/FighterCard.css";

import iafLogo from "../assets/Indian_Air_Force-Logo.wine.png";

function FighterCard({ fighter }) {
  const [showModal, setShowModal] = useState(false);

  // Normalize aircraft name so matching is reliable
  const aircraftName = fighter.name?.trim().toUpperCase() || "";

  // Reusable Sketchfab iframe configuration
  const render3DModel = () => {
    /* =====================================================
       RAFALE
    ===================================================== */
    if (aircraftName.includes("RAFALE")) {
      return (
        <iframe
          title="Dassault RAFALE BS (IAF)"
          src="https://sketchfab.com/models/788fca79dc974a7fa1db55e2a9b00058/embed"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
        />
      );
    }

    /* =====================================================
       SU-30MKI
    ===================================================== */
    if (
      aircraftName.includes("SU-30MKI") ||
      aircraftName.includes("SU-30 MKI") ||
      aircraftName.includes("SU30MKI")
    ) {
      return (
        <iframe
          title="SU-30MKI"
          src="https://sketchfab.com/models/816a24f6f58946a6aa0d55cb6bb27d73/embed"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
        />
      );
    }

    /* =====================================================
       HAL TEJAS MK1A
    ===================================================== */
    if (
      aircraftName.includes("TEJAS") ||
      aircraftName.includes("LCA")
    ) {
      return (
        <iframe
          title="HAL Tejas"
          src="https://sketchfab.com/models/f75b93a36c1440e18c9e058b564543c1/embed"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
        />
      );
    }

    /* =====================================================
       MIRAGE 2000
    ===================================================== */
    if (
      aircraftName.includes("MIRAGE 2000") ||
      aircraftName.includes("MIRAGE-2000") ||
      aircraftName.includes("MIRAGE")
    ) {
      return (
        <iframe
          title="Dassault Mirage 2000"
          src="https://sketchfab.com/models/1263d745086e427d9ba08bef6f808c17/embed"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
        />
      );
    }

    /* =====================================================
       SEPECAT JAGUAR
    ===================================================== */
    if (
      aircraftName.includes("JAGUAR") ||
      aircraftName.includes("SEPECAT")
    ) {
      return (
        <iframe
          title="SEPECAT Jaguar GR3a"
          src="https://sketchfab.com/models/edd28044776e457bbd8cb9e17e99265a/embed"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
        />
      );
    }

    /* =====================================================
       MiG-29
    ===================================================== */
    if (
      aircraftName.includes("MIG-29") ||
      aircraftName.includes("MIG 29") ||
      aircraftName.includes("MIG29") ||
      aircraftName.includes("MIKOYAN")
    ) {
      return (
        <iframe
          title="MIG-29 Fulcrum"
          src="https://sketchfab.com/models/aabb4b775bfc4144b97ee268eb2132fd/embed"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
        />
      );
    }

    /* =====================================================
       DEFAULT MODEL PLACEHOLDER
    ===================================================== */
    return (
      <div className="model-placeholder">
        <FaPlane />

        <strong>3D MODEL</strong>

        <span>
          Interactive model will be available
        </span>
      </div>
    );
  };

  return (
    <>
      {/* ===================================================== */}
      {/* FIGHTER CARD */}
      {/* ===================================================== */}

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


        {/* ================================================= */}
        {/* AIRCRAFT IMAGE */}
        {/* ================================================= */}

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


        {/* ================================================= */}
        {/* SPECIFICATIONS */}
        {/* ================================================= */}

        <div className="fighter-specifications">

          <div className="spec-item">

            <FaTachometerAlt className="spec-icon" />

            <div>
              <span>MAX SPEED</span>
              <strong>{fighter.speed}</strong>
            </div>

          </div>


          <div className="spec-item">

            <FaMapMarkerAlt className="spec-icon" />

            <div>
              <span>RANGE</span>
              <strong>{fighter.range}</strong>
            </div>

          </div>


          <div className="spec-item">

            <FaCogs className="spec-icon" />

            <div>
              <span>ENGINE</span>
              <strong>{fighter.engine}</strong>
            </div>

          </div>


          <div className="spec-item">

            <FaUser className="spec-icon" />

            <div>
              <span>CREW</span>
              <strong>{fighter.crew}</strong>
            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* BUTTON */}
        {/* ================================================= */}

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


      {/* ===================================================== */}
      {/* PROFESSIONAL IAF MODAL */}
      {/* ===================================================== */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
        className="fighter-modal"
      >

        <div className="iaf-modal-container">

          {/* ================================================= */}
          {/* MODAL HEADER */}
          {/* ================================================= */}

          <div className="fighter-modal-header">

            <div className="modal-brand">

              <div className="modal-logo">

                <img
                  src={iafLogo}
                  alt="Indian Air Force"
                />

              </div>

              <div className="modal-brand-text">

                <span className="modal-overline">
                  INDIAN AIR FORCE
                </span>

                <strong>
                  AIRCRAFT DATABASE
                </strong>

              </div>

            </div>


            <div className="modal-aircraft-heading">

              <span>
                AIRCRAFT PROFILE / {fighter.generation}
              </span>

              <h2>
                {fighter.name}
              </h2>

            </div>


            <button
              className="modal-close-button"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

          </div>


          {/* ================================================= */}
          {/* MODAL BODY */}
          {/* ================================================= */}

          <div className="fighter-modal-body">

            {/* ================================================= */}
            {/* 3D AIRCRAFT SECTION */}
            {/* ================================================= */}

            <section className="aircraft-3d-section">

              <div className="section-heading">

                <div className="section-heading-icon">
                  <FaPlane />
                </div>

                <div>

                  <span>
                    INTERACTIVE PLATFORM
                  </span>

                  <h3>
                    {fighter.name} / 3D VIEW
                  </h3>

                </div>

                <div className="model-status">

                  <span></span>

                  LIVE MODEL

                </div>

              </div>


              {/* ================================================= */}
              {/* 3D MODEL */}
              {/* ================================================= */}

              <div className="model-viewer-wrapper">

                {render3DModel()}

              </div>


              {/* ================================================= */}
              {/* MODEL INSTRUCTIONS */}
              {/* ================================================= */}

              <div className="model-instructions">

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
                  EXPLORE FROM EVERY ANGLE
                </span>

              </div>

            </section>


            {/* ================================================= */}
            {/* PLATFORM OVERVIEW */}
            {/* ================================================= */}

            <section className="modal-section">

              <div className="modal-section-title">

                <div className="title-icon">
                  <FaShieldAlt />
                </div>

                <div>

                  <span>
                    PLATFORM IDENTIFICATION
                  </span>

                  <h3>
                    Aircraft Overview
                  </h3>

                </div>

              </div>


              <div className="overview-grid">

                <div className="overview-item">

                  <span>
                    AIRCRAFT
                  </span>

                  <strong>
                    {fighter.name}
                  </strong>

                </div>


                <div className="overview-item">

                  <span>
                    MANUFACTURER
                  </span>

                  <strong>
                    {fighter.manufacturer}
                  </strong>

                </div>


                <div className="overview-item">

                  <span>
                    GENERATION
                  </span>

                  <strong>
                    {fighter.generation}
                  </strong>

                </div>


                <div className="overview-item">

                  <span>
                    PRIMARY ROLE
                  </span>

                  <strong>
                    {fighter.role}
                  </strong>

                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* PERFORMANCE */}
            {/* ================================================= */}

            <section className="modal-section">

              <div className="modal-section-title">

                <div className="title-icon">
                  <FaRocket />
                </div>

                <div>

                  <span>
                    TECHNICAL DATA
                  </span>

                  <h3>
                    Performance Specifications
                  </h3>

                </div>

              </div>


              <div className="modal-spec-grid">

                <div className="modal-spec-card">

                  <div className="modal-spec-icon">
                    <FaTachometerAlt />
                  </div>

                  <div>

                    <span>
                      MAXIMUM SPEED
                    </span>

                    <strong>
                      {fighter.speed}
                    </strong>

                  </div>

                </div>


                <div className="modal-spec-card">

                  <div className="modal-spec-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <span>
                      OPERATIONAL RANGE
                    </span>

                    <strong>
                      {fighter.range}
                    </strong>

                  </div>

                </div>


                <div className="modal-spec-card">

                  <div className="modal-spec-icon">
                    <FaCogs />
                  </div>

                  <div>

                    <span>
                      POWERPLANT
                    </span>

                    <strong>
                      {fighter.engine}
                    </strong>

                  </div>

                </div>


                <div className="modal-spec-card">

                  <div className="modal-spec-icon">
                    <FaUser />
                  </div>

                  <div>

                    <span>
                      CREW CONFIGURATION
                    </span>

                    <strong>
                      {fighter.crew}
                    </strong>

                  </div>

                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* PLATFORM INFORMATION */}
            {/* ================================================= */}

            <section className="modal-section">

              <div className="modal-section-title">

                <div className="title-icon">
                  <FaIndustry />
                </div>

                <div>

                  <span>
                    PLATFORM DATA
                  </span>

                  <h3>
                    Mission & Manufacturing
                  </h3>

                </div>

              </div>


              <div className="platform-information">

                <div>

                  <span>
                    MANUFACTURER
                  </span>

                  <strong>
                    {fighter.manufacturer}
                  </strong>

                </div>


                <div>

                  <span>
                    MISSION PROFILE
                  </span>

                  <strong>
                    {fighter.role}
                  </strong>

                </div>

              </div>

            </section>

          </div>


          {/* ================================================= */}
          {/* MODAL FOOTER */}
          {/* ================================================= */}

          <div className="fighter-modal-footer">

            <div className="modal-footer-status">

              <span className="status-dot"></span>

              SYSTEM STATUS:
              <strong> OPERATIONAL</strong>

            </div>


            <div className="footer-classification">
              IAF • AIRCRAFT DATABASE
            </div>


            <Button
              className="modal-close-action"
              onClick={() => setShowModal(false)}
            >
              CLOSE PROFILE
            </Button>

          </div>

        </div>

      </Modal>

    </>
  );
}

export default FighterCard;