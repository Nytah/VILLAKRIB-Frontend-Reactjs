import React from 'react';
import "./PropCategory.css";


const PropCategory = ({image, text}) => {
  return ( 
    <div className="propCatBox">
      <div className="propCatImg">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
   );
}
 
export default PropCategory;