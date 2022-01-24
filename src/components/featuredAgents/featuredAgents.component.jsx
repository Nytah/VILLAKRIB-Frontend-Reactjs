import React, { useState } from 'react';
import AgentPic from '../agentPic.component.jsx/agentPic.component';
import AgentCard from '../agentCard/agentCard.component';
import { agentData } from '../../assets/json/imageData';
import "./featuredAgents.style.css";



const FeaturedAgents = () => {

  const [active, setActive] = useState(false);
  const [agentName, setAgentName] = useState("");
  const [agentLocation, setAgentLocation] = useState("");
  const [profileImage, setProfileImage] = useState();

  const handleName = (agentInfo) => {
   setAgentName(agentInfo.name);
   handleLocation(agentInfo);
  }

  const handleLocation = (agentInfo) => {
    setAgentLocation(agentInfo.location);
    handleImage(agentInfo)
   }

   const handleImage = (agentInfo) => {
    return setProfileImage(agentInfo.image);
   }

  return ( 
    <div className='featuredAgents'>
     <div image={agentData.agent1.image} className="agentPictures">
      <div  onClick={() => {handleName(agentData.agent1)}}><AgentPic image={agentData.agent1.image} /></div>
      <div  onClick={() => {handleName(agentData.agent2)}}><AgentPic image={agentData.agent2.image} /></div>
      <div  onClick={() => {handleName(agentData.agent3)}}><AgentPic image={agentData.agent3.image} /></div>
      <div  onClick={() => {handleName(agentData.agent4)}}><AgentPic image={agentData.agent4.image} /></div>
      <div  onClick={() => {handleName(agentData.agent5)}}><AgentPic image={agentData.agent5.image} /></div>
      <div  onClick={() => {handleName(agentData.agent6)}}><AgentPic image={agentData.agent6.image} /></div>
      <div  onClick={() => {handleName(agentData.agent7)}}><AgentPic image={agentData.agent7.image} /></div>
      <div  onClick={() => {handleName(agentData.agent8)}}><AgentPic image={agentData.agent8.image} /></div>
      <div  onClick={() => {handleName(agentData.agent9)}}><AgentPic image={agentData.agent9.image} /></div>
      <div  onClick={() => {handleName(agentData.agent10)}}><AgentPic image={agentData.agent10.image} /></div>
      <div  onClick={() => {handleName(agentData.agent11)}}><AgentPic image={agentData.agent11.image} /></div>
      <div  onClick={() => {handleName(agentData.agent12)}}><AgentPic image={agentData.agent12.image} /></div>
      <div  onClick={() => {handleName(agentData.agent13)}}><AgentPic image={agentData.agent13.image} /></div>
     </div>
     <div className='agentCard'>
       <AgentCard name={agentName} location={agentLocation} image={profileImage}/>
     </div>
    </div>
   );
}
 
export default FeaturedAgents;