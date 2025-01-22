//    "use client"; // Mark as a Client Component

// import Link from 'next/link';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { FaHeart, FaUser, FaCarSide, FaCogs } from 'react-icons/fa';
// import { useState } from 'react';

// interface IProduct {
//   name: string;
//   title: string;
//   image: any;
//   _id: string;
//   stock: string;
//   slug: { current: string };
//   price: number;
//   type?: string;
//   fuelCapacity?: string;
//   transmission?: string;
//   capacity?: string;
//   favorite?: boolean;
// }

// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source).url();
// }

// export default function Hero1({ products }: { products: IProduct[] }) {
//   // Initialize state for each product's favorite status
//   const [favorites, setFavorites] = useState<{ [key: string]: boolean }>(
//     products.reduce<{ [key: string]: boolean }>((acc, product) => {
//       acc[product._id] = product.favorite || false; // Initialize with Sanity data
//       return acc;
//     }, {})
//   );

//   // Toggle favorite status
//   const toggleFavorite = (productId: string) => {
//     setFavorites((prev) => ({
//       ...prev,
//       [productId]: !prev[productId], // Toggle the favorite status
//     }));
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto px-6 py-8 bg-gray-50">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-2xl font-bold">Popular Cars</h2>
//         <Link href="/categories" className="text-blue-600 hover:underline">
//           View All
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
//           >
//             {/* Product Header */}
//             <div className="flex justify-between items-start">
//               <h3 className="text-lg font-semibold">{product.title}</h3>
//               <button
//                 onClick={() => toggleFavorite(product._id)} // Toggle on click
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <FaHeart
//                   className={`text-2xl ${
//                     favorites[product._id] ? 'text-red-500' : 'text-gray-300'
//                   }`}
//                 />
//               </button>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">{product.type}</p>

//             {/* Product Image */}
//             {product.image && product.image.asset ? (
//               <div className="relative w-full h-40">
//                 <Image
//                   src={urlFor(product.image).toString()}
//                   alt={product.title || 'Product Image'}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             ) : (
//               <div className="h-40 bg-gray-200 flex items-center justify-center rounded-lg">
//                 <p className="text-center text-gray-600">No Image Available</p>
//               </div>
//             )}

//             {/* Product Details */}
//             <div className="flex justify-between items-center mt-4">
//               <div className="flex space-x-2 text-gray-600">
//                 <div className="flex items-center space-x-1">
//                   <FaCarSide />
//                   <span>{product.fuelCapacity || 'N/A'}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <FaCogs />
//                   <span>{product.transmission || 'N/A'}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaUser />
//                   <span>{product.capacity || 'N/A'}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Product Price and Rent Button */}
//             <div className="mt-6 flex justify-between items-center">
//               <p className="text-lg font-semibold">${product.price}</p>
//               <Link href={`/product/${product.slug.current}`}>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                   Rent Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










































// "use client"; // Mark as a Client Component

// import Link from 'next/link';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { FaHeart, FaUser, FaCarSide, FaCogs } from 'react-icons/fa';
// import { useState } from 'react';

// interface IProduct {
//   name: string;
//   title: string;
//   image: any;
//   _id: string;
//   stock: string;
//   slug: { current: string };
//   price: number;
//   type?: string;
//   fuelCapacity?: string;
//   transmission?: string;
//   capacity?: string;
//   favorite?: boolean;
// }

// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source).url();
// }

// export default function Hero1({ products }: { products: IProduct[] }) {
//   // Initialize state for each product's favorite status
//   const [favorites, setFavorites] = useState<{ [key: string]: boolean }>(
//     products.reduce<{ [key: string]: boolean }>((acc, product) => {
//       acc[product._id] = product.favorite || false; // Initialize with Sanity data
//       return acc;
//     }, {})
//   );

