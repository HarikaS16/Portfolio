// src/components/AreasOfInterest.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./areasOfInterest.css";

function AreasOfInterest() {
  return (
    <Container fluid className="interest-section">
      <Container>
        <h1 data-aos="fade-right" className="interest-heading">
         
        </h1>
        <Row className="justify-content-center">
          <Col md={4} className="interest-item">
            <Card className="interest-card">
              <Card.Body>
                <Card.Title>Data Science</Card.Title>
                <Card.Text>
                  Exploring data-driven solutions and predictive analytics to uncover insights and drive decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="interest-item">
            <Card className="interest-card">
              <Card.Body>
                <Card.Title>Machine Learning</Card.Title>
                <Card.Text>
                  Building and training models to solve complex problems and improve processes using machine learning algorithms.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="interest-item">
            <Card className="interest-card">
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Designing and developing web applications with modern technologies to create interactive and user-friendly experiences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AreasOfInterest;
