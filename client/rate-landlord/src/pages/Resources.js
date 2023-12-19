import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ResourceCard from "../components/Cards/ResourceCard";
import "./CSS/Resources.css"; 

const ResourcePage = () => {
  // Sample data
  const resources = [
    {
      name: "MASSACHUSETTS UNION OF PUBLIC HOUSING",
      location: "DORCHESTER, MASSACHUSETTS, US",
      address: "784 Washington St, Suite 504",
      phoneNumber: "617 825 9750",
      description:
        "Mass Union is a nonprofit run by tenants for tenants. Our mission is to preserve and improve public housing across the state. We are a union of over 60 Local Tenant Organizations and we are growing fast.",
    },
    {
        name: "TEXAS TENANTS UNION",
        location: "DENTON, TEXAS, US",
        address: "74 DENTON St, Suite 04",
        phoneNumber: "687 825 0750",
        description:
          "The Texas Tenants’ Union is a nonprofit tenants’ rights organization. We empower tenants through education and organizing to protect their rights, preserve their homes, improve their living conditions and enhance the quality of life in their communities.",
      },    
      
      {
        name: "TENANTS PROTECTION ASSOCIATION",
        location: " AUCKLAND, AUCKLAND, NZ",
        address: "79 Grand St, Inite 54",
        phoneNumber: "917 827 9870",
        description:
          "Our main aim is to support and promote the welfare and interests of tenants. To act on their behalf in disputes with landlords; to inform them of their rights and obligations under the Residential Tenancies Act and to assist those who take disputes to the Tenancy Tribunal.",
      },
    
    ];

  return (
    <div className="resource-page">
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

      <Row className="mb-4">
        <Col md={4}>
          <Form.Control type="text" placeholder="Search" />
        </Col>
        <Col md={4}>
          {/* Add your select dropdown here */}
        </Col>
      </Row>
      <Row>
        {resources.map((resource, index) => (
          <Col key={index} lg={6} className="mb-4">
            <ResourceCard {...resource} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ResourcePage;
