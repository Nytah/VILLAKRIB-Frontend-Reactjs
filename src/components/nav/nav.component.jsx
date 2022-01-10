import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import "./nav.style.css";

const NavComponent = () => {
  return (
    <>
      <div id="nav">
        <div className="logo-div">
          <img src={logoImg} alt="" />
        </div>
        <div className="link-div">
          <ul>
            <li>
              <Link to="">Hi</Link>{" "}
            </li>
            <li>
              <Link to="">Hi</Link>{" "}
            </li>
            <li>
              <Link to="">Hi</Link>{" "}
            </li>
            <li>
              <Link to="">Hi</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavComponent;
