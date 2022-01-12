import React, { useState } from "react";
import { CarouselImages } from "./imageData";
import "./carousel.style.css";

const ReactCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = CarouselImages.length;

  // if (current === length - 1) {
  //   setCurrent(0);
  // }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // setInterval(nextSlide, 5000);
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log("Current--->", current);
  // console.log("length: ", length);
  // useEffect(() => {}, []);
  if (!Array.isArray(CarouselImages) || CarouselImages.length <= 0) {
    return null;
  }
  return (
    <>
      <div className="slider">
        <i
          className="bi-arrow-left-circle-fill slide-left-arrow icon"
          onClick={prevSlide}
        ></i>
        <i
          className="bi-arrow-right-circle-fill slide-right-arrow icon"
          onClick={nextSlide}
        ></i>
        {CarouselImages.map((image, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"}>
              {index === current && (
                <>
                  <img
                    src={image.url}
                    alt="Maped"
                    className="slider-image"
                    key={index}
                  />
                  <div className="text-over-hero-slider">
                    <div className="header">{image.textHeader}</div>
                    <div className="main-text">{image.text}</div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReactCarousel;
