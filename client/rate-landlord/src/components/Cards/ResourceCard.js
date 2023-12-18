import React from "react";
import { Card } from "react-bootstrap";
import "./ResourceCard.css"; 

const ResourceCard = ({ name, location, address, phoneNumber, description }) => {
  return (
    <Card className="resource-card">
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted card-subtitle">
          {location}
        </Card.Subtitle>
        <Card.Text className="card-text">
          <strong>Address:</strong> {address}
          <br />
          <strong>Phone Number:</strong> {phoneNumber}
          <br />
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
