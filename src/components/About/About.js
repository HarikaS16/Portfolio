import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import AreasOfInterest from "./AreasOfInterest"; 
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
      <h1 data-aos="fade-right">
      <span className="primary-header">Areas of</span> Interest
        </h1>
        <div data-aos="fade-up">
          <AreasOfInterest />
        </div>


        <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span> I Work With
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>

      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
