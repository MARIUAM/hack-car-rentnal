"use client";

import React, { useState, useEffect } from "react";

const TimeInput = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    setSelectedTime(time);
  };

  const resetTime = () => {
    setSelectedTime("");
  };

  const getGreeting = () => {
    if (!selectedTime) return "No time selected.";
    const [hour] = selectedTime.split(":");
    const numericHour = parseInt(hour, 10);

    if (numericHour < 12) return "Good Morning!";
    if (numericHour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <div className="flex flex-col items-start space-y-4 p-6 max-w-md mx-auto">
      <label className="block text-lg font-bold">Select Time</label>
      <input
        type="time"
        className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
        value={selectedTime}
        onChange={handleTimeChange}
      />
      <p className="text-gray-600">
        Selected Time:{" "}
        <span className="font-semibold text-blue-600">
          {selectedTime ? selectedTime : "No time selected"}
        </span>
      </p>
      <p className="text-gray-600">
        Current Time:{" "}
        <span className="font-semibold text-green-600">{currentTime}</span>
      </p>
      <p className="text-gray-600">
        Message:{" "}
        <span className="font-semibold text-purple-600">{getGreeting()}</span>
      </p>
      <button
        onClick={resetTime}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Reset Time
      </button>
    </div>
  );
};

export default TimeInput;
