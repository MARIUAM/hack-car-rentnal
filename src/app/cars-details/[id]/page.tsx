// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { useCart } from "@/components/cart-component/CartContext";
// import toast, { Toaster } from "react-hot-toast";
// import { client } from "@/sanity/lib/client";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";


// interface ICarDetails {
//   imageUrl: string | StaticImport;
//   _id: string;
//   name: string;
//   brand: string;
//   seatingCapacity: number;
//   originalPrice: string;
//   type: string;
//   pricePerDay: string;
//   tags: string[];
//   transmission: string;
//   fuelCapacity: number;
//   image: { asset: { _ref: string } };
// }

// const fetchCarDetails = async (id: string): Promise<ICarDetails | null> => {
//   const query = `*[_type == "car" && _id == $id][0]{
//     _id,
//     name,
//     brand,
//     seatingCapacity,
//     originalPrice,
//     type,
//     pricePerDay,
//     tags,
//     transmission,
//     fuelCapacity,
//     "imageUrl": image.asset->_ref
//   }`;

//   const car = await client.fetch(query, { id });
//   return car || null;
// };

// const CarDetailsSection = async ({ params }: { params: { id: string } }) => {
//   const { addToCart } = useCart();
//   const carDetails = await fetchCarDetails(params.id);

//   if (!carDetails) {
//     return <div className="text-center py-20">Car not found.</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: carDetails._id,
//       name: carDetails.name,
//       description: `${carDetails.brand} - ${carDetails.type}`,
//       price: parseFloat(carDetails.pricePerDay.replace("$", "")),
//       quantity: 1,
//       imageUrl: typeof carDetails.imageUrl === 'string' ? carDetails.imageUrl : '',
//     });

//     toast.success(`${carDetails.name} added to cart!`, {
//       duration: 3000,
//       position: "bottom-right",
//     });
//   };

//   return (
//     <div>
//       <Toaster />
//       <div className="flex flex-col lg:flex-row gap-6 p-6 bg-white rounded-lg shadow-md mb-10">
//         {/* Car Image */}
//         <div className="lg:w-1/2">
//           <Image
//             src={carDetails.imageUrl}
//             alt={carDetails.name}
//             width={700}
//             height={400}
//             className="w-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Car Information */}
//         <div className="lg:w-1/2">
//           <h2 className="text-2xl font-bold">{carDetails.name}</h2>
//           <div className="flex items-center gap-2 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
//               />
//             ))}
//             <FaStar className="text-gray-300 hover:text-yellow-500 transition-colors duration-200" />
//             <p className="text-sm text-gray-500">(4.0 Reviewer)</p>
//           </div>
//           <p className="mt-4 text-gray-600">{carDetails.brand}</p>
//           <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
//             <p>
//               <span className="font-medium">Type:</span> {carDetails.type}
//             </p>
//             <p>
//               <span className="font-medium">Capacity:</span> {carDetails.seatingCapacity}
//             </p>
//             <p>
//               <span className="font-medium">Transmission:</span> {carDetails.transmission}
//             </p>
//             <p>
//               <span className="font-medium">Fuel Capacity:</span> {carDetails.fuelCapacity}
//             </p>
//           </div>
//           <div className="flex justify-between items-center mt-6">
//             <div>
//               <p className="text-lg font-bold">{carDetails.pricePerDay}</p>
//             </div>
//             <div className="flex space-x-2">
//               <Link href="/details">
//                 <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
//                   Rent Now
//                 </button>
//               </Link>
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailsSection;




// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { useCart } from "@/components/cart-component/CartContext";
// import { useParams } from "next/navigation";
// import { cars } from "../carsData";
// import toast, { Toaster } from "react-hot-toast";

// const CarDetailsSection = () => {
//   const { addToCart } = useCart();
//   const { id } = useParams();

//   const carDetails = cars.find((car) => car.id === Number(id));

//   if (!carDetails) {
//     return <div className="text-center py-20">Car not found.</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: carDetails.id.toString(),
//       name: carDetails.name,
//       description: carDetails.description,
//       price: parseFloat(carDetails.price.replace("$", "")),
//       quantity: 1,
//       imageUrl: carDetails.image,
//     });

//     // Show toast notification
//     toast.success(`${carDetails.name} added to cart!`, {
//       duration: 3000,
//       position: "bottom-right",
//     });
//   };

//   return (
//     <div>
//       {/* Toast Container */}
//       <Toaster />

//       <div className="flex flex-col lg:flex-row gap-6 p-6 bg-white rounded-lg shadow-md mb-10">
//         {/* Image Gallery */}
//         <div className="lg:w-1/2">
//           <div className="relative bg-blue-00 rounded-lg overflow-hidden">
//             <Image
//               src={carDetails.image}
//               alt={carDetails.name}
//               className="w-full object-cover rounded-lg"
//               width={700}
//               height={400}
//             />
//           </div>

//           {/* Thumbnail Gallery */}
//           <div className="flex gap-4 mt-4 overflow-x-auto lg:overflow-visible">
//             {carDetails.thumbnailImages.map((src, index) => (
//               <Image
//                 key={index}
//                 src={src}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-20 h-20 rounded-lg object-cover border border-gray-200"
//                 width={100}
//                 height={100}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Car Information */}
//         <div className="lg:w-1/2">
//           <h2 className="text-2xl font-bold">{carDetails.name}</h2>
//           <div className="flex items-center gap-2 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
//               />
//             ))}
//             <FaStar className="text-gray-300 hover:text-yellow-500 transition-colors duration-200" />
//             <p className="text-sm text-gray-500">(4.0 Reviewer)</p>
//           </div>

//           <p className="mt-4 text-gray-600">{carDetails.description}</p>

