import React from "react";
import Track from "../OtherComps/Track";
import { MusicInstances, useMusicContext } from '../MusicContext';

import "./musicPage.css"

const MusicPage = () => {
  const {
    isPlaying,
    setIsPlaying,
    selectedMusic,
    setSelectedMusic,
    setTrackDetail,
    currentTrackIndex,
    setCurrentTrackIndex
  } = useMusicContext();
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 to-red-900 pb-96">
      <table className="w-full p-2 m-2 text-white">
        <thead>
          <tr className="text-left">
            <th className="p-4">#</th>
            <th className="p-4"> </th>
            <th className="p-4">Title</th>
            <th className="p-4">Playing</th>
            <th className="p-4">Play</th>
            <th className="p-4">Album</th>
          </tr>
        </thead>
        <tbody>
          {MusicInstances.map((track, index) => (
            <Track
              key={track.id}
              isPlaying={isPlaying && currentTrackIndex === index}
              setIsPlaying={setIsPlaying}
              selectedMusic={selectedMusic}
              setSelectedMusic={setSelectedMusic}
              setTrackDetail={setTrackDetail}
              track={track}
              onClick={() => setCurrentTrackIndex(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default MusicPage;