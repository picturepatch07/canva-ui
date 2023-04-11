import React from "react";
import "./GiftSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gift from "../../assets/gift.jpg";

function GiftSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <h3>Open each gift to open a new feature</h3>
      <Carousel responsive={responsive} className="carousel-gift">
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
        <div className="card">
          <img className="product-image" src={gift} alt="doc-img" />
        </div>
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default GiftSection;
