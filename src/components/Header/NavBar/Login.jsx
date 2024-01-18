import { Link as Anchor } from 'react-router-dom';

export default function Login() {
  return (
    <>
        <button className="">
            <Anchor to="/signin" className="w-[120px] md:w-25 lg:w-40 shadow-md border-2 font-semibold text-violetin text-tracking-wider hover:text-[#b7f708] bg-black border-white hover:border-b-4 rounded-xl px-4 py-2 pt-3  flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 uppercase">
                Ingreso
            </Anchor>
        </button>
    </>
  );
}
