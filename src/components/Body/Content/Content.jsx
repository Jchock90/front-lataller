import ButtonCallTo from "./ButtonCallTo";

export default function Content() {
  const src = "/handcloud.png";

  return (
    <div
      className="relative flex flex-col items-center py-5 mb-10 lg:w-1/2 my-2 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
        width: "100%",
        height: "300px", // Ajusta la altura según sea necesario
      }}
    >
      <h1
        className="text-[#1C1C1C] text-center font-bold py-2 lowercase text-4xl md:text-4xl xl:text-5xl"
        id="gothicFont"
      >
        Guía de medidas
      </h1>
      <p className="text-[#1C1C1C] text-center font-thin text-xl md:text-2xl lg:text-2xl xl:text-2xl">
        Con audios instructivos para que puedas hacer tus mediciones de manera correcta 💘
      </p>
      <div className="absolute bottom-0">
        <ButtonCallTo />
      </div>
    </div>
  );
}
