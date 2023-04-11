import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";

function Hero() {
  return (
    <section className="discover-section">
      <Container>
        <Row>
          <div className="hero-container">
            <h2>Discover a new magical era</h2>
            <div className="hero-container-inner">
              <div className="hero-container-inner-card">
                <img
                  src="https://www.wanderon.in/svg/backpacking-trips.svg"
                  alt="item"
                ></img>
              </div>
              <div className="hero-container-inner-card">
                <img
                  src="https://www.wanderon.in/svg/corporate-trips.svg"
                  alt="item"
                ></img>
              </div>
              <div className="hero-container-inner-card">
                <img
                  src="https://www.wanderon.in/svg/workcations.svg"
                  alt="item"
                ></img>
              </div>
              <div className="hero-container-inner-card">
                <img
                  src="https://www.wanderon.in/svg/backpacking-trips.svg"
                  alt="item"
                ></img>
              </div>
              <div className="hero-container-inner-card">
                <img
                  src="https://www.wanderon.in/svg/customised-trips.svg"
                  alt="item"
                ></img>
              </div>
              <div className="hero-container-inner-card">
                <img
                  src="https://www.wanderon.in/svg/corporate-trips.svg"
                  alt="item"
                ></img>
              </div>
            </div>
          </div>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <p className="lead mb-4">
              Unleash your creativity with Canva's all-in-one design platform.
              Explore thousands of professionally designed templates, images,
              and graphics, and customize them to create stunning designs.
            </p>
            <Button variant="primary" size="lg" className="mt-4">
              Start designing
            </Button>
          </Col>
          <Col lg={6}>
            <div className="discover-img-wrapper">
              {/* <img src={playIcon} alt="Discover Canva" className="img-fluid" /> */}
              <div className="play-icon-wrapper">
                {/* <img src={playIcon} alt="Play icon" className="play-icon" /> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
