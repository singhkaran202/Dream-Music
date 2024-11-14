import React, { createContext, useState, useContext } from 'react';

export const MusicInstances =  [
    {
      id: "t1",
      src: "/music/1.mp3",
      title: "Khaayi Kasam",
      artist: "Pale Honey",
      album: "Thriller 25 Sup..",
      duration: "5:52",
      imageUrl: "/1.svg",
    },
    {
      id: "t2",
      src: "./music/2.mp3",
      title: "Rabbit Rebellion",
      artist: "GeoPoet",
      album: "Thriller 25 Sup...",
      duration: "8:32",
      imageUrl: "/2.svg",
    },
    {
      id: "t3",
      src: "/music/Khruangbin - Maria También.mp3",
      title: "Maria Tambien",
      artist: "Khruangbin",
      album: "Thriller 25 Sup...",
      duration: "3:10",
      imageUrl: "/3.svg",
    },
    {
      id: "t4",
      src: "/music/1_4 - The Moment (Outro) - Bell Witch (128).mp3",
      title: "The Moment (Outro)",
      artist: "Bell Witch",
      album: "Bad 25th Anni...",
      duration: "3:06",
      imageUrl: "/4.svg",
    },
    {
      id: "t5",
      src: "/music/Sufjan Stevens - To Be Alone With You.mp3",
      title: "To Be Alone With You",
      artist: "Sufjan Stevens",
      album: "Off the Wall",
      duration: "2:48",
      imageUrl: "/5.svg",
    },
    // {
    //   id: "t9",
    //   src: "/music/01 Song Seven.mp3",
    //   title: "Song Seven",
    //   artist: "Interpol",
    //   album: "Album Name",
    //   duration: "4:52",
    //   imageUrl: "/album-art.jpg",
    // },
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
