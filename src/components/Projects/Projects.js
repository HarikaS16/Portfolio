import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";
import Density from "../../Assets/Projects/WhatsApp Image 2024-07-13 at 19.42.51_5f56c846.jpg";
import Elearning from "../../Assets/Projects/WhatsApp Image 2024-07-13 at 19.46.45_1b230c6d.jpg"
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Elearning}
              title="E Learning"
              description="Developed and implemented an E-Learning platform to facilitate the seamless exchange of study materials between students and faculty. The platform, utilizing AWS and WordPress, provides a user-friendly interface for uploading and accessing notes, quizzes, and other educational resources, significantly reducing manual effort and printing costs."
              ghLink="https://github.com/HarikaS16/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Density}
              title="Object Density Detection in Cluttered Environments"
              description="This project presents the development of a multi-object tracking system designed to operate in complex, cluttered environments using a deep learning approach. The system incorporates a web application that enables users to upload videos for object tracking analysis. The processed output features bounding boxes enclosing detected objects, each assigned a unique identifier, along with a centroid point indicating the object's trajectory."
              ghLink="https://github.com/HarikaS16/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