//   // Toggle favorite status
//   const toggleFavorite = (productId: string) => {
//     setFavorites((prev) => ({
//       ...prev,
//       [productId]: !prev[productId], // Toggle the favorite status
//     }));
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto px-6 py-8 bg-gray-50">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-2xl font-bold">Popular Cars</h2>
//         <Link href="/categories" className="text-blue-600 hover:underline">
//           View All
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
//           >
//             {/* Product Header */}
//             <div className="flex justify-between items-start">
//               <h3 className="text-lg font-semibold">{product.title}</h3>
//               <button
//                 onClick={() => toggleFavorite(product._id)} // Toggle on click
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <FaHeart
//                   className={`text-2xl ${
//                     favorites[product._id] ? 'text-red-500' : 'text-gray-300'
//                   }`}
//                 />
//               </button>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">{product.type}</p>

//             {/* Product Image */}
//             {product.image && product.image.asset ? (
//               <div className="relative w-full h-40">
//                 <Image
//                   src={urlFor(product.image).toString()}
//                   alt={product.title || 'Product Image'}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             ) : (
//               <div className="h-40 bg-gray-200 flex items-center justify-center rounded-lg">
//                 <p className="text-center text-gray-600">No Image Available</p>
//               </div>
//             )}

//             {/* Product Details */}
//             <div className="flex justify-between items-center mt-4">
//               <div className="flex space-x-2 text-gray-600">
//                 <div className="flex items-center space-x-1">
//                   <FaCarSide />
//                   <span>{product.fuelCapacity || 'N/A'}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <FaCogs />
//                   <span>{product.transmission || 'N/A'}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaUser />
//                   <span>{product.capacity || 'N/A'}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Product Price and Rent Button */}
//             <div className="mt-6 flex justify-between items-center">
//               <p className="text-lg font-semibold">${product.price}</p>
//               <Link href={`/product/${product.slug.current}`}>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                   Rent Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client"
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// import { FaHeart, FaUser, FaCarSide, FaCogs } from "react-icons/fa";
// interface ICarImage {
//   _type: string;
//   asset: {
//     _ref: string;
//     _type: string;
//   };
// }

// interface ICar {
//   _id: string;
//   _type: string;
//   _rev: string;
//   _createdAt: string;
//   _updatedAt: string;
//   name: string;
//   brand: string;
//   seatingCapacity: number;
//   originalPrice: number;
//   type: string;
//   pricePerDay: number;
//   tags: string[];
//   transmission: string;
//   fuelCapacity: string;
//   image: ICarImage;
//   favorite?: boolean;
// }

// const Hero1 = async (): Promise<JSX.Element> => {
//   const Products: ICar[] = await client.fetch(`
//     *[_type == "car"][0...4]{
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
//       image{
//         _type,
//         asset{
//           _ref,
//           _type
//         }
//       }
//     }
//   `);

//   function toggleFavorite(_id: string): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="max-w-screen-xl mx-auto px-6 py-8 bg-gray-50">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-2xl font-bold">Recommended Cars</h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {Products.map((car: ICar) => (
//           <div
//             key={car._id}
//             className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
//           >
//             <div className="flex justify-between items-start">
//               <h3 className="text-lg font-semibold">{car.name}</h3>
//               <button onClick={() => toggleFavorite(car._id)}>
//                 <FaHeart
//                   className={`text-2xl ${
//                     car.favorite ? "text-red-500" : "text-gray-300"
//                   }`}
//                 />
//               </button>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">{car.type}</p>
//             <Image
//               src={urlFor(car.image).toString()}
//               alt={car.name}
//               width={200}
//               height={100}
//               className="mx-auto object-contain"
//             />
//             <div className="flex justify-between items-center mt-4">
//               <div className="flex space-x-2 text-gray-600">
//                 <div className="flex items-center space-x-1">
//                   <FaCarSide />
//                   <span>{car.fuelCapacity}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <FaCogs />
//                   <span>{car.transmission}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaUser />
//                   <span>{car.seatingCapacity} People</span>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 flex justify-between items-center">
//               <p className="text-lg font-semibold">${car.pricePerDay}</p>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
