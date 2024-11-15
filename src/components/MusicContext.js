import React, { createContext, useState, useContext } from 'react';
export const MusicInstances =  [
    {
      id: "t1",
      src: "/music/1_m.mp3",
      title: "Bilie Jean",
      artist: "Pale Honey",
      album: "Thriller 25 Sup..",
      duration: "5:52",
      imageUrl: "/1.svg",
      playing: "5,199,100"
    },
    {
      id: "t2",
      src: "./music/2_m.mp3",
      title: "Rabbit Rebellion",
      artist: "GeoPoet",
      album: "Thriller 25 Sup...",
      duration: "4:28",
      imageUrl: "/2.svg",
      playing: "12,148,165"
    },
    {
      id: "t3",
      src: "/music/3_m.mp3",
      title: "Maria Tambien",
      artist: "Khruangbin",
      album: "Thriller 25 Sup...",
      duration: "3:10",
      imageUrl: "/3.svg",
      playing: "55,165,100"
    },
    {
      id: "t4",
      src: "/music/4_m.mp3",
      title: "The Moment (Outro)",
      artist: "Bell Witch",
      album: "Bad 25th Anni...",
      duration: "3:06",
      imageUrl: "/4.svg",
      playing: "9,567,178"
    },
    {
      id: "t5",
      src: "/music/5_m.mp3",
      title: "To Be Alone With You",
      artist: "Sufjan Stevens",
      album: "Off the Wall",
      duration: "2:48",
      imageUrl: "/5.svg",
      playing: "48,640,783"
    },
  ];
const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [trackDetail, setTrackDetail] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const value = {
    isPlaying,
    setIsPlaying,
    selectedMusic,
    setSelectedMusic,
    trackDetail,
    setTrackDetail,
    currentTrackIndex,
    setCurrentTrackIndex
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within a MusicProvider');
  }
  return context;
};
