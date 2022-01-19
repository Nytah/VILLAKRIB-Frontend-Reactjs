import React, { useState } from "react";
import {
  CarouselImages,
  PropertyListingsImage,
} from "../../assets/json/imageData";
import "./carousel.style.css";

// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
//   Dot,
//   DotGroup,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import image3 from "../../assets/images/1.jpeg";
// import image1 from "../../assets/images/2.jpg";
// import image2 from "../../assets/images/3.jpeg";

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

export const PropertyListings = () => {
  // const [current, setCurrent] = useState(0);
  // const length = PropertyListingsImage.length;
  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };
  // // setInterval(nextSlide, 5000);
  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };
  // console.log("Current--->", current);

  // return (
  //   <section className="slider">
  //     <i className="bi-arrow-left-circle-fill l" onClick={prevSlide}></i>
  //     <i className="bi-arrow-right-circle-fill r" onClick={nextSlide}></i>
  //     {PropertyListingsImage.map((image, index) => {
  //       return (
  //         <div
  //           className={index === current ? "silde active" : "slide"}
  //           key={index}
  //         >
  //           <>
  //             {index === current && (
  //               <img src={image.url} alt="" className="image" />
  //             )}
  //           </>
  //         </div>
  //       );
  //     })}
  //   </section>
  // );

  const [currentProperty, setCurrentProperty] = useState(0);
  const propertyListingLength = PropertyListingsImage.length;

  const nextPropertySlide = () => {
    setCurrentProperty(
      currentProperty === propertyListingLength - 1 ? 0 : currentProperty + 1
    );
  };
  // setInterval(nextSlide, 5000);
  const prevPropertySlide = () => {
    setCurrentProperty(
      currentProperty === 0 ? propertyListingLength - 1 : currentProperty - 1
    );
  };
  console.log(currentProperty);

  if (
    !Array.isArray(PropertyListingsImage) ||
    PropertyListingsImage.length <= 0
  ) {
    return null;
  }
  return (
    <>
      <div className="property-listing-slide ">
        <div className="slide-icons w-100 d-flex justify-content-between">
          <h4 style={{ marginLeft: "50px" }}>Explore property listings</h4>
          <div>
            {" "}
            <i
              className="bi-arrow-left-circle-fill"
              onClick={prevPropertySlide}
            ></i>
            <i
              className="bi-arrow-right-circle-fill"
              onClick={nextPropertySlide}
            ></i>
          </div>
        </div>
        {PropertyListingsImage.map((image, index) => {
          return (
            <div
              className={
                index === currentProperty
                  ? "property-slide activProperty"
                  : "property-slide "
              }
            >
              <img
                src={image.url}
                className="property-listing-slide-image"
                alt="property-listing-slide"
              />
              <h6 className="text-center">{image.textHeader}</h6>
            </div>
          );
        })}
      </div>
    </>
  );

  // return (
  //   <>
  //     <div
  //       style={{
  //         maxWidth: "500px !important",
  //         border: "solid red",
  //       }}
  //     >
  //       <CarouselProvider
  //         naturalSlideWidth={50}
  //         naturalSlideHeight={10}
  //         totalSlides={3}
  //         infinite={true}
  //       >
  //         <Slider>
  //           <Slide index={0}>
  //             <img src={image1} alt="" />
  //             {/* <Dot /> */}
  //           </Slide>
  //           <Slide index={1}>
  //             <img src={image2} alt="" />
  //             {/* <Dot /> */}
  //           </Slide>
  //           <Slide index={2}>
  //             <img src={image3} alt="" />
  //           </Slide>
  //         </Slider>

  //         <DotGroup />
  //         <ButtonBack>Back</ButtonBack>
  //         <ButtonNext>Next</ButtonNext>
  //       </CarouselProvider>
  //     </div>
  //   </>
  // );
};
