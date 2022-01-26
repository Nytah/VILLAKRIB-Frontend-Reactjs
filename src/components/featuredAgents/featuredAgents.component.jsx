import React, { useState } from 'react';
import AgentPic from '../agentPic/agentPic.component';
import AgentCard from '../agentCard/agentCard.component';
import { agentData } from '../../assets/json/imageData';
import "./featuredAgents.style.css";



const FeaturedAgents = () => {

  const [active, setActive] = useState(false);
  const [agentName, setAgentName] = useState("");
  const [agentLocation, setAgentLocation] = useState("");
  const [profileImage, setProfileImage] = useState();


  const handleActive = () => {
    setActive(true);
  };

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
      <div  onClick={() => {handleName(agentData.agent1); handleActive();}}><AgentPic image={agentData.agent1.image} /></div>
      <div  onClick={() => {handleName(agentData.agent2); handleActive();}}><AgentPic image={agentData.agent2.image} /></div>
      <div  onClick={() => {handleName(agentData.agent3); handleActive();}}><AgentPic image={agentData.agent3.image} /></div>
      <div  onClick={() => {handleName(agentData.agent4); handleActive();}}><AgentPic image={agentData.agent4.image} /></div>
      <div  onClick={() => {handleName(agentData.agent5); handleActive();}}><AgentPic image={agentData.agent5.image} /></div>
      <div  onClick={() => {handleName(agentData.agent6); handleActive();}}><AgentPic image={agentData.agent6.image} /></div>
      <div  onClick={() => {handleName(agentData.agent7); handleActive();}}><AgentPic image={agentData.agent7.image} /></div>
      <div  onClick={() => {handleName(agentData.agent8); handleActive();}}><AgentPic image={agentData.agent8.image} /></div>
      <div  onClick={() => {handleName(agentData.agent9); handleActive();}}><AgentPic image={agentData.agent9.image} /></div>
      <div  onClick={() => {handleName(agentData.agent10); handleActive();}}><AgentPic image={agentData.agent10.image} /></div>
      <div  onClick={() => {handleName(agentData.agent11); handleActive();}}><AgentPic image={agentData.agent11.image} /></div>
      <div  onClick={() => {handleName(agentData.agent12); handleActive();}}><AgentPic image={agentData.agent12.image} /></div>
      <div  onClick={() => {handleName(agentData.agent13); handleActive();}}><AgentPic image={agentData.agent13.image} /></div>
     </div>
      {active && <div className='agentCard'>
       <AgentCard name={agentName} location={agentLocation} image={profileImage}/>
      </div>}
    </div>
   );
}
 
export default FeaturedAgents;