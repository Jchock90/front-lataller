import { Link as Anchor } from "react-router-dom";

export default function ButtonViewMore({ id }) {
  return (
    <>
      <Anchor
        to={"/" + id}
        className="w-[100px] h-[40px] shadow-md border-2 font-semibold  text-white text-tracking-wider text-center  bg-violetin border-white hover:border-b-4 hover:border-[#b7f708] rounded-xl flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-black"
      >
        Ver más
      </Anchor>
    </>
  );
}
