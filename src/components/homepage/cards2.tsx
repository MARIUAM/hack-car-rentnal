"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaUser, FaCarSide, FaCogs } from "react-icons/fa";

export default function RecCars() {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "MG ZX Exclusive",
      type: "Sport",
      price: "$72.00/day",
      favorite: true,
      image: "/rolls1.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "NEW MG ZS",
      type: "SUV",
      price: "$80.00/day",
      favorite: false,
      image: "/rolls2.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "MG ZX Excite",
      type: "SUV",
      price: "$74.00/day",
      favorite: false,
      image: "/rolls1.png", // Replace with actual image path
    },
    {
      id: 4,
      name: "New MG ZS",
      type: "SUV",
      price: "$80.00/day",
      favorite: false,
      image: "/rolls3.png", // Replace with actual image path
    },
  ]);

  const toggleFavorite = (id: number) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, favorite: !car.favorite } : car
      )
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <button onClick={() => toggleFavorite(car.id)}>
                <FaHeart
                  className={`text-2xl ${
                    car.favorite ? "text-red-500" : "text-gray-300"
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">{car.type}</p>
            <Image
              src={car.image}
              alt={car.name}
              width={200}
              height={100}
              className="mx-auto object-contain"
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2 text-gray-600">
                <div className="flex items-center space-x-1">
                  <FaCarSide />
                  <span>70L</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCogs />
                  <span>Manual</span>
                </div>
                <div className="flex items-center">
                  <FaUser />
                  <span>4 People</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-semibold">{car.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Centered Button Section */}
      <section className="w-full flex justify-center mt-10">
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-6 py-3 text-white rounded-md hover:bg-[#274bb8]">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
