import React from "react";
import './Header.css'

import search from "./search.svg";
const Header = () => {
    return (
      <div className="header">
        <div className="header-btns">
            <div className="btns">Music</div>
            <div className="btns">Podcasts</div>
            <div className="btns">Live</div>
            <div className="btns">Radio</div>
        </div>
        <img className="search" src={search} />
      </div>
    );
  };
  
export default Header;