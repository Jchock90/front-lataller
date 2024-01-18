import React from 'react';
import FooterCities from './FooterCities';
import FooterHome from './FooterHome';
import FooterLogin from './FooterLogin';
import FooterGuide from './FooterGuide';

const Footer = () => (
  <footer className="bg-gray-200">
    <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="" className="flex items-center justify-center">
            <img className="w-40 p-2 mx-auto md:mx-0" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="grid grid-cols-1  gap-2 sm:gap-6">
          <div>
            <h2 className="mb-8 text-2xl md:text-4xl font-thin text-black dark:text-black text-center md:text-left lowercase" id="gothicFont">
              Accesos
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-center md:text-left">
              <nav className="flex flex-col justify-left gap-4 text-gray-500 dark:text-gray-400 font-medium">
                <FooterHome />
                <FooterCities />
                <FooterGuide />
                <FooterLogin />
              </nav>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
      <div className="flex justify-center">
        <span className="text-sm mx-auto sm:text-center text-gray-400">
          <a href="" className="hover:underline">
            © 2023 Qu4ntic V0id™. Todos los derechos reservados.
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
