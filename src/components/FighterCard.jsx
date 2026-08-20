import { Card, Badge, Button } from "react-bootstrap";
import { FaPlane, FaTachometerAlt, FaLayerGroup } from "react-icons/fa";

function FighterCard({ fighter }) {
  return (
    <Card className="fighter-card h-100">

      {/* Aircraft Image Area */}
      <div className="fighter-image">

        <FaPlane className="fighter-icon" />

        <Badge bg="warning" text="dark" className="generation-badge">
          {fighter.generation}
        </Badge>

      </div>

      <Card.Body>

        <Card.Title className="fw-bold fs-4">
          {fighter.name}
        </Card.Title>

        <Card.Text className="text-muted">
          {fighter.role}
        </Card.Text>

        <div className="fighter-spec">

          <div>
            <FaTachometerAlt />
            <span>
              <strong>Speed</strong>
              <br />
              {fighter.speed}
            </span>
          </div>

          <div>
            <FaLayerGroup />
            <span>
              <strong>Generation</strong>
              <br />
              {fighter.generation}
            </span>
          </div>

        </div>

        <Button
          variant="dark"
          className="w-100 mt-3"
        >
          View Specifications
        </Button>

      </Card.Body>

    </Card>
  );
}

export default FighterCard;