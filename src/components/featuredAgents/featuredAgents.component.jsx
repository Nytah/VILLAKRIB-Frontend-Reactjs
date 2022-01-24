import React from 'react';
import AgentPic from '../agentPic/agentPic.component';
import AgentCard from '../agentCard/agentCard.component';
import { agentData } from '../../assets/json/imageData';
import "./featuredAgents.style.css";



const FeaturedAgents = () => {
  return ( 
    <div className='featuredAgents'>
     <div className="agentPictures">
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
    </div>
   );
}
 
export default FeaturedAgents;