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
    <div className="">
      <div className="cl">
        <div className="cl1">Popular</div>
        <div className="cl2">See All</div>
      </div>
      <table className="">
        <thead>
          <tr className="">
            <th className="">#</th>
            <th className=""> </th>
            <th className="">TITLE</th>
            <th className="">PLAYING</th>
            <th className="">TIME</th>
            <th className="album">ALBUM</th>
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