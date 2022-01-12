import React from 'react';
import "./featuredAgent.style.css";
import vector from "../../assets/images/Vector.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";
import envelope from "../../assets/images/envelope.png";
import phone from "../../assets/images/phone.png";



const FeaturedAgent = ({image, name, location}) => {
  return ( 
    <div className='featuredAgentBox'>
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
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={email} alt="" />
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
}
 
export default FeaturedAgent;