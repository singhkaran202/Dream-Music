import React from "react";
import Player from "../OtherComps/Player";
import "./songbox.css";
  
export default function SongBox({ 
  isPlaying, 
  setIsPlaying, 
  selectedMusic, 
  setSelectedMusic,
  trackDetail, 
  currentTrackIndex,
  setCurrentTrackIndex
}) {
  const handleNextTrack = (nextIndex) => {
    if (selectedMusic) {
      selectedMusic.stop();
    }
    setCurrentTrackIndex(nextIndex);
  };
 
  const handlePrevTrack = (prevIndex) => {
    if (selectedMusic) {
      selectedMusic.stop();
    }
    setCurrentTrackIndex(prevIndex);
  };

  return (
    <div className="songbox-wrapper">
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        selectedMusic={selectedMusic}
        setSelectedMusic={setSelectedMusic}
        trackDetail={trackDetail}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
    </div>
  );
} 
  