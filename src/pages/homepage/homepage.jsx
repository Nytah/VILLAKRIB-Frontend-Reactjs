import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import PropCategory from "../../components/PropCategory";
// import WhatWeOffer from "../../components/WhatWeOffer";
import houseImage from "../../assets/images/2.jpg";
import image3 from "../../assets/images/image 6.png";
import image1 from "../../assets/images/image 4.png";
import image2 from "../../assets/images/image 7.png";
import image4 from "../../assets/images/image-.png";
import ReactCarousel, {
  PropertyListings,
} from "../../components/carousel/carousel.component";
import Agent1 from "../../assets/images/Agent1.png";
import Agent2 from "../../assets/images/Agent2.png";
import Agent3 from "../../assets/images/Agent3.png";
import FeaturedAgent from "../../components/featuredAgent/featuredAgent.component";
import NavComponent from "../../components/nav/nav.component";

const HomePage = () => {
  return (
    <>
      <div className="top-nav">
        <NavComponent />
      </div>
      <ReactCarousel />
      {/* let us walk you home  section */}
      <div className="container">
        <div className="row image-row-house">
          <div className="col-md-6 image-col-house">
            <div className="right-image-house">
              <img src={houseImage} alt="" />
            </div>
          </div>
          <div className="col-md-6  d-flex">
            <div className="my-auto">
              <hr />
              <h1>Let us walk you home.</h1>
              Exquisit property listing for buyers, large Clientele for sellers,
              location database and price ranging for renting. Availability of
              agents and movers, with a easy means to contact them. Digital
              imagery library to enjoy shopping with us and an advisory team for
              investors. Villakrib brings ease with smiles, making your walk
              home exciting.
              <Link to="">Learn More...</Link>
            </div>
          </div>
        </div>
      </div>
      <section
        style={{
          backgroundColor: "rgb(140,140,250)",
          paddingTop: "80px",
        }}
      >
        <div
          className=" text-white"
          style={{
            //   marginTop: "80px",
            borderTopLeftRadius: "100px",
            padding: "15px 60px",
            backgroundColor: "rgb(0, 8, 255)",
          }}
        >
          <div className="PropertyListings">
            <PropertyListings />
          </div>
        </div>
      </section>
      {/* <WhatWeOffer /> 
      // //{" "}
      // <div className="propertyCategories">
      //   // <h1>Property Categories</h1>
      //   // <p>check out property types that we can offer you</p>
      //   //{" "}
      // </div>
      // //{" "}
      // <div className="propCategory">
      //   // <PropCategory image={image1} text="Land" />
      //   // <PropCategory image={image2} text="House & Villa" />
      //   // <PropCategory image={image3} text="Offices" />
      //   // <PropCategory image={image4} text="Furnished Appartments" />
      //   //{" "}
      </div>*/}
      <div className="ourFeaturedAgents">
        <h1>Our Featured Agents</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
          enim ad minim veniam.
        </p>
      </div>
      <div className="featuredAgent">
        <FeaturedAgent
          image={Agent1}
          location="Gwagwalada, Abuja"
          name="John Doe"
        />
        <FeaturedAgent
          image={Agent2}
          location="Gwagwalada, Abuja"
          name="John Doe"
        />
        <FeaturedAgent
          image={Agent3}
          location="Gwagwalada, Abuja"
          name="John Doe"
        />
      </div>
    </>
  );
};

export default HomePage;
