import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function () {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-2xl pt-10 mb-10 text-center">
        <img
          src="/guide.jpg"
          alt="Descripción de la imagen"
          className="w-1/2 h-auto mx-auto"
        />
        <h2 className="text-center items-center text-2xl lg:text-4xl px-2 pt-5 uppercase mt-10" id="navStyle">
        Audios para la toma de medidas
        </h2>
        <h2 className="flex justify-center text-xl gap-2 font-bold mt-10" id="navStyle">
            <span className="font-medium" > Parte</span> superior
            </h2>        <div className="">
          <AudioPlayer audioUrl="/superior.mp3"/>
        </div>
        <h2 className="flex justify-center text-xl gap-2 font-bold mt-10" id="navStyle">
            <span className="font-medium" > Parte</span> inferior
            </h2>                <div className="">
          <AudioPlayer audioUrl="/inferior.mp3"/>
        </div>
      </div>
    </>
  );
}
