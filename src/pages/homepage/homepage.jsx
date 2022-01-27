import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import houseImage from "../../assets/images/slide1.jpg";
import heroImage from "../../assets/images/slide3.jpg";
import heroBackground from "../../assets/images/Hero-Image.png";
import { PropertyListings } from "../../components/carousel/carousel.component";
import NavComponent from "../../components/nav/nav.component";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import mobileAppImage from "../../assets/images/villakrib_app_phone.png";
import FooterComponent from "../../components/footer/footer.component";
// import { minPrices, maxPrices } from "./prices";
import FeaturedAgents from "../../components/featuredAgents/featuredAgents.component";
// import { minPrices, maxPrices } from "../../assets/json/pricessets/json/prices";
import searchData from "../../assets/json/searchData";
// import axios from "axios";

const HomePage = () => {
  const [searchDataState] = useState(searchData);
  const { minPrices, maxPrices, type } = searchDataState;
  return (
    <>
      <div className="top-nav">
        <NavComponent />
      </div>
      {/*<ReactCarousel /> */}
      <section className="hero-section">
        <div className="hearo-div">
          <img src={heroBackground} className="w-100" alt="" />
          <div className="hero-text-over-image">
            Easy Buy, Easy Life
            <p>Down to dusk, home is best</p>
          </div>
        </div>
        {/* new search section
        responsive with bootstrap grid system
        */}
        <section className="search-section">
          <h1 className="text-center text-white">Search Your Next Home</h1>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 filter-div">
                <div className="d-felx justifiy-content-around">
                  <button className="btn-primary btn">Buy</button>
                  <button className="btn-primary btn">Sell</button>
                  <button className="btn-primary btn">Rent</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location of Search..."
                />
              </div>
              <div className="col-md-2 col-sm-2">
                <select className="form-select">
                  <option value="" disabled selected hidden>
                    Type
                  </option>

                  {type.map((type, index) => {
                    return <option key={index}>{type.lable}</option>;
                    // console.log(type.label);
                  })}
                </select>
              </div>
              <div className="col-md-2 col-sm-2">
                <select className="form-select">
                  <option value="" disabled selected hidden>
                    Min Price
                  </option>
                  {minPrices.map((price, index) => {
                    return <option key={index}>{price}</option>;
                  })}
                </select>
              </div>
              <div className="col-md-2 col-sm-2">
                <select className="form-select">
                  <option value="" disabled selected hidden>
                    Max Price
                  </option>
                  {maxPrices.map((price, index) => {
                    return <option key={index}>{price}</option>;
                  })}
                </select>
              </div>
              <div className="col-md-2 col-sm-2 ">
                <button className="btn btn-primary fancy-button r">
                  {" "}
                  Search...
                </button>
              </div>
              {/* <div className="col-md-3">hi</div> */}
            </div>
          </div>
        </section>
      </section>

      {/* let us walk you home  section */}
      <div className="container walk-home-section">
        <div className="row image-row-house">
          <div className="col-md-6 image-col-house">
            <div className="right-image-house">
              <img src={houseImage} alt="" />
            </div>
          </div>
          <div className="col-md-6  d-flex text-col-house">
            <div className="my-auto">
              <hr className="hr" />
              <h1 className="header-text">Let us walk you home.</h1>
              Exquisit property listing for buyers, large Clientele for sellers,
              location database and price ranging for renting. Availability of
              agents and movers, with a easy means to contact them. Digital
              imagery library to enjoy shopping with us and an advisory team for
              investors. Villakrib brings ease with smiles, making your walk
              home exciting.
              <br />
              <Link to="" className="btn btn-primary fancy-button r">
                Learn More...
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="explor-section">
        <PropertyListings />
      </section>
      <div className="ourFeaturedAgents">
        <hr className="hr" />

        <h1 className="header-text">Our Featured Agents</h1>
      </div>

      <FeaturedAgents />

      <section className="blog-section">
        <div className="image-behaind-text-div">
          <img src={houseImage} alt="" />
          <div className="text-over-image">
            <div className="header">Lorem ipsum dolor sit amet</div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            reprehenderit dignissimos velit maxime iste adipisci non assumenda
            autem, optio quis rerum dolorum sint dolor excepturi quaerat
            obcaecati voluptatibus culpa in.
            <p>
              <button className="btn btn-primary mt-3 fancy-button l float-end">
                Read Blog...
              </button>
            </p>
          </div>
        </div>
      </section>
      <section className="question-section d-flex">
        <div className="row p-3 my-auto w-100 ">
          {" "}
          <div className="col-md-8 ">
            <h1 className="header-text">Do you Have A Question?</h1>
            We are always avalilabie to answer
          </div>
          <div className="col-4 button-col d-flex">
            <div className="btn btn-primary my-auto fancy-button">
              Contact Us
            </div>
          </div>
        </div>
      </section>
      <section className="download-app-section">
        <div className="conta iner">
          <div className="row">
            <div className="col-md-6 download-text">
              <h1 className="header-text">Download our App is free</h1>
              <div className="store-icons d-flex">
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
              </div>
            </div>
            <div className="col-md-6 download-app-image">
              <img src={mobileAppImage} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="footerComponent">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
