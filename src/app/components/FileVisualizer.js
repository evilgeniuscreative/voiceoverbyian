import React from 'react';
import WaveSurfer from 'react-wavesurfer.js';

const FileVisualizer = ({ fileUrl }) => {
  return (
    <WaveSurfer
      audioFile={fileUrl}
    />
  );
};

export default FileVisualizer;