import React from "react";
import "./homepage.css";
import PropCategory from "../../components/PropCategory";
import WhatWeOffer from "../../components/WhatWeOffer";
import image3 from "../../assets/images/image 6.png";
import image1 from "../../assets/images/image 4.png";
import image2 from "../../assets/images/image 7.png";
import image4 from "../../assets/images/image-.png";
import Agent1 from "../../assets/images/Agent1.png";
import Agent2 from "../../assets/images/Agent2.png";
import Agent3 from "../../assets/images/Agent3.png";
import FeaturedAgent from "../../components/featuredAgent/featuredAgent.component";



const HomePage = () => {
  return (
   <>
    <WhatWeOffer />
    <div className='propertyCategories'>
        <h1>Property Categories</h1>
        <p>check out property types that we can offer you</p>
      </div>
      
      <div className="propCategory">
          <PropCategory image={image1} text="Land"/>
          <PropCategory image={image2} text="House & Villa"/>
          <PropCategory image={image3} text="Offices"/>
          <PropCategory image={image4} text="Furnished Appartments"/>
      </div>

      <div className="ourFeaturedAgents">
        <h1>Our Featured Agents</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam.</p>
      </div>

      <div className="featuredAgent">
        <FeaturedAgent image={Agent1} location="Gwagwalada, Abuja" name="John Doe"/>
        <FeaturedAgent image={Agent2} location="Gwagwalada, Abuja" name="John Doe"/>
        <FeaturedAgent image={Agent3} location="Gwagwalada, Abuja" name="John Doe"/>
      </div>
   </>);
};

export default HomePage;