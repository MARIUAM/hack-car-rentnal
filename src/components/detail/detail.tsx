import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaHeart } from "react-icons/fa";

const CarDetailsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-white rounded-lg shadow-md">
      {/* Image Gallery */}
      <div className="lg:w-1/2">
  <div className="relative bg-blue-200 rounded-lg overflow-hidden">
    <Image
      src="/l.png"
      alt="Car"
      className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
      width={900}
      height={900}
    />
  </div>



        {/* Thumbnail Gallery */}
        <div className="flex gap-4 mt-4 overflow-x-auto lg:overflow-visible">
          <Image
            src="/m.png"
            alt="Car Interior"
            className="w-20 h-20 rounded-lg object-cover border border-gray-200"
            width={600}
            height={900}
          />
          <Image
            src="/n.png"
            alt="Car Seats"
            className="w-20 h-20 rounded-lg object-cover border border-gray-200"
            width={900}
            height={900}
          />
          <img
            src="/o.png"
            alt="Car Dashboard"
            className="w-20 h-20 rounded-lg object-cover border border-gray-200"
            width={900}
            height={900}
          />
        </div>
      </div>

      {/* Car Information */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold">Nissan GT - R</h2>
        <div className="flex items-center gap-2 mt-2">
          <FaStar className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200" />
          <FaStar className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200" />
          <FaStar className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200" />
          <FaStar className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200" />
          <FaStar className="text-gray-300" />
          <p className="text-sm text-gray-500">(4.0 Reviewer)</p>
        </div>
        <p className="mt-4 text-gray-600">
          NISMO has become the embodiment of Nissan;s outstanding performance,
          inspired by the most unforgiving proving ground, the “race track”.
        </p>

        {/* Car Details */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <p>
            <span className="font-medium">Type Car:</span> Sport
          </p>
          <p>
            <span className="font-medium">Capacity:</span> 2 Person
          </p>
          <p>
            <span className="font-medium">Steering:</span> Manual
          </p>
          <p>
            <span className="font-medium">Gasoline:</span> 70L
          </p>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-lg font-bold">$80.00</p>
            <p className="text-sm text-gray-500 line-through">$100.00</p>
          </div>
          <Link href="/payments">
            <button className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Rent Now...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsSection;
