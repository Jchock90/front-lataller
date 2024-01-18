import Header from "../Header/Header.jsx";

export default function Banner({ src }) {
  src = "";
  return (
    <>
      <div
        className="bg-center bg-no-repeat bg-cover h-2/5"
        style={{ backgroundImage: `url(${src})` }}
      >
        <Header />
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-6xl text-black pt-10 font-bold rounded-xl p-2 lowercase" id="gothicFont">
              Talleres
            </h2>
            <p className="text-2xl text-black font-thin text-center mx-6" id="navStyle">
              Aquí encontraras el material disponible de nuestros talleres 💘
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
