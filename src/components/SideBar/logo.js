import React from "react";
import './logo.css'

import logoo from "./logo.svg"
const Logo = () => {
    return (
      <div className="logo">
        <div className="logo-cls">
            <img src={logoo} className="logoo" />
        </div>
        
      </div>
    );
  };
  
export default Logo;