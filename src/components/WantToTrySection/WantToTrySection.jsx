import React from "react";
import "./WantToTrySection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import docs from "../../assets/docs.jpg";

function TrySection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
      <h1>You might want to try</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <img className="product-image" src={docs} alt="doc-img" />
          <h2>Doc</h2>
        </div>
        <div className="card">
          <img className="product-image" src={docs} alt="doc-img" />
          <h2>Doc</h2>
        </div>
        <div className="card">
          <img className="product-image" src={docs} alt="doc-img" />
          <h2>Doc</h2>
        </div>
        <div className="card">
          <img className="product-image" src={docs} alt="doc-img" />
          <h2>Doc</h2>
        </div>
        <div className="card">
          <img className="product-image" src={docs} alt="doc-img" />
          <h2>Doc</h2>
        </div>
      </Carousel>
    </div>
  );
}

export default TrySection;
