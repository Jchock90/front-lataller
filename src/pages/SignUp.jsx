import axios from "axios";
import { useRef, useState, useEffect } from "react";
import apiUrl from "../../apiUrl";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { read_6_users } = user_actions;

export default function SignUp() {
  const name = useRef("");
  const lastName = useRef("");
  const module = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(read_6_users());
  }, [reload]);

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        module: module.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      const response = await axios.post(apiUrl + "auth/register", data);
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "User registered",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else if (response.data?.payload?.messages) {
        Swal.fire({
          title: "Something went wrong!",
          icon: "error",
          html: response.data.payload.messages
            .map((each) => `<p>${each}</p>`)
            .join(""),
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred during registration.",
        icon: "error",
        showConfirmButton: true,
      });
    }
  }
  return (
    <div>
    <div className="flex flex-col flex-grow items-center justify-center py-10 md:flex-row md:justify-evenly">
        <div className=" w-full max-w-sm border-2  rounded-xl  ">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" id="navStyle">
            <div className="flex flex-col items-center justify-center lg:justify-start">
              <p className=" text-4xl lowercase" id="gothicFont">Registro:</p>
              <div className="m-4">
                {/* <button type="button">
                  <svg
                    className="w-10 h-10 f  text-gray-800 dark:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-black">
              💘
              </p>
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nombre
                </label>
                <input
                  ref={name}
                  type="text"
                  name="name"
                  id="name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Tu nombre"
                ></input>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Apellido
                </label>
                <input
                  ref={lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Tu apellido"
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap mx-2 mb-4">
              <div className="w-full px-3">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  ref={mail}
                  type="text"
                  name="mail"
                  id="mail"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Tu email"
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap mx-2 mb-4">
              <div className="w-full px-3">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Contraseña
                </label>
                <input
                  ref={password}
                  type="password"
                  id="password"
                  name="password"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="******************"
                ></input>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 text-xs font-bold mt-4 mb-2">
                País
              </p>
              <div className="inline-block relative w-64">
                <select
                  ref={module}
                  type="text"
                  name="module"
                  id="module"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option>Argentina</option>
                  <option>Bolivia</option>
                  <option>Brasil</option>
                  <option>Chile</option>
                  <option>Colombia</option>
                  <option>Ecuador</option>
                  <option>Paraguay</option>
                  <option>Perú</option>
                  <option>Uruguay</option>
                  <option>Venezuela</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Foto de perfil
              </label>
              <input
                ref={photo}
                type="text"
                name="photo"
                id="photo"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Foto"
              />
            </div>
            <div className="flex justify-center mt-4 mb-4">
              <input
                type="button"
                className="bg-[#c3a9f7] cursor-pointer w-[120px] h-[60px] text-white font-semibold text-xl rounded-xl py-4 "
                value="Registrate!"
                onClick={handleSignUp}
              />
            </div>
            <div className="flex justify-center tracking-wide text-[#c3a9f7] text-md font-bold mb-2 mt-6">
              <p>Ya tienes una cuenta?</p>
            </div>
            <div className="flex justify-center ">
              <Anchor to="/signin">
                <button className="inline-block align-baseline font-bold text-md text-[#c3a9f7]">
                  Iniciar sesión
                </button>
              </Anchor>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
