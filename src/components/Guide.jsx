import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function () {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-2xl pt-10 mb-10 text-center p-10">
        <img
          src="/guide.jpg"
          alt="Descripción de la imagen"
          className="w-full md:w-[700px] lg:w-[700px] h-auto mx-auto"
        />
        <h2 className="text-xl md:text-2xl lg:text-2xl text-center items-center  px-2 pt-5 uppercase mt-10" id="navStyle">
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
