import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
// import PropCategory from "../../components/PropCategory";
// import WhatWeOffer from "../../components/WhatWeOffer";
import houseImage from "../../assets/images/2.jpg";
// import image3 from "../../assets/images/image 6.png";
import image1 from "../../assets/images/image 4.png";
// import image2 from "../../assets/images/image 7.png";
// import image4 from "../../assets/images/image-.png";
import playstore from "../../assets/images/playstore.jpg";
import appstore from "../../assets/images/appstore.jpg";
import mobileAppImage from "../../assets/images/villakrib app phone.jpg";
import ReactCarousel, {
  PropertyListings,
} from "../../components/carousel/carousel.component";
import Agent1 from "../../assets/images/Agent1.png";
import Agent2 from "../../assets/images/Agent2.png";
import Agent3 from "../../assets/images/Agent3.png";
import FeaturedAgent from "../../components/featuredAgent/featuredAgent.component";
<<<<<<< HEAD
import FooterComponent from "../../components/footer/footer.component";
=======
import NavComponent from "../../components/nav/nav.component";
>>>>>>> 7d1e196907c7a05aba6d948d1cb3c72a4536741f

const HomePage = () => {
  return (
    <>
<<<<<<< HEAD
      <WhatWeOffer />
      <div className="propertyCategories">
        <h1>Property Categories</h1>
        <p>check out property types that we can offer you</p>
      </div>

      <div className="propCategory">
        <PropCategory image={image1} text="Land" />
        <PropCategory image={image2} text="House & Villa" />
        <PropCategory image={image3} text="Offices" />
        <PropCategory image={image4} text="Furnished Appartments" />
      </div>

      <div className="explorePropertyListings">
        <h1>Explore Property Listings</h1>
        <p> Explore property listings through our digital image library</p>
=======
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
              <hr className="short-line" />
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
>>>>>>> 7d1e196907c7a05aba6d948d1cb3c72a4536741f
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
        <hr className="short-line" />
        <h1>Our Featured Agents</h1>
<<<<<<< HEAD
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
          enim ad minim veniam.
        </p>
=======
>>>>>>> 7d1e196907c7a05aba6d948d1cb3c72a4536741f
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
<<<<<<< HEAD
      <FooterComponent />
=======

      <div className="main-blog-div">
        <section className="blog-section">
          <div className="image-behaind-text-div">
            <img src={houseImage} alt="" />
            <div className="text-over-image">
              <div className="header">Lorem ipsum dolor sit amet</div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              reprehenderit dignissimos velit maxime iste adipisci non assumenda
              autem, optio quis rerum dolorum sint dolor excepturi quaerat
              obcaecati voluptatibus culpa in.
              <p>
                <button className="btn btn-primary mt-3">Read Blog...</button>
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="question-section">
        <div className="row p-3">
          {" "}
          <div className="col-md-8">
            <h1>Do you Have A Question?</h1>
            We are always avalilabie to answer
          </div>
          <div className="col-4 d-flex">
            <div className="btn btn-primary my-auto">Contact Us</div>
          </div>
        </div>
      </section>
      <section className="download-app-section">
        <div className="d-flex">
          <div className="download-text">
            <h1>Download our App</h1>
            <p>App is free</p>
            <div className="store-icons d-flex">
              <img src={appstore} alt="" />
              <img src={playstore} alt="" />
            </div>
          </div>
          <div className="download-app-image">
            <img src={mobileAppImage} alt="" />
          </div>
        </div>
      </section>
>>>>>>> 7d1e196907c7a05aba6d948d1cb3c72a4536741f
    </>
  );
};

export default HomePage;
