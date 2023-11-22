import React, { useState } from "react";
import LikeButton from "./LikeButton";
import ExpandButton from "./ExpandButton";
import PdfViewer from "./PdfViewer";
import AudioPlayer from "./AudioPlayer"; // Importa el componente AudioPlayer
import { Link as Anchor } from "react-router-dom";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ItineraryCard({
  itinerary,
  onToggleLike,
  isLiked,
  likeCount,
  onToggleExpand,
  isExpanded,
  activities,
}) {
  const [showPDF, setShowPDF] = useState(false);

  const toggleExpand = (itineraryId) => {
    if (isExpanded) {
      onToggleExpand(null);
      setShowPDF(false);
    } else {
      onToggleExpand(itineraryId);
      setShowPDF(true);
    }
  };

  return (
    <>
      <div className="relative rounded-sm w-[400px] md:w-[760px] lg:w-[760px] h-[80%]" id="navStyle">
        <div className="flex justify-evenly items-center border-2 border-black rounded-md mb-1">
          <div className="flex items-center bg-violetin ">
            <ExpandButton
              isExpanded={isExpanded}
              onToggleExpand={() => toggleExpand(itinerary._id)}
            />
            <p className="ml-2 text-md text-gray-600">Ver material</p>
          </div>
          <h1 className="text-xl font-light">{itinerary.name}</h1>
        </div>
        <img
          src={itinerary.photo}
          alt={itinerary.name}
          className="w-full h-40 object-cover mb-1 rounded-md"
        />
        <div className="flex flex-row justify-evenly py-0 items-start">
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
            <AudioPlayer audioUrl={itinerary.audio} />
            <PdfViewer pdfUrl={itinerary.comments} />
          </div>
        )}
      </div>
      <Anchor
        to="/cities"
        className="text-xl font-semibold rounded-lg p-2 uppercase"
        id="navStyle"
      >
        Atrás
      </Anchor>
    </>
  );
}

export default ItineraryCard;
