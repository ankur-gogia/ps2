import React, { useState, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import data from "../../data/carouselData.json";
import "./index.css";
import Loader from 'react-loaders'

const Portfolio = () => {
  const [slide, setSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const backgroundRef = useRef(null);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };


  return (
    <>
    <div className="container portfolio-page">
      <div
        className="background"
        
        style={{ backgroundImage: `url(${data[slide].src})` }}
        
      ></div>
      <div className="carousel" >
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        <div
          className="slide-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={data[slide].src}
            alt={data[slide].alt}
            className={`slide-img ${isHovered ? "blur" : ""}`}
          />
          {isHovered && <div className="alt-text">{data[slide].alt}</div>}
        </div>
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        <h1
  style={{
    display: 'inline-block',
    position: 'absolute',
    color: '#d2d4d4',
    top: '-8rem',
    fontSize: '50px',
    // fontWeight: '10',
    left: 'auto',
    right: 'auto',
    letterSpacing: '7px',
    fontFamily: 'Havana',
    
  }}
>
  {data[slide].location}
</h1>
<div class="button-container">
    <div class="button-center">
      <button class="btn"  onClick={() => setIsGridView(true)}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="button-border">
        <rect class="bg-line"  x="0" y="0" width="180" height="60" rx="10" ry="10" fill="none" />
        <rect class="hl-line"  x="0" y="0" width="180" height="60" rx="10" ry="10" fill="none" />
        </svg>
        <span>VIEW ALL</span>
      </button>
    </div>
  </div>
        {isGridView && (
          <div className={`grid-view ${isGridView ? "grid-view-active" : ""}`}>
            <button className="exit-button" onClick={() => setIsGridView(false)}>
              ✕ {/* Cross icon HTML entity */}
            </button>
            {data.map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className="grid-image"
                onClick={() => setIsGridView(false)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
