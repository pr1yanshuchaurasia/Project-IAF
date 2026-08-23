import { Card, Badge, Button } from "react-bootstrap";

import {
  FaTachometerAlt,
  FaMapMarkerAlt,
  FaCogs,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

import "./FighterCard.css";

function FighterCard({ fighter }) {
  return (
    <Card className="fighter-card">

      {/* CARD HEADER */}
      <div className="fighter-card-header">
        <h2>{fighter.name}</h2>

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
        <Button className="spec-button">
          View Specifications
          <FaArrowRight />
        </Button>
      </div>

    </Card>
  );
}

export default FighterCard;