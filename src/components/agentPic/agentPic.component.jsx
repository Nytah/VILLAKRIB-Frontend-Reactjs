import React from 'react';
import "./agentPic.style.css";
import { agentData } from '../../assets/json/imageData';

const AgentPic = ({image}) => {
  return ( 
    <div className='agentPic'>
      <img src={image} alt="" />
    </div>
   );
}
 
export default AgentPic;  