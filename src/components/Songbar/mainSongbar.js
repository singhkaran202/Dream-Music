import React from "react";
import './mainSongbar.css';
import SongBox from "./songbox";
import { useMusicContext } from '../MusicContext';

const MainSongbar = () => {
  const {
    isPlaying,
    setIsPlaying,
    selectedMusic,
    setSelectedMusic,
    trackDetail,
    currentTrackIndex,
    setCurrentTrackIndex
  } = useMusicContext();
  
  return (
    <div className="mainSongbar">
      <SongBox className="sbox"
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        selectedMusic={selectedMusic}
        setSelectedMusic={setSelectedMusic}
        trackDetail={trackDetail}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
    </div>
  );
};

export default MainSongbar;