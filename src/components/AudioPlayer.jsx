import React from "react";

const AudioPlayer = ({ audioUrl, textAudio }) => {
  return (
    <div className="flex-col justify-center gap-2 items-center">
      <div className="w-[400px] h-20 relative">
        <audio className="w-full h-full" controls>
          <source src={audioUrl} type="audio/mp3" />
          Tu navegador no admite la reproducción de audio.
        </audio>
       {/*  <div className="absolute inset-0 flex items-start pt-2 justify-center text-xl uppercase" id="navStyle">
          <p>{ textAudio }</p>
        </div> */}
      </div>
    </div>
  );
};

export default AudioPlayer;
