import React from "react";
import ModuleCard from "./ModuleCard";

function ModuleList({
  modules,
  likes,
  likeCounts,
  expandedModule,
  onToggleLike,
  onToggleExpand,
  activities,
  addToCart, // Nueva prop para pasar la función addToCart
}) {
  return (
    <>
      <div className="flex flex-col items-center w-full space-y-4 my-6">
        {modules.map((module, index) => (
          <ModuleCard
            key={module._id}
            module={module}
            onToggleLike={() => onToggleLike(index)}
            isLiked={likes[index]}
            likeCount={likeCounts[index]}
            onToggleExpand={() => onToggleExpand(module._id)}
            isExpanded={expandedModule === module._id}
            activities={activities}
            addToCart={addToCart} // Pasando la función addToCart
          />
        ))}
        {modules.length === 0 && (
          <div className="p-8 w-[70vw] mb-8 rounded-xl" id="navStyle">
            <h2 className="text-4xl text-center">No se encontraron talleres</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default ModuleList;
