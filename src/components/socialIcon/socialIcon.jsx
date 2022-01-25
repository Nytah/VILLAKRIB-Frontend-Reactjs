import React from "react";

import { Linkedin, Facebook, Instagram, Envelope } from "react-bootstrap-icons";
import "./socialIcon.style.css";

const SocialIcon = ({ iconClass }) => {
  return (
    <>
      <div className="socialIcon">
        <a href="/">
          <Linkedin className={iconClass} size={30} />
        </a>
        <a href="/">
          <Facebook className={iconClass} size={30} />
        </a>
        <a href="/">
          <Instagram className={iconClass} size={30} />
        </a>
        <a href="/">
          <Envelope className={iconClass} size={30} />
        </a>
      </div>
    </>
  );
};

SocialIcon.color = {
  iconClass: "",
};

export default SocialIcon;
