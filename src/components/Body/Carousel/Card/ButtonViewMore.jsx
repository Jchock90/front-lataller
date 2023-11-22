import { Link as Anchor } from "react-router-dom";

export default function ButtonViewMore({ id }) {
  return (
    <>
      <Anchor
        to={"/" + id}
        className="bg-violetin flex justify-center text-xl text-white font-medium text-center w-30 h-8 items-center rounded-md p-2 py-3 m-2 border-2 border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300"
      >
        <p>Ver más</p>
      </Anchor>
    </>
  );
}
