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
   handleLocation(agentData.agent1);
  }

  const handleLocation = (agentInfo) => {
    setAgentLocation(agentInfo.location);
    handleImage(agentData.agent1)
   }

   const handleImage = (agentInfo) => {
    return setProfileImage(agentInfo.image);
   }

  return ( 
    <div className='featuredAgents'>
     <div onClick={() => {handleName(agentData.agent1)}} image={agentData.agent1.image} className="agentPictures">
        <AgentPic image={agentData.agent1.image} />
        <AgentPic image={agentData.agent2.image} />
        <AgentPic image={agentData.agent3.image} />
        <AgentPic image={agentData.agent4.image} />
        <AgentPic image={agentData.agent5.image} />
        <AgentPic image={agentData.agent6.image} />
        <AgentPic image={agentData.agent7.image} />
        <AgentPic image={agentData.agent8.image} />
        <AgentPic image={agentData.agent9.image} />
        <AgentPic image={agentData.agent10.image} />
        <AgentPic image={agentData.agent11.image} />
        <AgentPic image={agentData.agent12.image} />
        <AgentPic image={agentData.agent13.image} />
     </div>
     <div className='agentCard'>
       <AgentCard name={agentName} location={agentLocation} image={profileImage}/>
     </div>
    </div>
   );
}
 
export default FeaturedAgents;