import React from 'react';

const InstagramButton = () => {
  const handleInstagramClick = () => {
    // Reemplaza 'nombre_usuario' con tu nombre de usuario de Instagram
    const instagramLink = 'https://www.instagram.com/lataller___laboratoriodeoficio/';

    window.open(instagramLink, '_blank');
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleInstagramClick}
        className="w-[350px] h-[120px] text-xl shadow-md border-2 font-semibold text-white text-tracking-wider bg-violetin border-white hover:border-b-4 hover:border-[#b7f708] rounded-xl px-4 py-2 pt-3 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-black"
        id='navStyle'
      >
        <span>Síguenos en Instagram</span>
        <img
          src="/instagram.png" // Reemplaza con el nombre real de tu imagen de Instagram
          alt="Instagram"
          className="w-16 h-16 ml-2"
        />
      </button>
    </div>
  );
};

export default InstagramButton;
