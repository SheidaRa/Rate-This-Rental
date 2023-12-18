// src/components/ResourcePage.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ResourcePage = () => {
  // Dummy data (replace this with your actual data)
  const resources = [
    {
      city: 'New York',
      country: 'USA',
      support: 'Example Support Organization 1',
      description: 'Description of support available in New York, USA',
    },
    {
      city: 'London',
      country: 'UK',
      support: 'Example Support Organization 2',
      description: 'Description of support available in London, UK',
    },
    // Add more resources as needed
  ];

  return (
    <Container>
      <h1 className="my-4">Renter Support Resources</h1>
      <Row>
        {resources.map((resource, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{`${resource.city}, ${resource.country}`}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{resource.support}</Card.Subtitle>
                <Card.Text>{resource.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResourcePage;
