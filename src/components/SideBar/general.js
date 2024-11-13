import React from "react";
import './general.css'
import home from './settings.svg'
import trends from './logout.svg'

const General = () => {
    return (
      <div className="general">
        
        <h4> General</h4>
        <div className="item">
            <img className="pic-menu" src={home} />
            <div className="text">
                Settings    
            </div>    
        </div> 
        <div className="item">
            <img className="pic-menu" src={trends} />
            <div className="text">
                Logout   
            </div>    
        </div>
        
      </div>
    );
  };
  
export default General;