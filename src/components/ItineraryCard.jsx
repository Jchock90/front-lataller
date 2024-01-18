import React, { useState } from "react";
import LikeButton from "./LikeButton";
import ExpandButton from "./ExpandButton";
import PdfViewer from "./PdfViewer";
import AudioPlayer from "./AudioPlayer";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux"; // Importa useDispatch
import { addToCart } from "../store/actions/cart"; // Importa la acción addToCart
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ItineraryCard = ({
  itinerary,
  onToggleLike,
  isLiked,
  likeCount,
  onToggleExpand,
  isExpanded,
  activities,
}) => {
  const [showPDF, setShowPDF] = useState(false);

  // Usa useDispatch para obtener la función dispatch
  const dispatch = useDispatch();

  const toggleExpand = (itineraryId) => {
    if (isExpanded) {
      onToggleExpand(null);
      setShowPDF(false);
    } else {
      onToggleExpand(itineraryId);
      setShowPDF(true);
    }
  };

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-ee3f5966-ef2d-4c14-9efa-4bca885b972e", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/create-preference",
        {
          title: itinerary.name,
          quantity: 1,
          price: itinerary.price,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);

      // Agrega el itinerario al carrito
      dispatch(
        addToCart({
          name: itinerary.name,
          price: itinerary.price,
          photo: itinerary.photo,
        })
      );
    }
  };



  return (
    <div>
      <div
        className="relative rounded-xl w-[400px] md:w-[760px] lg:w-[760px]"
        id="navStyle"
      >
        <div className="flex h-[60px] justify-between items-center border-2 border-white bg-gray-200 p-4 rounded-xl mb-1">
          <div className="flex items-center ">
            <ExpandButton
              isExpanded={isExpanded}
              onToggleExpand={() => toggleExpand(itinerary._id)}
            />
            <p
              className="ml-2 text-md md:text-xl lg:text-xl font-bold text-gray-600 lowercase"
              id="gothicFont"
            >
              Ver material
            </p>
          </div>
{/*           <h1 className="ml-2 text-md md:text-xl lg:text-xl font-light">{itinerary.name}</h1>
 */}          <button onClick={handleBuy} className=" w-[120px]  md:w-[170px] lg:w-[170px] h-[30px] shadow-md border-2 ml-2 text-sm md:text-xl lg:text-xl font-semibold  text-white text-tracking-wider text-center  bg-violetin border-white hover:border-b-4 hover:border-[#b7f708] rounded-xl  flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-black">
          Agregar al carrito
        </button>
        </div>
        {preferenceId && (
          <Wallet initialization={{ preferenceId: preferenceId }} />
        )}
        <img
          src={itinerary.photo}
          alt={itinerary.name}
          className="w-full h-40 object-cover mb-1 rounded-xl"
        />
        <div className="flex flex-row justify-evenly py-0 items-start mb-10">
          <div className="text-center">
            <p className="text-sm font-semibold mr-2">Teacher:</p>
            <p className="text-sm">{itinerary.city_id.admin_id.name}</p>
            <img
              src={itinerary.city_id.admin_id.photo}
              alt={itinerary.city_id.admin_id.name}
              className="w-16 h-16 object-cover rounded-full mb-4 circular-image"
            />
          </div>
          <div className="text-center">
            <p className="text-sm p-0 font-semibold mr-2">Temas</p>
            <p className="text-sm">{itinerary.tags}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold mr-2">Nivel</p>
            <p className="text-sm">{itinerary.duration}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold mr-2">Costo</p>
            <p className="text-sm">{/* "💵".repeat */ itinerary.price} ARS</p>
          </div>
        </div>
        {showPDF && (
          <div className="flex flex-col items-center justify-center">
            {/* <div className=" flex flex-col justify-center border-2 border-black rounded-xl  items-center"
            style={{
              backgroundImage: `url(${src})`,
              width: "100%",
              height: "100px", // Ajusta la altura según sea necesario
            }}
            >
            
            </div> */}
            <h2 className="flex justify-center text-xl gap-2 " id="navStyle">
            Audio <span className="font-bold"> introductorio </span> del taller
            </h2>
            <AudioPlayer
              audioUrl={itinerary.audio}
              textAudio={itinerary.textAudio}
            />
            <div className="my-4">
              <PdfViewer pdfUrl={itinerary.comments} />
            </div>
          </div>
        )}
      </div>
      <Anchor
        to="/cities"
        className="flex justify-center text-4xl  rounded-xl p-2 lowercase"
        id="gothicFont"
      >
        Atrás
      </Anchor>
    </div>
  );
}

export default ItineraryCard;
