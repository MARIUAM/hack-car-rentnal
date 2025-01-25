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




// "use clint";

// import { Suspense } from 'react';
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { notFound } from "next/navigation";
// import redheart from "@/app/assets/section1/red heart.png";
// import fuel from "@/app/assets/section1/fuel.png";
// import stering from "@/app/assets/section1/Stering wheel.png";
// import user from "@/app/assets/section1/profile.png";
// import { Params } from 'next/dist/server/request/params';
// // import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
// // import ReviewsClient from '@/app/actions/reviews/ReviewsClient';

// // Helper functions remain the same
// function getImageUrl(image: any) {  if (!image?.asset?._ref) {
//     return null;
//   }
  
//   try {
//     // If we have a direct URL, use it
//     if (image.asset.url) {
//       return image.asset.url;
//     }
    

//     // Extract the dimensions and format from the asset reference
//     const [_, id, dimensions, format] = ref.split('-');
    
//     return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
//   } catch (error) {
//     console.error("Error generating image URL:", error);
//     return null;
//   }
// }

// async function getCarById(id: string) {try {
//     const query = `*[_type == "car" && _id == $id][0]{
//       _id,
//       _type,
//       _rev,
//       _createdAt,
//       _updatedAt,
//       name,
//       brand,
//       seatingCapacity,
//       originalPrice,
//       type,
//       pricePerDay,
//       tags,
//       transmission,
//       fuelCapacity,
//       image {
//         asset-> {
//           _id,
//           _ref,
//           _type,
//           url
//         }
//       }
//     }`;

//     const car = await client.fetch(query, { id });
//     return car;
//   } catch (error) {
//     console.error("Error fetching car:", error);
//     return null;
//   }
// }

// async function getRelatedCars(type: any, currentCarId: any) {  try {
//     const query = `*[_type == "car" && type == $type && _id != $currentCarId]{
//       _id,
//       name,
//       type,
//       pricePerDay,
//       seatingCapacity,
//       transmission,
//       fuelCapacity,
//       image {
//         asset-> {
//           _id,
//           _ref,
//           _type,
//           url
//         }
//       }
//     }`;

//     return await client.fetch(query, { type, currentCarId });
//   } catch (error) {
//     console.error("Error fetching related cars:", error);
//     return [];
//   }
// }

// function LoadingComponent() {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
//     </div>
//   );
// }

// export default async function CarDetailsPage({ params }: { params: Params }) {
//   return (
//     <Suspense fallback={<LoadingComponent />}>
//       <CarDetailsContent params={params} />
//     </Suspense>
//   );
// }

// async function CarDetailsContent({ params }: { params: Params }) {
//   const car = await getCarById(params.id);
  
//   if (!car) {
//     notFound();
//   }

//   const relatedCars = await getRelatedCars(car.type, car._id);
//   const carImageUrl = car.image?.asset?.url || getImageUrl(car.image);
  
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Main Car Details Section */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 transition-all hover:shadow-md">
//           <div className="grid lg:grid-cols-2 gap-8">
//             {/* Car Image */}
//             <div className="relative group">
//               {carImageUrl ? (
//                 <div className="relative w-full h-[300px] lg:h-[400px]">
//                   <Image
//                     src={carImageUrl}
//                     alt={car.name || "Car image"}
//                     fill
//                     className="rounded-xl object-contain transition-transform group-hover:scale-[1.02]"
//                     unoptimized
//                   />
//                 </div>
//               ) : (
//                 <div className="w-full h-[300px] lg:h-[400px] bg-gray-100 rounded-xl flex items-center justify-center">
//                   <span className="text-gray-500">Image not available</span>
//                 </div>
//               )}
//             </div>

//             {/* Car Details */}
//             <div className="flex flex-col justify-between">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{car.name}</h1>
//                 {car.brand && <p className="text-gray-600 mb-2">{car.brand}</p>}
//                 <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-6">
//                   {car.type}
//                 </p>
                
//                 {/* Specifications Grid */}
//                 <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Image src={fuel} alt="fuel" width={24} height={24} className="opacity-75" />
//                     <span className="font-medium">{car.fuelCapacity}L</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Image src={stering} alt="transmission" width={24} height={24} className="opacity-75" />
//                     <span className="font-medium">{car.transmission}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Image src={user} alt="capacity" width={24} height={24} className="opacity-75" />
//                     <span className="font-medium">{car.seatingCapacity} People</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Price and Rent Button */}
//               <div className="mt-auto">
//                 <div className="mb-4">
//                   <h3 className="text-3xl font-bold text-gray-800">
//                     ${car.pricePerDay}
//                     <span className="text-sm text-gray-500 ml-1">/day</span>
//                   </h3>
//                   {car.originalPrice && (
//                     <p className="text-gray-400 line-through text-sm">
//                       ${car.originalPrice}
//                     </p>
//                   )}
//                 </div>

//                 <Link href="/billing">
                
//                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-medium transition-colors">
//                     Rent Now
//                   </button>
                 
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Reviews Section */}
//         <div className="mt-8">
//             {/*<ReviewsClient initialReviews={[]} /> */}
//         </div>

//         {/* Related Cars Section */}
//         {relatedCars.length > 0 && (
//           <div className="mt-12">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold text-gray-800">Similar Cars</h2>
//               <Link href="/category" className="text-blue-600 hover:text-blue-700 font-medium">
//                 View All
//               </Link>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {relatedCars.map((relatedCar: any) => {
//                 const relatedCarImageUrl = relatedCar.image?.asset?.url || getImageUrl(relatedCar.image);
                
//                 return (
//                   <div
//                     key={relatedCar._id}
//                     className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group"
//                   >
//                     <div className="flex justify-between items-center mb-3">
//                       <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
//                         {relatedCar.name}
//                       </h3>
//                       <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <Image
//                           src={redheart}
//                           alt="favorite"
//                           width={20}
//                           height={20}
//                         />
//                       </button>
//                     </div>

//                     <p className="text-sm text-gray-600 mb-4">{relatedCar.type}</p>

//                     <div className="relative w-full h-[200px] mb-4">
//                       {relatedCarImageUrl ? (
//                         <Image
//                           src={relatedCarImageUrl}
//                           alt={relatedCar.name}
//                           fill
//                           className="rounded-lg object-contain transition-transform group-hover:scale-[1.02]"
//                           unoptimized
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
//                           <span className="text-gray-500">Image not available</span>
//                         </div>
//                       )}
//                     </div>

//                     <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
//                       <div className="flex items-center gap-1 text-gray-600">
//                         <Image src={fuel} alt="fuel" width={16} height={16} />
//                         <span>{relatedCar.fuelCapacity}L</span>
//                       </div>
//                       <div className="flex items-center gap-1 text-gray-600">
//                         <Image src={stering} alt="transmission" width={16} height={16} />
//                         <span>{relatedCar.transmission}</span>
//                       </div>
//                       <div className="flex items-center gap-1 text-gray-600">
//                         <Image src={user} alt="capacity" width={16} height={16} />
//                         <span>{relatedCar.seatingCapacity}</span>
//                       </div>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <h4 className="text-xl font-bold text-gray-800">
//                         ${relatedCar.pricePerDay}
//                         <span className="text-sm text-gray-500">/day</span>
//                       </h4>
//                       <Link href="/billing">
//                         <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
//                           Rent Now
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




