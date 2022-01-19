import React from "react";
import "./featuredAgent.style.css";
import vector from "../../assets/images/Vector.png";
import envelope from "../../assets/images/envelope.png";
import phone from "../../assets/images/phone.png";
import SocialIcon from "../socialIcon/socialIcon";

const FeaturedAgent = ({ image, name, location }) => {
  return (
    <div className="featuredAgentBox">
      <div className="featuredAgentImg">
        <img src={image} alt="featured Agent" />
      </div>
      <div className="lowerBox">
        <div className="location">
          <img src={vector} alt="" />
          <p>{location}</p>
        </div>
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="socials">
          <SocialIcon />
        </div>
        <div className="contact">
          <div className="email">
            <img src={envelope} alt="" />
            <p>Message</p>
          </div>
          <div className="phone">
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAgent;
