import React from 'react';
import "./WhatWeOffer.css";
import houseOne from "../assets/images/house open 1.png";
import business from "../assets/images/undraw-business.png";
import smartHome from "../assets/images/undraw-smart-home.png";



const WhatWeOffer = () => {
  return ( 
    <div className="container">
      <div className="whatWeOffer">
        <h1 className='whatWeOffer-header'>What we offer</h1>
        <p className='whatWeOffer-para'>A large database of clientel listings, registered property owners and agent from across the real estate sector in every part of Nigeria. Comprehensive information on property listings, digital imaging and automated apartment matching, plus a bonus of social media advertising for property owners and much more.</p>
      </div>
      <div className="find">
        <div className="findYourSpec">
          <h1 className='header'>Find your spec with one click</h1>
          <p className='para'>Our wide database covers location search and type of property with each property price range. so you can set your specified needs and we will deliver exactly what you desire, where you desire with just one click. From renting and shortlets to buying, selling, investment management, Villakrib is your go to guide.</p>
          <ul>
            <li>100% Money Guarantee</li>
            <li>Super & Perfect Place</li>
            <li>Effective & Best Price</li>
            <li> Friendly & ovely Area</li>
          </ul>
          <div className="btn">
            <button>Find Property</button>
          </div>
        </div>

        <img className='image' src={houseOne} alt="Open House" />
      </div>

      <div className="transact">
        <img className="imageTwo" src={business} alt="business" />

        <div className="transactSeemlessly">
          <h1 className='headerTwo'>Transact Seemlessly on Villakrib</h1>
          <p className='paraTwo'>We offer save and secure transactions over our platform, direct link to information regarding property authentication, availability of documentations from land and surveys, google mapping and more. Contact clients over our platform via villakrib calls/chats or whatsapp/direct call as an option; your choices are limitless.</p>
          <div className='btnTwo'>
            <button>Find Out More</button>
          </div>
        </div>
      </div>

      <div className="advisory">
        <div className="advisoryAgent">
          <h1 className='header'>Advisory, Agents or Movers...</h1>
          <p className="paraThree">Need an Agent? Villakrib has you covered with contacts to multiple agents across Nigeria. Do yo require a mover? Villakrib can help you transport your equipments, personal belongings to your new abode. Or do you need advisory on investments? Fret not! VillaKrib has the best investment advisory team that can tell you when, how & where to invest in real estate. </p>
          <div className="btnThree">
            <button>Consult</button>
          </div>
        </div>

        <img className='image' src={smartHome} alt="Undraw smart home" />
      </div>

    </div>
   );
}
 
export default WhatWeOffer;