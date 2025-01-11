import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Left = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Rental Summary</h2>
      <div className="flex items-center mb-6">
        {/* Car Image */}
        <Image
          src="/rolls2.png"
          alt="Car"
          width={100}
          height={60}
          className="rounded-md"
        />
        <div className="ml-4">
          {/* Car Name */}
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          {/* Star Rating */}
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <FaStar
                key={index}
                className={`text-yellow-500 transition-transform duration-200 hover:scale-125 ${
                  star <= 4 ? "hover:text-yellow-600" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Rental Price */}
      <div className="text-right border-t pt-4">
        <p className="text-gray-600">Total Rental Price:</p>
        <p className="text-2xl font-bold text-gray-800">$80.00</p>
      </div>
    </div>
  );
};

export default Left;
