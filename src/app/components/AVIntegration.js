import React from 'react';
import AudioVisualizer from './AudioVisualizer';
import FileVisualizer from './FileVisualizer';

const AVintegration = () => {
  return (
    <div>
      <AudioVisualizer audioSrc="path/to/audio.mp3" />
      <FileVisualizer fileUrl="path/to/audio.mp3" />
    </div>
  );
};

export default AVintegration;