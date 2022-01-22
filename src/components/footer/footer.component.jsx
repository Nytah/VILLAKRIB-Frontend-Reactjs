import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logoImg.jpg";
import "./footer.style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialIcon from "../../components/socialIcon/socialIcon";

const FooterComponent = () => {
  return (
    <Row className="navbar-fixed-bottom footerContainer">
      {/* <Row className="container-sm footerContainer"> */}
      {/* <Row className="overflow-auto"> */}
      <Col className="col-md-4 footerContainer-p">
        <div className="footerLogoImg">
          <img className="logoImageBorder mb-4" src={logoImg} alt="" />
          <p className="footerLogoText">
            Receive updates, hot deals, tutorials, discounts sent straight to
            your inbox every month
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
          <div className="footerSocialContact">
            <SocialIcon />
          </div>
        </div>
      </Col>
      <Col className="col-md-2 footerContainer-p">
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
      </Col>
      <Col className=" col-md-2 footerContainer-p">
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
      </Col>
      <Col className="col-md-4 footerContainer-p">
        {/* NO need for a diffent name and style */}
        {/* <h2 className="contactHeading">Contact</h2> */}
        <h2 className="text-center">Contact</h2>
        <div className="inputContactEmail">
          <input type="email" placeholder="Email" className="mt-2 px-3 py-2" />
          <textarea
            type="text"
            placeholder="Message"
            rows={4}
            className="mt-2 px-3 py-2"
          />
          <input
            type="button"
            value="Send"
            className="mt-2 mx-0 p-2 btn btn-danger"
          />
        </div>
      </Col>
      {/* </Row> */}
      {/* </Row> */}
      <Col className="footerBottom text-center pt-2 col-12">
        {/* why?? text-xs-center */}
        {/* no need for p tad self  */}
        {/* <p className="text-center footerBottomText"> */}
        &copy; Copyright {new Date().getFullYear()} VillaKrib
        {/* </p> */}
      </Col>
    </Row>
  );
};

export default FooterComponent;
