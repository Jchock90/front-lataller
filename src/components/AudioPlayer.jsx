import React from "react";

const AudioPlayer = ({ audioUrl }) => {
  return (
    <audio controls>
      <source src={audioUrl} type="video/mpeg" />
      Tu navegador no admite la reproducción de audio.
    </audio>
  );
};

export default AudioPlayer;
