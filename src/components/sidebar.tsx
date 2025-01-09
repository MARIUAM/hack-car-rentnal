"use client";

import { useState } from "react";

export default function Sidebar() {
  const [price, setPrice] = useState(100);

  return (
    <div className="w-full md:w-72 bg-gray-50 p-3 border-r shadow-lg rounded-lg flex flex-col overflow-y-auto max-h-[70vh]">
      {/* Type Section */}
      <div className="mb-3">
        <h3 className="text-base font-medium text-gray-700 mb-2">Type</h3>
        {["Sport", "SUV", "MPV", "Sedan"].map((type) => (
          <div key={type} className="flex items-center mb-1.5">
            <input
              type="checkbox"
              id={type}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:outline-none"
            />
            <label
              htmlFor={type}
              className="ml-2 text-sm text-gray-800 flex items-center justify-between w-full"
            >
              <span>{type}</span>
              <span className="text-gray-400 text-xs">(10)</span>
            </label>
          </div>
        ))}
      </div>

      {/* Capacity Section */}
      <div className="mb-3">
        <h3 className="text-base font-medium text-gray-700 mb-2">Capacity</h3>
        {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
          <div key={capacity} className="flex items-center mb-1.5">
            <input
              type="checkbox"
              id={capacity}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:outline-none"
            />
            <label
              htmlFor={capacity}
              className="ml-2 text-sm text-gray-800 flex items-center justify-between w-full"
            >
              <span>{capacity}</span>
              <span className="text-gray-400 text-xs">(10)</span>
            </label>
          </div>
        ))}
      </div>

      {/* Price Section */}
      <div>
        <h3 className="text-base font-medium text-gray-700 mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-700 mt-1 text-center">
          Max Price:{" "}
          <span className="font-semibold text-blue-600">
            ${price.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}
