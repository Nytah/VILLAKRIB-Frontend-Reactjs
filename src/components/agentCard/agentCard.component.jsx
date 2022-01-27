import React from "react";
import "./agentCard.style.css";
import SocialIcon from "../socialIcon/socialIcon";
import background from "../../assets/images/agentsBackground.png";

const AgentCard = ({ name, location, image }) => {
  return (
    <div className="agentCardBox">
      <div className="agentCardTopImage">
        <img src={background} alt="featured Agent" />
      </div>
      <div className="d-flex col-div mt-3">
        <div className="d-flex mx-auto">
          <img src={image} alt="" className="profile-image" />
          <p className="my-auto mx-2">
            {name}
            <p className="my-auto mx-2 col-location-div">
              <i className="bi bi-geo-alt-fill"></i>
              {location}
            </p>
          </p>
        </div>
      </div>
      <div className="d-flex col-div mt-3 col-icon-div">
        <SocialIcon iconClass="icon-blue" />
      </div>
      <div className="d-flex col-div mt-3">
        <div className="d-flex mx-auto">
          <button className="btn btn-primary m-3 fancy-button l">
            <i className="bi bi-envelope-fill"></i>
            <p className="my-auto">Message</p>
          </button>
          <button className="btn btn-primary m-3 fancy-button r">
            <i className="bi bi-telephone-fill"></i>
            <p className="my-auto">Call</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
