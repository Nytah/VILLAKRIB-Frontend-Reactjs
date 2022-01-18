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
              <div>
                <h8 className="contactHeading">Contacts</h8>
              </div>
              <p className="footerLogoText">
               9 Olaniyi Toki Street Akobo Ojurin, Ibadan, Nigeria
              </p>
              <div className="footerSocialContact">
                <i class="bi bi-linkedin" size={30}></i>
                <i class="bi bi-instagram" size={30}></i>
                <i class="bi bi-facebook" size={30}></i>
                <i class="bi bi-envelope" size={30}></i>
              </div>
            </div>
          </Col>
          <Col className="footerContainer-p">
            <div className="lineOne">
              <div className="footerNavLink">
                <ul>    
                  <h7>Navigation</h7>
                  <li>
                    <Link className="footerListOne" to="">Home</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListOne" to="">Properties</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListOne" to="">Aid</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListOne" to="">Guide</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListOne" to="">About Us</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
            
          </Col>
          <Col className="footerContainer-p">
            <div className="lineTwo">
              <div className="footerCatLink">
                <ul>
                  <h7>Categories</h7>
                  <li>
                    <Link className="footerListTwo" to="">Land</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListTwo" to="">Houses and Villas</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListTwo" to="">Apartments</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListTwo" to="">Offices</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListTwo" to="">Agents</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListTwo" to="">Investors</Link>{" "}
                  </li>
                  <li>
                    <Link className="footerListTwo" to="">Landlords</Link>{" "}
                  </li>
                </ul>
              </div>
              </div>
            
          </Col>
          <Col className="footerContainer-p">
            <h8 className="contactHeading">Subscribe</h8>
            <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
            <div className="inputContactEmail">
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="footerBottom">
            <span>&copy;</span>
            <p className="footerBottomText">Copyright 2022 VillaKrib. All rights reserved.</p>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default FooterComponent;
