import React from "react";
import './mainSidebar.css'

import Logo from "./logo"
import General from "./general"
import Menu from "./menu"


const MainSidebar = () => {
    return (
      <div className="mainSidebar">
        
        <Logo />
        <Menu />
        <General />
      </div>
    );
  };
  
export default MainSidebar;