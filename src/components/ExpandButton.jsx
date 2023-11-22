import React from "react";

function ExpandButton({ isExpanded, onToggleExpand }) {
  return (
    <button onClick={onToggleExpand} className="text-black px-0 py-1 rounded-md">
      <div
        className={`h-6 w-6 transform ${
          isExpanded ? "rotate-180 scale-y-(-1)" : "rotate-0 scale-y-1"
        }`}
      >
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  );
}

export default ExpandButton;
