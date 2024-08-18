import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";


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
        
              title="E Learning"
              description="Developed and implemented an E-Learning platform to facilitate the seamless exchange of study materials between students and faculty. The platform, utilizing AWS and WordPress, provides a user-friendly interface for uploading and accessing notes, quizzes, and other educational resources, significantly reducing manual effort and printing costs."
              ghLink="https://github.com/HarikaS16/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
          
              title="Object Density Detection in Cluttered Environments"
              description="This project presents the development of a multi-object tracking system designed to operate in complex, cluttered environments using a deep learning approach. The system incorporates a web application that enables users to upload videos for object tracking analysis. The processed output features bounding boxes enclosing detected objects, each assigned a unique identifier, along with a centroid point indicating the object's trajectory."
              ghLink="https://github.com/HarikaS16/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              
              title="Layoffs Insight: Data Cleaning and Exploratory Analysis"
              description="This project aimed to clean, standardize, and analyze a dataset detailing layoffs across various companies, industries, and countries. The dual focus was on ensuring data quality through rigorous cleaning and preparation and then performing exploratory data analysis (EDA) to extract meaningful insights."
              ghLink="https://github.com/HarikaS16/MYSQL-Data-Cleaning-EDA-project.git"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              
              title="Bike Sales Dashboard: Data Cleaning and Interactive Reporting"
              description="This project focused on cleaning a bike sales dataset and developing an interactive dashboard in Excel to visualize and analyze sales performance. The goal was to ensure data accuracy through rigorous cleaning processes and to create a user-friendly dashboard that provides valuable insights into sales metrics."
              ghLink="https://github.com/HarikaS16/Excel-Dashboard.git"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
