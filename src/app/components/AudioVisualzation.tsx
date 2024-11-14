"use client"
import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

// Define the interface for the props
interface AudioVisualzationProps {
  audioSrc: string;
}

const AudioVisualzation: React.FC<AudioVisualzationProps> = ({ audioSrc }) => {
    const waveformRef = useRef(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);

    useEffect(() => {
        if (waveformRef.current) {
          const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            dragToSeek: true,
            waveColor: '#3b588a',
            progressColor: '#383351',
          });
    
          wavesurfer.load(audioSource);
          wavesurfer.load(audioSrc);
        }
      }, [audioSrc]);

  const handlePlay = () =>{
    if (wavesurferRef.current) {
        wavesurferRef.current.playPause();
        console.log("play")
      }
  }

  const handleStop = () =>{
    if (wavesurferRef.current) {
        wavesurferRef.current.stop();
        console.log("stop")
      }
  }

  const handleDownload = () =>{
    document.getElementById('download')
  }

  let audioSource = audioSrc;
  if (audioSrc === "commercial") {
    audioSource = "../audio/Ian_Kleinfeld_Commercial_Demo.mp3";
  } else if (audioSrc ==="character"){
    audioSource =  "../audio/Ian_Kleinfeld_Character_Game_Animation_Demo.mp3"
  }




  return (
  <>
  <section className='demo'>
  <div id="waveform" ref={waveformRef}></div>
  <button className="btn" onClick={handlePlay}>Play</button> <button className="btn" onClick={handleStop}>Stop</button> <a className="btn dl" href={audioSource} download>Download</a>
  </section>
  </>
  )
};

export default AudioVisualzation;