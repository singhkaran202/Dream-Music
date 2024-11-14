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
      className=""
      onClick={handleClick}
    >
      <td className="p-4">
        {isPlaying ? (
          
          <Pause size={20} className="" />
        ) : (
          track.id[1]
          // <Play size={20} className="" />
        )}
      </td>
      <td className=""><img className="imggg" src={track.imageUrl} /></td>
      <td className="">{track.title}</td>
      <td className="">1,222,222</td>
      <td className="">{track.duration}</td>
      <td className="album">{track.album}</td>
      
    </tr>
  );
}