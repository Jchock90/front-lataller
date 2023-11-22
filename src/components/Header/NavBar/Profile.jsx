import { Link as Anchor } from "react-router-dom";

export default function Login() {
  return (
    <>
      <button className="py-2 px-4">
        <Anchor
          to="/profile"
          className="flex justify-between items-center gap-4 text-2xl text-black font-medium" id="navStyle">
          Perfil
        </Anchor>
      </button>
    </>
  );
}
