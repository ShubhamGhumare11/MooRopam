import React from "react";

export function HorizontalCard() {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/3">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="w-full h-48 sm:h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-blue-500 uppercase text-xs font-semibold mb-2">
            Startups
          </h3>
          <h2 className="text-gray-800 text-xl font-bold mb-4">
            Lyft Launching Cross-Platform Service This Week
          </h2>
          <p className="text-gray-600 text-base mb-4">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part
            of the story.
          </p>
        </div>
        <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700 mt-auto">
          <span className="font-medium">Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
 






