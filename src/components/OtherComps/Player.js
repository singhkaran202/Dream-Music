import React, { useState, useEffect } from 'react';
import { Repeat, Shuffle, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Howl } from 'howler';
import { MusicInstances, useMusicContext } from '../MusicContext';
import "./player.css"
  const Player = () => {
    const {
      isPlaying,
      setIsPlaying,
      selectedMusic,
      setSelectedMusic,
      trackDetail,
      currentTrackIndex,
      setCurrentTrackIndex
    } = useMusicContext();

  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledQueue, setShuffledQueue] = useState([]);

  useEffect(() => {
    if (isShuffled) {
      const newQueue = [...Array(MusicInstances.length).keys()];
      for (let i = newQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newQueue[i], newQueue[j]] = [newQueue[j], newQueue[i]];
      }
      setShuffledQueue(newQueue);
    }
  }, [isShuffled]);

  const handleNext = () => {
    let nextIndex;
    if (isShuffled) {
      const currentShuffleIndex = shuffledQueue.indexOf(currentTrackIndex);
      nextIndex = shuffledQueue[(currentShuffleIndex + 1) % MusicInstances.length];
    } else {
      nextIndex = (currentTrackIndex + 1) % MusicInstances.length;
    }
    
    const nextTrack = MusicInstances[nextIndex];
    const newMusic = new Howl({
      src: [nextTrack.src],
      autoplay: true,
      loop: false,
    });
    
    if (selectedMusic) {
      selectedMusic.stop();
    }
    
    setSelectedMusic(newMusic);
    setIsPlaying(true);
    // onNextTrack(nextIndex);
    setCurrentTrackIndex(nextIndex);
  };

  const handlePrev = () => {
    let prevIndex;
    if (isShuffled) {
      const currentShuffleIndex = shuffledQueue.indexOf(currentTrackIndex);
      prevIndex = shuffledQueue[(currentShuffleIndex - 1 + MusicInstances.length) % MusicInstances.length];
    } else {
      prevIndex = (currentTrackIndex - 1 + MusicInstances.length) % MusicInstances.length;
    }
    
    const prevTrack = MusicInstances[prevIndex];
    const newMusic = new Howl({
      src: [prevTrack.src],
      autoplay: true,
      loop: false,
    });
    
    if (selectedMusic) {
      selectedMusic.stop();
    }
    
    setSelectedMusic(newMusic);
    setIsPlaying(true);
    // onPrevTrack(prevIndex);
    setCurrentTrackIndex(prevIndex);
  };

  useEffect(() => {
    let timerInterval;
    if (selectedMusic) {
      const updateTimer = () => {
        const seekTimer = Math.round(selectedMusic.seek());
        setCurrentTime(seekTimer);
      };
      timerInterval = setInterval(updateTimer, 1000);

      selectedMusic.on('end', () => {
        if (isLooping) {
          selectedMusic.seek(0);
          selectedMusic.play();
        } else {
          handleNext();
        }
      });
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [selectedMusic, isLooping]);

  function togglePlay() {
    if (!selectedMusic) return;
    if (isPlaying) {
      selectedMusic.pause();
    } else {
      selectedMusic.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleSeekChange(e) {
    const seekTime = parseInt(e.target.value, 10);
    setCurrentTime(seekTime);
    selectedMusic.seek(seekTime);
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }


return (
  <div className="player-container">
    <div className="player-content">
      <div className="track-info">
        {trackDetail?.imageUrl && (
          <div className="track-image">
            <img src={trackDetail.imageUrl} alt={trackDetail.tracktitle} />
          </div>
        )}
        <div className="track-details">
          <h2>{trackDetail?.tracktitle || 'Select a track'}</h2>
          <p>{trackDetail?.trackArtist}</p>
        </div>
      </div>

      <div className="player-controls">
        <div className="time-controls">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            className="seek-bar"
            min="0"
            max={selectedMusic ? selectedMusic.duration() : 0}
            value={currentTime || 0}
            onChange={handleSeekChange}
          />
          <span>{selectedMusic ? formatTime(selectedMusic.duration()) : '00:00'}</span>
        </div>

        <div className="control-buttons">
          <button onClick={() => setIsShuffled(!isShuffled)}>
            <Shuffle size={20} className={isShuffled ? 'active' : ''} />
          </button>
          <button onClick={handlePrev}>
            <SkipBack size={24} />
          </button>
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button onClick={handleNext}>
            <SkipForward size={24} />
          </button>
          <button onClick={() => setIsLooping(!isLooping)}>
            <Repeat size={20} className={isLooping ? 'active' : ''} />
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default Player;