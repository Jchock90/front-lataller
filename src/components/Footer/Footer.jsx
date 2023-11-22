/* import FooterCities from "./FooterCities";
import FooterHome from "./FooterHome";
import FooterLogin from "./FooterLogin";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full h-60 min-h-[5vh] mx-auto bg-gray-100 gap-8 lg:min-h-[10vh]">
        <nav className="flex flex-col justify-evenly items-center gap-2 mx-auto" id="navStyle">
          <FooterHome />
          <FooterCities />
          <FooterLogin />
        </nav>
      </footer>
    </>
  );
}
 */

import FooterCities from "./FooterCities";
import FooterHome from "./FooterHome";
import FooterLogin from "./FooterLogin";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center justify-center md:justify-start">
              <img className="w-40 p-4 mx-auto md:mx-0" src="public\logo.png" alt="" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            {/* <div className="mb-8 md:mb-0">
              <h2 className="mb-6 text-xl md:text-xl font-thin text-black case dark:text-black text-center md:text-left uppercase" id="navStyle">
                Recursos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-center md:text-left">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Ejemplo1
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Ejemplo2
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="mb-6 text-xl md:text-xl font-thin text-black dark:text-black text-center md:text-left uppercase" id="navStyle">
                Recursos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-center md:text-left">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Ejemplo 1
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Ejemplo2
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-6 text-2xl md:text-4xl font-thin text-black dark:text-black text-center md:text-left lowercase" id="gothicFont">
                Accesos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-center md:text-left">
                <nav className="flex flex-col justify-left gap-4 text-gray-500 dark:text-gray-400 font-medium">
                  <FooterHome />
                  <FooterCities />
                  <FooterLogin />
                </nav>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="" className="hover:underline">
              Qu4ntic V0id™
            </a>
            . Todos los derechos reservados.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057-1.645-.069-4.849-.069zm0-2.163c-3.259 0-3.667 0.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058-1.689.072-4.948.072-3.259 0-3.668-.014-4.948-.072-4.354-.2-6.782-2.618-6.979-6.98-.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
