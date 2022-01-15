import React from "react";
import "./homepage.css";
import PropCategory from "../../components/PropCategory";
import WhatWeOffer from "../../components/WhatWeOffer";
import image3 from "../../assets/images/image 6.png";
import image1 from "../../assets/images/image 4.png";
import playstore from "../../assets/images/playstore.jpg";
import appstore from "../../assets/images/appstore.jpg";
import mobileAppImage from "../../assets/images/villakrib app phone.jpg";
import image2 from "../../assets/images/image 7.png";
import houseImage from "../../assets/images/2.jpeg";
import image4 from "../../assets/images/image-.png";
import Agent1 from "../../assets/images/Agent1.png";
import Agent2 from "../../assets/images/Agent2.png";
import Agent3 from "../../assets/images/Agent3.png";
import FeaturedAgent from "../../components/featuredAgent/featuredAgent.component";
import FooterComponent from "../../components/footer/footer.component";

const HomePage = () => {
  return (
    <>
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
      </div>

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
      {/* blue color : #26539F
//       fade blue color : #164697
//       liner-gridant : #164697 ,5D82BA
//       botten color : #0B4095
//       botten color : #1A53B8
//       txet color : #164697
// font family : Montserrat
// header font size: 30
// font family :Istok Web;
// text-font size: 20
//       background: rgb(22,70,151);
// background: linear-gradient(180deg, rgba(22,70,151,1) 17%, rgba(22,70,151,1) 31%, rgba(93,130,186,1) 100%);
      */}
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
      <FooterComponent />
    </>
  );
};

export default HomePage;