//           {/* Car Details */}
//           <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
//             <p>
//               <span className="font-medium">Type Car:</span> {carDetails.type}
//             </p>
//             <p>
//               <span className="font-medium">Capacity:</span> {carDetails.capacity}
//             </p>
//             <p>
//               <span className="font-medium">Steering:</span> {carDetails.steering}
//             </p>
//             <p>
//               <span className="font-medium">Gasoline:</span> {carDetails.gasoline}
//             </p>
//           </div>

//           {/* Price and Button */}
//           <div className="flex justify-between items-center mt-6">
//             <div>
//               <p className="text-lg font-bold">{carDetails.price}</p>
//               <p className="text-sm text-gray-500 line-through">$100.00</p>
//             </div>
//             <div className="flex space-x-2 md:space-x-8 md:mr-14">
//             {/* <Link   
//              href="/payments"
//              >
//               <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-800 transition">
//                 Rent Now
//               </button>
//             </Link> */}
//               <Link   
//              href="/details"
//              >
//               <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-800 transition">
//                 Rent Now
//               </button>
//             </Link>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-800 transition"
//             >
//               Add to cart
//             </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailsSection;


"use client"; // Add this directive at the top

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
          <div className="relative bg-blue-00 rounded-lg overflow-hidden">
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
              <Link href="/details">
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


// "use client"; // Add this directive at the top

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { useCart } from "@/components/cart-component/CartContext";
// import { useParams } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";
// import { client } from "@/sanity/lib/client"; // Import Sanity client

// // Define the car interface
// interface Car {
//   _id: string;
//   name: string;
//   description: string;
//   pricePerDay: string;
//   originalPrice: string;
//   type: string;
//   seatingCapacity: string;
//   transmission: string;
//   fuelCapacity: string;
//   imageUrl: string;
//   thumbnailImages: string[];
// }

// const getCarDetails = async (id: string): Promise<Car | null> => {
//   const query = `*[_type == "car" && _id == $id][0...4]{
//     _id,
//     name,
//     description,
//     "pricePerDay": pricePerDay,
//     "originalPrice": originalPrice,
//     type,
//     "seatingCapacity": seatingCapacity,
//     "transmission": transmission,
//     "fuelCapacity": fuelCapacity,
//     "imageUrl": image.asset->url,
//     "thumbnailImages": tags[] // Assuming 'tags' contains URLs of thumbnail images
//   }`;

//   return await client.fetch(query, { id });
// };

// const CarDetailsSection = () => {
//   const { addToCart } = useCart();
//   const { id } = useParams();

//   // Fetch car details dynamically
//   const [carDetails, setCarDetails] = React.useState<Car | null>(null);

//   React.useEffect(() => {
//     if (id) {
//       const carId = Array.isArray(id) ? id[0] : id;
//       getCarDetails(carId).then((car) => setCarDetails(car));
//     }
//   }, [id]);

//   if (!carDetails) {
//     return <div className="text-center py-20">Car not found.</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: carDetails._id,
//       name: carDetails.name,
//       description: carDetails.description,
//       price: parseFloat(carDetails.pricePerDay.replace("$", "")),
//       quantity: 1,
//       imageUrl: carDetails.imageUrl,
//     });

//     // Show toast notification
//     toast.success(`${carDetails.name} added to cart!`, {
//       duration: 3000,
//       position: "bottom-right",
//     });
//   };

//   return (
//     <div>
//       {/* Toast Container */}
//       <Toaster />

//       <div className="flex flex-col lg:flex-row gap-6 p-6 bg-white rounded-lg shadow-md mb-10">
//         {/* Image Gallery */}
//         <div className="lg:w-1/2">
//           <div className="relative bg-blue-00 rounded-lg overflow-hidden">
//             <Image
//               src={carDetails.imageUrl}
//               alt={carDetails.name}
//               className="w-full object-cover rounded-lg"
//               width={700}
//               height={400}
//             />
//           </div>

//           {/* Thumbnail Gallery */}
//           <div className="flex gap-4 mt-4 overflow-x-auto lg:overflow-visible">
//             {carDetails.thumbnailImages.map((src, index) => (
//               <Image
//                 key={index}
//                 src={src}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-20 h-20 rounded-lg object-cover border border-gray-200"
//                 width={100}
//                 height={100}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Car Information */}
//         <div className="lg:w-1/2">
//           <h2 className="text-2xl font-bold">{carDetails.name}</h2>
//           <div className="flex items-center gap-2 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
//               />
//             ))}
//             <FaStar className="text-gray-300 hover:text-yellow-500 transition-colors duration-200" />
//             <p className="text-sm text-gray-500">(4.0 Reviewer)</p>
//           </div>

//           <p className="mt-4 text-gray-600">{carDetails.description}</p>

//           {/* Car Details */}
//           <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
//             <p>
//               <span className="font-medium">Type Car:</span> {carDetails.type}
//             </p>
//             <p>
//               <span className="font-medium">Seating Capacity:</span>{" "}
//               {carDetails.seatingCapacity}
//             </p>
//             <p>
//               <span className="font-medium">Transmission:</span>{" "}
//               {carDetails.transmission}
//             </p>
//             <p>
//               <span className="font-medium">Fuel Capacity:</span>{" "}
//               {carDetails.fuelCapacity}
//             </p>
//           </div>

//           {/* Price and Button */}
//           <div className="flex justify-between items-center mt-6">
//             <div>
//               <p className="text-lg font-bold">{carDetails.pricePerDay}</p>
//               <p className="text-sm text-gray-500 line-through">
//                 {carDetails.originalPrice}
//               </p>
//             </div>
//             <div className="flex space-x-2 md:space-x-8 md:mr-14">
//               <Link href="/details">
//                 <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-800 transition">
//                   Rent Now
//                 </button>
//               </Link>
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-800 transition"
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailsSection;
