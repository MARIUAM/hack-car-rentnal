"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCircleDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { SingleValue } from "react-select";

const TimeInput: React.FC<{
  onTimeChange: (time: string) => void;
  value: string;
}> = ({ onTimeChange, value }) => {
  return (
    <input
      type="time"
      className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
      value={value}
      onChange={(e) => onTimeChange(e.target.value)}
    />
  );
};

interface Location {
  value: string;
  label: string;
}

const Hero: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [pickupDate, setPickupDate] = useState<Date | null>(new Date());
  const [pickupTime, setPickupTime] = useState<string>("");

  const [dropoffLocation, setDropoffLocation] = useState<Location | null>(null);
  const [dropoffDate, setDropoffDate] = useState<Date | null>(new Date());
  const [dropoffTime, setDropoffTime] = useState<string>("");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set isMounted to true after the component mounts
  }, []);

  const locations = [
    { value: "karachi", label: "Karachi" },
    { value: "lahore", label: "Lahore" },
    { value: "islamabad", label: "Islamabad" },
    { value: "quetta", label: "Quetta" },
    { value: "peshawar", label: "Peshawar" },
  ];

  const handleBookingSubmit = () => {
    const bookingDetails = {
      pickup: { location: pickupLocation, date: pickupDate, time: pickupTime },
      dropoff: {
        location: dropoffLocation,
        date: dropoffDate,
        time: dropoffTime,
      },
    };
    console.log("Booking Details:", bookingDetails);
    alert("Your booking details have been submitted successfully!");
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center">
      <section className="container mx-auto px-4 py-[70px]">
        {/* Main Cards */}
        <div className="h">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Left Card */}
            <div
              className="bg-blue-500 p-6 rounded-lg shadow-md bg-cover bg-center"
              style={{
                backgroundImage: 'url("/images/bl.jpg")',
              }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                The Best Platform for Car Rental
              </h2>
              <p className="text-white mb-6">
                Ease of doing a car rental safely and reliably. Of course, at a
                low price.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Rental Car
              </button>
              <Image
                src="/koen.png"
                alt="Car"
                width={340}
                height={108}
                className="mt-4 mx-auto object-cover"
              />
            </div>

            {/* Right Card */}
            <div
              className="bg-blue-500 p-6 rounded-lg shadow-md bg-cover bg-center"
              style={{
                backgroundImage: 'url("/images/br.jpg")',
              }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                Easy way to rent a car at a low price
              </h2>
              <p className="text-white mb-6">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Rental Car
              </button>
              <Image
                src="/nisaan.png"
                alt="Car"
                width={340}
                height={108}
                className="mt-4 mx-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2 flex items-center">
              <FaCircleDot className="mr-2 text-blue-600" />
              Pick-Up
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-lg font-bold mb-1">Location</label>
                {isMounted && ( // Render Select only after mounting
                  <Select
                    options={locations}
                    placeholder="Select pickup city"
                    value={pickupLocation}
                    onChange={(location: SingleValue<Location>) =>
                      setPickupLocation(location)
                    }
                  />
                )}
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Date</label>
                {isMounted && ( // Render DatePicker only after mounting
                  <DatePicker
                    selected={pickupDate}
                    onChange={(date: Date | null) => setPickupDate(date)}
                    className="w-full border rounded-md p-2"
                  />
                )}
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Time</label>
                <TimeInput value={pickupTime} onTimeChange={setPickupTime} />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="mt-4 md:mt-0">
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
                <label className="block text-lg font-bold mb-1">Location</label>
                {isMounted && ( // Render Select only after mounting
                  <Select
                    options={locations}
                    placeholder="Select drop-off city"
                    value={dropoffLocation}
                    onChange={(location: SingleValue<Location>) =>
                      setDropoffLocation(location)
                    }
                  />
                )}
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Date</label>
                {isMounted && ( // Render DatePicker only after mounting
                  <DatePicker
                    selected={dropoffDate}
                    onChange={(date: Date | null) => setDropoffDate(date)}
                    className="w-full border rounded-md p-2"
                  />
                )}
              </div>
              <div>
                <label className="block text-lg font-bold mb-1">Time</label>
                <TimeInput value={dropoffTime} onTimeChange={setDropoffTime} />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleBookingSubmit}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
          >
            Submit Booking
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;