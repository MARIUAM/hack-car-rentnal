"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useCart } from "@/components/cart-component/CartContext";
import { useParams } from "next/navigation";
import { cars } from "../carsData";
import toast, { Toaster } from "react-hot-toast";

const CarDetailsSection = () => {
  const { addToCart } = useCart();
  const { id } = useParams();

  const carDetails = cars.find((car) => car.id === Number(id));

  if (!carDetails) {
    return <div className="text-center py-20">Car not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: carDetails.id.toString(),
      name: carDetails.name,
      description: carDetails.description,
      price: parseFloat(carDetails.price.replace("$", "")),
      quantity: 1,
      imageUrl: carDetails.image,
    });

    // Show toast notification
    toast.success(`${carDetails.name} added to cart!`, {
      duration: 3000,
      position: "bottom-right",
    });
  };

  return (
    <div>
      {/* Toast Container */}
      <Toaster />

      <div className="flex flex-col lg:flex-row gap-6 p-6 bg-white rounded-lg shadow-md mb-10">
        {/* Image Gallery */}
        <div className="lg:w-1/2">
          <div className="relative bg-blue-200 rounded-lg overflow-hidden">
            <Image
              src={carDetails.image}
              alt={carDetails.name}
              className="w-full object-cover rounded-lg"
              width={700}
              height={400}
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-4 mt-4 overflow-x-auto lg:overflow-visible">
            {carDetails.thumbnailImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>

        {/* Car Information */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold">{carDetails.name}</h2>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(4)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
              />
            ))}
            <FaStar className="text-gray-300 hover:text-yellow-500 transition-colors duration-200" />
            <p className="text-sm text-gray-500">(4.0 Reviewer)</p>
          </div>

          <p className="mt-4 text-gray-600">{carDetails.description}</p>

          {/* Car Details */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <p>
              <span className="font-medium">Type Car:</span> {carDetails.type}
            </p>
            <p>
              <span className="font-medium">Capacity:</span> {carDetails.capacity}
            </p>
            <p>
              <span className="font-medium">Steering:</span> {carDetails.steering}
            </p>
            <p>
              <span className="font-medium">Gasoline:</span> {carDetails.gasoline}
            </p>
          </div>

          {/* Price and Button */}
          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-lg font-bold">{carDetails.price}</p>
              <p className="text-sm text-gray-500 line-through">$100.00</p>
            </div>
            <div className="flex space-x-2 md:space-x-8 md:mr-14">
            <Link href="/payments">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-800 transition">
                Rent Now
              </button>
            </Link>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Add to cart
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsSection;
