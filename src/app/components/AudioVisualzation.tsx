"use client"
import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

// Define the interface for the props
interface AudioVisualzationProps {
  audioSrc: string;
}

const AudioVisualzation: React.FC<AudioVisualzationProps> = ({ audioSrc }) => {

  let audioSource = audioSrc;
  if (audioSrc === "commercial") {
    audioSource = "/audio/Ian_Kleinfeld_Commercial_Demo.mp3";
  } else if (audioSrc ==="character"){
    audioSource =  "/audio/Ian_Kleinfeld_Character_Game_Animation_Demo.mp3"
  }
  const waveformRef = useRef(null);

  useEffect(() => {
    if (waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#4F4A85',
        progressColor: '#383351',
      });

      wavesurfer.load(audioSource);
      wavesurfer.load(audioSrc);
    }
  }, [audioSrc]);

  return <div id="waveform" ref={waveformRef}></div>;
};

export default AudioVisualzation;