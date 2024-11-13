import React from "react";
import './menu.css'

import home from './home.svg'

import trends from './trends.svg'

import Library from './library.svg'

import Discover from './discover.svg'


const Menu = () => {
    return (
      <div className="menu">
        {/* <h1>Menu Here!</h1>
         */}
        <h4> Menu</h4>
        <div className="item">
            <img className="pic-menu" src={home} />
            <div className="text">
                Home    
            </div>    
        </div> 
        <div className="item">
            <img className="pic-menu" src={trends} />
            <div className="text">
                Trends    
            </div>    
        </div>
        <div className="item">
            <img className="pic-menu" src={Library} />
            <div className="text">
                Library    
            </div>    
        </div>
        <div className="item">
            <img className="pic-menu" src={Discover} />
            <div className="text">
                Discover    
            </div>    
        </div>   
      </div>
    );
  };
  
export default Menu;