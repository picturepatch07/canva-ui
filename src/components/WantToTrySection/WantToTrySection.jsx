import React from "react";
import "./WantToTrySection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import docs from "../../assets/docs.jpg";
import facebookcover from "../../assets/facebook cover.png";
import facebookpost from "../../assets/facebook post.jpg";
import instagrampost from "../../assets/instagram post.jpg";
import instagramstory from "../../assets/instagram story.jpg";
import invitation from "../../assets/invitation.jpg";
import logo from "../../assets/logo.png";
import phonewallpaper from "../../assets/phone wallpaper.jpg";
import poster from "../../assets/poster.jpg";
import whiteboard from "../../assets/whiteboard.png";
import yourstory from "../../assets/your story.jpg";
import youtube from "../../assets/youtube.jpg";

function TrySection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
      <h3>You might want to try</h3>
      <Carousel responsive={responsive} className="carousel-try">
        <div className="card">
          <img className="product-image" src={docs} alt="doc-img" />
          <h2>Doc</h2>
        </div>
        <div className="card">
          <img className="product-image" src={facebookcover} alt="doc-img" />
          <h2>Facebook Cover</h2>
        </div>
        <div className="card">
          <img className="product-image" src={facebookpost} alt="doc-img" />
          <h2>Facebook Post</h2>
        </div>
        <div className="card">
          <img className="product-image" src={instagrampost} alt="doc-img" />
          <h2>Instagram Post</h2>
        </div>
        <div className="card">
          <img className="product-image" src={instagramstory} alt="doc-img" />
          <h2>Instagram Story</h2>
        </div>
        <div className="card">
          <img className="product-image" src={invitation} alt="doc-img" />
          <h2>Invitation</h2>
        </div>
        <div className="card">
          <img className="product-image" src={logo} alt="doc-img" />
          <h2>Logo</h2>
        </div>
        <div className="card">
          <img className="product-image" src={phonewallpaper} alt="doc-img" />
          <h2>Phone Wallpaper</h2>
        </div>
        <div className="card">
          <img className="product-image" src={poster} alt="doc-img" />
          <h2>Poster</h2>
        </div>
        <div className="card">
          <img className="product-image" src={whiteboard} alt="doc-img" />
          <h2>Whiteboard</h2>
        </div>
        <div className="card">
          <img className="product-image" src={yourstory} alt="doc-img" />
          <h2>Your Story</h2>
        </div>
        <div className="card">
          <img className="product-image" src={youtube} alt="doc-img" />
          <h2>Youtube Thumbnail</h2>
        </div>
      </Carousel>
    </div>
  );
}

export default TrySection;
