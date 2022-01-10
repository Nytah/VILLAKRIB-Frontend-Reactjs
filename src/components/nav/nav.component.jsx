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
              <Link to="">Home</Link>{" "}
            </li>
            <li>
              <Link to="">Properties</Link>{" "}
            </li>
            <li>
              <Link to="">Aid</Link>{" "}
            </li>
            <li>
              <Link to="">Guide</Link>{" "}
            </li>
            <li>
              <Link to="">About Us</Link>{" "}
            </li>
            <li>
              <Link to="">
                Login/Resgister <i class="bi bi-person-circle"></i>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavComponent;
