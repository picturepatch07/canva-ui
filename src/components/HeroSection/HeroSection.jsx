import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import playIcon from "../../assets/1.svg";
import "./HeroSection.css";

function Hero() {
  return (
    <section className="discover-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h2 className="section-heading mb-4">
              Discover a magical new era of creativity
            </h2>
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
                <img src={playIcon} alt="Play icon" className="play-icon" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4}>
            <div className="feature">
              <i className="bi bi-grid-3x3-gap"></i>
              <h3 className="mt-4 mb-3">Layouts</h3>
              <p className="mb-0">
                Choose from hundreds of layout templates to create stunning
                designs for social media, presentations, and more.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature">
              <i className="bi bi-palette"></i>
              <h3 className="mt-4 mb-3">Colors</h3>
              <p className="mb-0">
                Create custom color palettes, choose from millions of colors,
                and apply them to your designs with ease.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature">
              <i className="bi bi-type"></i>
              <h3 className="mt-4 mb-3">Fonts</h3>
              <p className="mb-0">
                Access thousands of fonts, including licensed fonts from top
                designers, and customize them to fit your brand.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
