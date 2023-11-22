import { Link as Anchor } from "react-router-dom";
import "../../../App.css"


export default function Home() {
  return (
    <>
      <Anchor
        to="/"
        className="w-[120px] md:w-20 lg:w-40 shadow-md border-2 font-semibold text-white text-tracking-wider bg-violetin border-white hover:border-b-4 rounded-sm px-4 py-2 pt-3 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300"
      >
        Inicio
      </Anchor>
    </>
  );
}
