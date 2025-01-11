import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function PopularCars() {
  const cars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00/day",
      favorite: true,
      image: "/koen.png",
    },
    {
      id: 2,
      name: "NissanGT - R",
      type: "Sport",
      price: "$99.00/day",
      favorite: false,
      image: "/nisaan.png",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      type: "Sedan",
      price: "$99.00/day",
      favorite: true,
      image: "/rolls.png",
    },
    {
      id: 4,
      name: "All New Rush",
      type: "Sport",
      price: "$72.00/day",
      favorite: true,
      image: "/rolls1.png",
    },
    {
      id: 5,
      name: "Cr-V",
      type: "SUV",
      price: "$80.00/day",
      favorite: true,
      image: "/rolls2.png",
    },
    {
      id: 6,
      name: "All New Terios",
      type: "SUV",
      price: "$74.00/day",
      favorite: true,
      image: "/rolls1.png",
    },
    {
      id: 7,
      name: "MG ZX Exclusive",
      type: "Sport",
      price: "$72.00/day",
      image: "/rolls1.png",
    },
    {
      id: 8,
      name: "NEW MG ZS",
      type: "SUV",
      price: "$80.00/day",
      image: "/rolls2.png",
    },
    {
      id: 9,
      name: "MG ZX Excite",
      type: "SUV",
      price: "$74.00/day",
      image: "/rolls1.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {cars.map((car) => (
        <div
          key={car.id}
          className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <FaHeart
              className={`text-2xl ${
                car.favorite ? "text-red-500" : "text-gray-300"
              }`}
            />
          </div>
          <p className="text-sm text-gray-500 mb-4">{car.type}</p>
          <Image
            src={car.image}
            alt={car.name}
            width={200}
            height={100}
            className="mx-auto object-contain"
          />
          <div className="flex md:flex-row flex-col justify-between items-center mt-4">
            <p className="text-lg font-semibold">{car.price}</p>
            <Link key={car.id} href=    {`/cars-details/${car.id}`}>
            {/* <Link href="/detailcars"> */}
              <button className="bg-blue-600 text-white md:px-6 px-2 md:py-2 py-1 md:rounded-lg rounded-sm hover:bg-blue-600 md:text-[16px] text-[11px]">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
