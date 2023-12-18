import React from "react";
import "./CSS/Resources.css";

import { Container, Row, Col, Card, Form } from "react-bootstrap";

const ResourcePage = () => {
  // Sample data
  const resources = [
    {
      name: "MASSACHUSETTS UNION OF PUBLIC HOUSING TENANTS",
      location: "DORCHESTER, MASSACHUSETTS, US",
      address: "784 Washington St, Suite 504",
      phoneNumber: "617 825 9750",
      description:
        "Mass Union is a nonprofit run by tenants for tenants. Our mission is to preserve and improve public housing across the state. We are union of over 60 Local Tenant Organizations and we are growing fast.",
    },
  ];

  return (
    <Container className="resource-page mt-4">
      <h2 className="mb-4">Resources</h2>
      <p>Need support? Consider joining your local tenant union!</p>
      <p>
        Tenant unions and advocacy groups play an important role in empowering
        renters by providing support, information, and resources to help them
        understand their rights and responsibilities.
      </p>
      <p>
        To join a tenant union, begin by searching for local organizations in
        your state/province/region or territory.
      </p>

      {/* Filters / Search Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control type="text" placeholder="Search" />
        </Col>
        <Col md={3}>
          <Form.Control as="select">
            <option>Newest</option>
            {/* Add other filter options */}
          </Form.Control>
        </Col>
      </Row>

      {/* Displaying Resources */}
      <Row>
        {resources.map((resource, index) => (
          <Col key={index} lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{resource.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {resource.location}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Address:</strong> {resource.address}
                  <br />
                  <strong>Phone Number:</strong> {resource.phoneNumber}
                  <br />
                  {resource.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResourcePage;
