import React from "react";

import { Linkedin, Facebook, Instagram, Envelope } from "react-bootstrap-icons";
import "./socialIcon.style.css";

const SocialIcon = ({ iconClass, iconContainerClass }) => {
  return (
    <>
      <div className={["socialIcon", iconContainerClass].join(" ")}>
        <a href="#">
          <Linkedin className={iconClass} size={30} />
        </a>
        <a href="#">
          <Facebook className={iconClass} size={30} />
        </a>
        <a href="#">
          <Instagram className={iconClass} size={30} />
        </a>
        <a href="#">
          <Envelope className={iconClass} size={30} />
        </a>
      </div>
    </>
  );
};

SocialIcon.color = {
  iconContainerClass: "",
  iconClass: "",
};

export default SocialIcon;
