import React from "react";
import { Howl } from "howler";
import { Play, Pause } from 'lucide-react';
import "./track.css";
// import "./al"

export default function Track({
  track,
  isPlaying,
  setIsPlaying,
  selectedMusic,
  setSelectedMusic,
  setTrackDetail,
  onClick
}) {
  const handleClick = () => {
    if (selectedMusic) {
      selectedMusic.stop();
    }

    const newMusic = new Howl({
      src: [track.src],
      autoplay: true,
      loop: false,
    });

    setSelectedMusic(newMusic);
    setIsPlaying(true);
    setTrackDetail({
      tracktitle: track.title,
      trackArtist: track.artist,
      imageUrl: track.imageUrl,
      duration: track.duration,
      album: track.album,
      // trackid: track.id
    });

    if (onClick) onClick();
  };

  return (
    <tr 
      className="text-clr hover:bg-red-800/30 transition cursor-pointer"
      onClick={handleClick}
    >
      <td className="p-4">
        {isPlaying ? (
          <Pause size={20} className="text-white" />
        ) : (
          <Play size={20} className="text-white" />
        )}
      </td>
      <td className="p-4"><img className="imggg" src={track.imageUrl} /></td>
      <td className="p-4">{track.title}</td>
      <td className="p-4">1,222,222</td>
      <td className="p-4">{track.duration}</td>
      <td className="p-4">{track.album}</td>
      
    </tr>
  );
}