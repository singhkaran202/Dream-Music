import React from "react";
import './main_dashboard.css'
import Header from "./Header"
import SongList from "./songsList";
import artist from "./artist.svg"

const MainDashboard = () => {
    return (
      <div className="mainDashboard">
        <Header />
        <img className="artist" src={artist} />
        <SongList />
      </div>
    );
  };
  
export default MainDashboard;