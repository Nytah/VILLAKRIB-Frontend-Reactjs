import React from "react";
import PropTypes from "prop-types";

import { Linkedin, Facebook, Instagram, Envelope } from "react-bootstrap-icons";
import "./socialIcon.style.css";

const SocialIcon = ({ iconClass, iconContainerClass }) => {
  return (
    <>
      <div className={["socialIcon", iconContainerClass].join(" ")}>
        <Linkedin className={iconClass} size={30} />
        <Facebook className={iconClass} size={30} />
        <Instagram className={iconClass} size={30} />
        <Envelope className={iconClass} size={30} />
      </div>
    </>
  );
};

SocialIcon.color = {
  iconContainerClass: "",
  iconClass: "",
};

export default SocialIcon;
