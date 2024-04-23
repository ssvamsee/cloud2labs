import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import TrackVisibility from "react-on-screen";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center",alignItems:"center", padding: "10px"}}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="highlghter">We're</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "10px" }}
            className="about-img"
            >
            <img src='../../Assets/about.svg' alt="about" className="img-fluid about-image" />

          </Col>
        </Row>
        <h1 className="project-heading">
          Our <strong className="highlghter">Services </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="highlghter">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;