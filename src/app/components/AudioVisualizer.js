"use client"
import React, { useEffect, useRef } from 'react';
import { Visualizer } from 'react-audio-visualizer';

const AudioVisualizer = ({ audioSrc }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaElementSource(audioRef.current);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      // Start visualization
      // ...
    }
  }, [audioSrc]);

  return (
    <div>
      <audio ref={audioRef} src={audioSrc} controls />
      <Visualizer analyser={analyser} /> 
    </div>
  );
};

export default AudioVisualizer;
