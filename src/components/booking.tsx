"use client";

import { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCircleDot } from "react-icons/fa6";

const BookingSection = () => {
  const [pickUp, setPickUp] = useState({
    location: "",
    date: "",
    time: "",
  });
  const [dropOff, setDropOff] = useState({
    location: "",
    date: "",
    time: "",
  });

  const handlePickUpChange = (field: string, value: string) => {
    setPickUp((prev) => ({ ...prev, [field]: value }));
  };

  const handleDropOffChange = (field: string, value: string) => {
    setDropOff((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Booking Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8 bg-white p-6 rounded-lg shadow-md">
        {/* Pick-Up Section */}
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <FaCircleDot className="mr-2 text-blue-600" />
            Pick-Up
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-lg font-bold mb-1">Locations</label>
              <select
                className="w-full border-none rounded-md p-2"
                value={pickUp.location}
                onChange={(e) => handlePickUpChange("location", e.target.value)}
              >
                <option value="">Select your city</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Date</label>
              <input
                type="date"
                className="w-full border-none rounded-md p-2"
                value={pickUp.date}
                onChange={(e) => handlePickUpChange("date", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Time</label>
              <input
                type="time"
                className="w-full border-none rounded-md p-2"
                value={pickUp.time}
                onChange={(e) => handlePickUpChange("time", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div>
          <button className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700">
            <HiArrowsUpDown />
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <FaCircleDot className="mr-2 text-blue-600" />
            Drop-Off
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-lg font-bold mb-1">Locations</label>
              <select
                className="w-full border-none rounded-md p-2"
                value={dropOff.location}
                onChange={(e) =>
                  handleDropOffChange("location", e.target.value)
                }
              >
                <option value="">Select your city</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Date</label>
              <input
                type="date"
                className="w-full border-none rounded-md p-2"
                value={dropOff.date}
                onChange={(e) => handleDropOffChange("date", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Time</label>
              <input
                type="time"
                className="w-full border-none rounded-md p-2"
                value={dropOff.time}
                onChange={(e) => handleDropOffChange("time", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
