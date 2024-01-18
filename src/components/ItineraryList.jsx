import React from "react";
import ItineraryCard from "./ItineraryCard";

function ItineraryList({
  itineraries,
  likes,
  likeCounts,
  expandedItinerary,
  onToggleLike,
  onToggleExpand,
  activities,
  addToCart, // Nueva prop para pasar la función addToCart
}) {
  return (
    <>
      <div className="flex flex-col items-center w-full space-y-4 my-6">
        {itineraries.map((itinerary, index) => (
          <ItineraryCard
            key={itinerary._id}
            itinerary={itinerary}
            onToggleLike={() => onToggleLike(index)}
            isLiked={likes[index]}
            likeCount={likeCounts[index]}
            onToggleExpand={() => onToggleExpand(itinerary._id)}
            isExpanded={expandedItinerary === itinerary._id}
            activities={activities}
            addToCart={addToCart} // Pasando la función addToCart
          />
        ))}
        {itineraries.length === 0 && (
          <div className="p-8 w-[70vw] mb-8 rounded-xl" id="navStyle">
            <h2 className="text-4xl text-center">No se encontraron talleres</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default ItineraryList;
