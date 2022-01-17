import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logoImg.jpg";
import "./footer.style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterComponent = () => {
  return (
    <Row className="relative-bottom">
      <Row fluid="md" className="footerContainer">
        <Row>
          <Col xs={4} className="footerContainer-p">
            <div className="footerLogoImg">
              <img className="logoImageBorder" src={logoImg} alt="" />
              <p className="footerLogoText">
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month
              </p>
              <input type="email" placeholder="Email" />
              <input type="button" value="Subcribe" />
              <div className="footerSocialContact">
                <i class="bi bi-linkedin" size={30}></i>
                <i class="bi bi-instagram" size={30}></i>
                <i class="bi bi-facebook" size={30}></i>
                <i class="bi bi-envelope" size={30}></i>
              </div>
            </div>
          </Col>
          <Col className="footerContainer-p">
            <h7>Navigation</h7>
            <div className="footerNavLink">
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
              </ul>
            </div>
          </Col>
          <Col className="footerContainer-p">
            <h7>Categories</h7>
            <div className="footerCatLink">
              <ul>
                <li>
                  <Link to="">Land</Link>{" "}
                </li>
                <li>
                  <Link to="">Houses and Villas</Link>{" "}
                </li>
                <li>
                  <Link to="">Apartments</Link>{" "}
                </li>
                <li>
                  <Link to="">Offices</Link>{" "}
                </li>
                <li>
                  <Link to="">Agents</Link>{" "}
                </li>
                <li>
                  <Link to="">Investors</Link>{" "}
                </li>
                <li>
                  <Link to="">Landlords</Link>{" "}
                </li>
              </ul>
            </div>
          </Col>
          <Col className="footerContainer-p">
            <h8 className="contactHeading">Subscribe</h8>
            <div className="inputContactEmail">
              <input type="email" placeholder="Email" />
              <input type="button" value="Subscribe" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="footerBottom">
            <span>&copy;</span>
            <p className="footerBottomText">Copyright 2022 VillaKrib</p>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default FooterComponent;
