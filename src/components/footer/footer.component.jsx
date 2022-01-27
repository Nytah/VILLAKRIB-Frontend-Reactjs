import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logoImg.jpg";
import "./footer.style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialIcon from "../../components/socialIcon/socialIcon";

const FooterComponent = ({}) => {
  return (
    <Row className="navbar-fixed-bottom">
      <Row className="container-sm footerContainer">
        <Row className="overflow-auto">
          <Col className="col-md-4 footerContainer-p">
            <div className="footerLogoImg">
              <img className="logoImageBorder mb-4" src={logoImg} alt="" />
              <h2 className="contactHeading">Contacts</h2>
              <p className="footerLogoText">
                 9 Olaniyi Toki Street Akobo Ojurin, Ibadan, Nigeria
              </p>
              <div className="footerSocialContact">
                <SocialIcon iconContainerClass="mt-4" />
              </div>
            </div>
          </Col>
          <Col className="col-md-2 footerContainer-p">
            <div className="secondPart">
              <h2>Navigation</h2>
              <div className="footerNavLink">
                <ul>
                  <li>
                    <Link className="textLink" to="">
                      Home
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Properties
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Aid
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Guide
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      About Us
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className=" col-md-2 footerContainer-p">
            <div className="thirdPart">
              <h2>Categories</h2>
              <div className="footerCatLink">
                <ul>
                  <li>
                    <Link className="textLink" to="">
                      Land
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Houses and Villas
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Apartments
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Offices
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Agents
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Investors
                    </Link>{" "}
                  </li>
                  <li>
                    <Link className="textLink" to="">
                      Landlords
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 footerContainer-p">
              <div className="thirdSection">
                <h2 className="contactHeading">Subscribe</h2>
                <p className="footerLogoText">
                  Receive updates, hot deals, tutorials, discounts sent straight
                  to your inbox every month
                </p>
                <div className="flex-row">
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-1 subscribe-email"
                  />
                  <input
                    type="button"
                    value="Subscribe"
                    className="btn btn-danger ml-4 py-2"
                  />
                </div>
              </div>
          </Col>
        </Row>
      </Row>
      <Col className="footerBottom">
        <p className="text-xs-center footerBottomText">
          &copy; Copyright {new Date().getFullYear()} VillaKrib
        </p>
      </Col>
    </Row>
  );
};

export default FooterComponent;
