import React from 'react';
import "./agentCard.style.css";
import vector from "../../assets/images/Vector.png";
import envelope from "../../assets/images/envelope.png";
import phone from "../../assets/images/phone.png";
import SocialIcon from "../socialIcon/socialIcon";
import background from "../../assets/images/agentsBackground.png";


const AgentCard = ({name, location, image}) => {
  return ( 
    <div className="agentCardBox">
      <div className="featuredAgentbackground">
        <img src={background} alt="featured Agent" />
      </div>
      <div className="lowerCardBox">
        <div className="picName">
          <img src={image} alt="" />
          <p>{name}</p>
        </div>
        <div className="locationDetails">
          <img src={vector} alt="" />
          <p>{location}</p>
        </div>
        
        <div className="socialDetails">
          <SocialIcon iconClass="icon-blue" />
        </div>
        <div className="contactDetails">
          <div className="emailInfo">
            <img src={envelope} alt="" />
            <p>Message</p>
          </div>
          <div className="phoneNum">
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;