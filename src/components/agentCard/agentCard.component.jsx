import React from 'react';
import "./agentCard.style.css";
import vector from "../../assets/images/Vector.png";
import envelope from "../../assets/images/envelope.png";
import phone from "../../assets/images/phone.png";
import SocialIcon from "../socialIcon/socialIcon";
import background from "../../assets/images/agentsBackground.png"


const AgentCard = ({name, location, image}) => {
  return ( 
    <div className="featuredAgentBox">
      <div className="featuredAgentImg">
        <img src={background} alt="featured Agent" />
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
          <SocialIcon iconClass="icon-blue" />
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

export default AgentCard;