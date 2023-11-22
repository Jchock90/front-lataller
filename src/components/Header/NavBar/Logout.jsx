import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../../../store/actions/users";
const { signout } = user_actions;

export default function Logout() {
  let dispatch = useDispatch();
  return (
    <>
      <button className="">
        <Anchor
          onClick={() => dispatch(signout())}
          className="w-[120px] md:w-20 lg:w-40 shadow-md border-2 font-semibold text-violetin text-tracking-wider bg-black border-white hover:border-b-4 rounded-sm px-4 py-2 pt-3 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 uppercase"
        >
          Salir
        </Anchor>
      </button>
    </>
  );
}
