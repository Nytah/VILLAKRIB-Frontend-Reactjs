import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
// import PropCategory from "../../components/PropCategory";
// import WhatWeOffer from "../../components/WhatWeOffer";
import houseImage from "../../assets/images/2.jpg";
// import image3 from "../../assets/images/image 6.png";
// import image1 from "../../assets/images/image 4.png";
// import image2 from "../../assets/images/image 7.png";
// import image4 from "../../assets/images/image-.png";
import ReactCarousel, {
  PropertyListings,
} from "../../components/carousel/carousel.component";
import Agent1 from "../../assets/images/Agent1.png";
import Agent2 from "../../assets/images/Agent2.png";
import Agent3 from "../../assets/images/Agent3.png";
import FeaturedAgent from "../../components/featuredAgent/featuredAgent.component";
import NavComponent from "../../components/nav/nav.component";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import mobileAppImage from "../../assets/images/villakrib_app_phone.png";
import FooterComponent from "../../components/footer/footer.component";

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
              <hr className="hr" />
              <h1 className="header-text">Let us walk you home.</h1>
              Exquisit property listing for buyers, large Clientele for sellers,
              location database and price ranging for renting. Availability of
              agents and movers, with a easy means to contact them. Digital
              imagery library to enjoy shopping with us and an advisory team for
              investors. Villakrib brings ease with smiles, making your walk
              home exciting.
              <br />
              <Link to="" className="btn btn-primary fancy-button r">
                Learn More...
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="explor-section">
        <div className=" PropertyListingsDiv">
          <div className="PropertyListings">
            <PropertyListings />
          </div>
        </div>
      </section>
      {/* <WhatWeOffer /> */}

      <div className="ourFeaturedAgents">
        <hr className="hr" />

        <h1 className="header-text">Our Featured Agents</h1>
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
                <button className="btn btn-primary mt-3 fancy-button l float-end">
                  Read Blog...
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="question-section d-flex">
        <div className="row p-3 my-auto w-100 ">
          {" "}
          <div className="col-md-8">
            <h1 className="header-text">Do you Have A Question?</h1>
            We are always avalilabie to answer
          </div>
          <div className="col-4 d-flex">
            <div className="btn btn-primary my-auto fancy-button l r">
              Contact Us
            </div>
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

      <div className="footerComponent">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
