import React from "react";
import './songsList.css';
import MusicPage from "./MusicPage";
import { useMusicContext } from '../MusicContext';

const SongsList = () => {
  const {
    isPlaying,
    setIsPlaying,
    selectedMusic,
    setSelectedMusic,
    setTrackDetail,
    currentTrackIndex,
    setCurrentTrackIndex
  } = useMusicContext();
 
  console.log('SongsList render:', {
    isPlaying,
    selectedMusic,
    currentTrackIndex,
    setSelectedMusicType: typeof setSelectedMusic,
    setIsPlayingType: typeof setIsPlaying,
    setTrackDetailType: typeof setTrackDetail
  });

  return (
    <div className="songsList">
      <MusicPage
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        selectedMusic={selectedMusic}
        setSelectedMusic={setSelectedMusic}
        setTrackDetail={setTrackDetail}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
    </div>
  );
};

export default SongsList;