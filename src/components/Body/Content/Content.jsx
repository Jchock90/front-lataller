import ButtonCallTo from "./ButtonCallTo";

export default function Content(src) {
  src = "public/fondonav.png";
  return (
    <>
      <div
        className="flex flex-col items-center mb-16 pb-5 gap-10 lg:w-1/2 m-2 p-2"
        style={{ backgroundImage: `url(${src})` }}
      >
        <h1
          className="flex justify-center font-bold text-[#1C1C1C] p-2 lowercase text-3xl md:text-4xl xl:text-5xl"
          id="gothicFont"
        >
          La Taller Blog!
        </h1>
        <p className="flex text-center p-0 font-thin text-2xl text-[#1C1C1C]">
          Espacio equipado para guiarte a que vos mismx, estampes, moldees,
          cortes y cosas tu ropa amada💘
        </p>
        <ButtonCallTo />
      </div>
    </>
  );
}
