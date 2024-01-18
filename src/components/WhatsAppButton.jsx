// WhatsAppButton.jsx

import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza '123456789' con tu número de teléfono
    // y '¡Hola! ¿Cómo puedo ayudarte?' con el mensaje que desees enviar
    const phoneNumber = '+543434629839';
    const message = encodeURIComponent('¡Hola! ¿Cómo puedo ayudarte?');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleWhatsAppClick}
        className="w-[350px] h-[120px] text-xl shadow-md border-2 font-semibold text-white text-tracking-wider bg-violetin border-white hover:border-b-4 hover:border-[#b7f708] rounded-xl px-4 py-2 pt-3 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-black"
        id='navStyle'
      >
        <span>Contactate por WhatsApp</span>
        <img
          src="/whatsapp.png" // Reemplaza con el nombre real de tu imagen
          alt="WhatsApp"
          className="w-16 h-16"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
