
// "use client";
// import React, { useState, useEffect } from "react";
// import { FaCog, FaBars, FaTimes } from "react-icons/fa";
// import { VscSettings } from "react-icons/vsc";
// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/components/cart-component/CartContext";
// import { FiBell, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";

// // Cars data
// export const cars = [
//   {
//     id: 1,
//     name: "Koenigsegg",
//     type: "Sport",
//     price: "$99.00/day",
//     favorite: true,
//     image: "/koen.png",
//     description: "A high-performance sports car designed for speed and luxury.",
//     capacity: "2 Person",
//     steering: "Manual",
//     gasoline: "70L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 2,
//     name: "Nissan GT-R",
//     type: "Sport",
//     price: "$99.00/day",
//     favorite: false,
//     image: "/nisaan.png",
//     description: "A legendary sports car known for its power and precision.",
//     capacity: "2 Person",
//     steering: "Manual",
//     gasoline: "70L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//    {
//     id: 3,
//     name: "Rolls-Royce",
//     type: "Sedan",
//     price: "$99.00/day",
//     favorite: true,
//     image: "/rolls.png",
//     description: "The epitome of luxury and elegance.",
//     capacity: "4 Person",
//     steering: "Automatic",
//     gasoline: "80L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 4,
//     name: "All New Rush",
//     type: "Sport",
//     price: "$72.00/day",
//     favorite: true,
//     image: "/rolls1.png",
//     description: "A sporty and stylish car for adventurous drivers.",
//     capacity: "2 Person",
//     steering: "Manual",
//     gasoline: "60L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 5,
//     name: "Cr-V",
//     type: "SUV",
//     price: "$80.00/day",
//     favorite: true,
//     image: "/rolls2.png",
//     description: "A versatile SUV for family and off-road adventures.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "75L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 6,
//     name: "All New Terios",
//     type: "SUV",
//     price: "$74.00/day",
//     favorite: true,
//     image: "/rolls1.png",
//     description: "A compact SUV with great fuel efficiency.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "65L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 7,
//     name: "MG ZX Exclusive",
//     type: "Sport",
//     price: "$72.00/day",
//     favorite: false,
//     image: "/rolls1.png",
//     description: "A sporty car with exclusive features.",
//     capacity: "2 Person",
//     steering: "Manual",
//     gasoline: "70L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 8,
//     name: "NEW MG ZS",
//     type: "SUV",
//     price: "$80.00/day",
//     favorite: false,
//     image: "/rolls2.png",
//     description: "A modern SUV with advanced technology.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "75L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 9,
//     name: "MG ZX Excite",
//     type: "SUV",
//     price: "$74.00/day",
//     favorite: false,
//     image: "/rolls1.png",
//     description: "An exciting SUV for urban and rural adventures.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "65L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 10,
//     name: "Toyota Camry",
//     type: "Sedan",
//     price: "$85.00/day",
//     favorite: true,
//     image: "/toyota.png",
//     description: "A reliable and comfortable sedan for everyday use.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "70L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 11,
//     name: "Honda Civic",
//     type: "Sedan",
//     price: "$75.00/day",
//     favorite: false,
//     image: "/honda.png",
//     description: "A popular sedan known for its efficiency and style.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "60L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 12,
//     name: "Ford Mustang",
//     type: "Sport",
//     price: "$120.00/day",
//     favorite: true,
//     image: "/ford.png",
//     description: "An iconic American muscle car with a powerful engine.",
//     capacity: "4 Person",
//     steering: "Manual",
//     gasoline: "80L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 13,
//     name: "Tesla Model S",
//     type: "Electric",
//     price: "$150.00/day",
//     favorite: true,
//     image: "/tesla.png",
//     description: "A high-performance electric car with cutting-edge technology.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "0L", // Electric car
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 14,
//     name: "BMW X5",
//     type: "SUV",
//     price: "$130.00/day",
//     favorite: false,
//     image: "/bmw.png",
//     description: "A luxury SUV with advanced features and comfort.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "75L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 15,
//     name: "Audi A4",
//     type: "Sedan",
//     price: "$90.00/day",
//     favorite: true,
//     image: "/audi.png",
//     description: "A premium sedan with a sleek design and powerful engine.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "65L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 16,
//     name: "Porsche 911",
//     type: "Sport",
//     price: "$200.00/day",
//     favorite: true,
//     image: "/porsche.png",
//     description: "A legendary sports car with unmatched performance.",
//     capacity: "2 Person",
//     steering: "Manual",
//     gasoline: "90L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 17,
//     name: "Jeep Wrangler",
//     type: "SUV",
//     price: "$110.00/day",
//     favorite: false,
//     image: "/jeep.png",
//     description: "A rugged SUV designed for off-road adventures.",
//     capacity: "5 Person",
//     steering: "Manual",
//     gasoline: "85L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 18,
//     name: "Chevrolet Corvette",
//     type: "Sport",
//     price: "$180.00/day",
//     favorite: true,
//     image: "/chevrolet.png",
//     description: "A classic American sports car with a powerful V8 engine.",
//     capacity: "2 Person",
//     steering: "Manual",
//     gasoline: "80L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 19,
//     name: "Volkswagen Golf",
//     type: "Hatchback",
//     price: "$70.00/day",
//     favorite: false,
//     image: "/volkswagen.png",
//     description: "A compact and efficient hatchback for city driving.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "55L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   {
//     id: 20,
//     name: "Hyundai Tucson",
//     type: "SUV",
//     price: "$95.00/day",
//     favorite: true,
//     image: "/hyundai.png",
//     description: "A stylish and practical SUV for modern families.",
//     capacity: "5 Person",
//     steering: "Automatic",
//     gasoline: "70L",
//     thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//   },
//   // Add other cars here...
// ];

// const Header = () => {
//   const { cartItems } = useCart();
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // State for search query and filtered cars
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredCars, setFilteredCars] = useState<typeof cars>([]);

//   // Debouncing for search
//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (searchQuery) {
//         const filtered = cars.filter(
//           (car) =>
//             car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             car.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             car.description.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredCars(filtered);
//       } else {
//         setFilteredCars([]);
//       }
//     }, 300); // 300ms delay

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchQuery]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between flex-wrap">
//       {/* Logo and Search Bar Container */}
//       <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
//         {/* Logo */}
//         <Link href="/">
//           <button className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md transition">
//             MORENT
//           </button>
//         </Link>
//         {/* Search Bar */}
//         <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0">
//           <input
//             type="text"
//             placeholder="Search something here"
//             className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             style={{ borderRadius: "70px" }}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FiSearch />
//           </div>
//           <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <Link href="/">
//               <VscSettings />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Display Filtered Cars */}
//       {searchQuery && (
//         <div className="absolute top-20 left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 max-h-60 overflow-y-auto">
//           {filteredCars.length > 0 ? (
//             filteredCars.map((car) => (
//           <Link key={car.id} href={`/cars/${car.id}`}>
//           <div className="p-2 border-b hover:bg-gray-100 cursor-pointer">
//             <div className="flex items-center space-x-4">
//             <Image
//               src={car.image}
//               alt={car.name}
//               width={50}
//               height={50}
//               className="rounded"
//             />
//             <div>
//               <p className="font-semibold">{car.name}</p>
//               <p className="text-sm text-gray-600">{car.type}</p>
//               <p className="text-sm text-gray-600">{car.price}</p>
//             </div>
//             </div>
//           </div>
//           </Link>
//             ))
//           ) : (
//             <div className="p-2 text-gray-500">No cars found.</div>
//           )}
//         </div>
//       )}

//       {/* Hamburger Menu for Small Screens */}
//       <div className="lg:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-2xl text-gray-600">
//           <FaBars />
//         </button>
//       </div>

//       {/* Icons for Large Screens */}
//       <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 mt-2 lg:mt-0">
//         <Link href="/">
//           <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//             <FiHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
//           </div>
//         </Link>

//         {/* Cart Icon with Item Count */}
//         <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//           <Link href={"/cart"}>
//             <div className="relative">
//               <FiShoppingCart className="text-lg cursor-pointer text-gray-600" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-5 -right-4 bg-blue-500 text-gray-300 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </div>
//           </Link>
//         </div>

//         <Link href="/">
//           <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//             <FiBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
//             <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
//           </div>
//         </Link>
//         <Link href="/">
//           <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//             <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
//           </div>
//         </Link>

//         {/* Profile Picture */}
//         <Link href="/">
//           <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
//             <Image src="/profile.png" alt="Profile" width={40} height={40} />
//           </div>
//         </Link>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
//           <div className="bg-white w-4/5 h-full p-6 shadow-lg space-y-6 relative">
//             <button
//               onClick={toggleMenu}
//               className="absolute top-4 right-4 text-3xl text-gray-600"
//             >
//               <FaTimes />
//             </button>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Favorites
//               </div>
//             </Link>

//             <Link href="/cart">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600 flex items-center"
//                 onClick={toggleMenu}
//               >
//                 <FiShoppingCart className="mr-2" />
//                 <span>Cart</span>
//                 {totalItems > 0 && (
//                   <span className="ml-2 bg-blue-500 text-gray-300 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </div>
//             </Link>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Notifications
//               </div>
//             </Link>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Settings
//               </div>
//             </Link>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Profile
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;












// "use client";
// import React, { useState } from "react";
// import { FaCog, FaBars, FaTimes } from "react-icons/fa";
// import { VscSettings } from "react-icons/vsc";
// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/components/cart-component/CartContext";
// import { FiBell, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";

// const Header = () => {
//   const { cartItems } = useCart();
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // State for search query and filtered products
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState<{ id: number; name: string }[]>([]);

//   // Example products array
//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Smartphone" },
//     { id: 3, name: "Headphones" },
//     { id: 4, name: "Tablet" },
//     { id: 5, name: "Toyota Corolla" }, // Car added
//     { id: 6, name: "Honda Civic" },    // Car added
//     { id: 7, name: "Tesla Model S" },  // Car added
//   ];

//   // Function to handle search input change
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     // Filter products based on the search query
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );

//     // Update the filtered products state
//     setFilteredProducts(filtered);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between flex-wrap">
//       {/* Logo and Search Bar Container */}
//       <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
//         {/* Logo */}
//         <Link href="/">
//           <button className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md transition">
//             MORENT
//           </button>
//         </Link>
//         {/* Search Bar */}
//         <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0">
//           <input
//             type="text"
//             placeholder="Search something here"
//             className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             style={{ borderRadius: "70px" }}
//             value={searchQuery}
//             onChange={handleSearch}
//           />
//           <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FiSearch />
//           </div>
//           <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <Link href="/">
//               <VscSettings />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Display Filtered Products */}
//       {searchQuery && (
//         <div className="absolute top-20 left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 max-h-60 overflow-y-auto">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="p-2 border-b hover:bg-gray-100 cursor-pointer"
//               >
//                 {product.name}
//               </div>
//             ))
//           ) : (
//             <div className="p-2 text-gray-500">No products found.</div>
//           )}
//         </div>
//       )}

//       {/* Hamburger Menu for Small Screens */}
//       <div className="lg:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-2xl text-gray-600">
//           <FaBars />
//         </button>
//       </div>

//       {/* Icons for Large Screens */}
//       <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 mt-2 lg:mt-0">
//         <Link href="/">
//           <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//             <FiHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
//           </div>
//         </Link>

//         {/* Cart Icon with Item Count */}
//         <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//           <Link href={"/cart"}>
//             <div className="relative">
//               <FiShoppingCart className="text-lg cursor-pointer text-gray-600" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-5 -right-4 bg-blue-500 text-gray-300 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </div>
//           </Link>
//         </div>

//         <Link href="/">
//           <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//             <FiBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
//             <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
//           </div>
//         </Link>
//         <Link href="/">
//           <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
//             <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
//           </div>
//         </Link>

//         {/* Profile Picture */}
//         <Link href="/">
//           <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
//             <Image src="/profile.png" alt="Profile" width={40} height={40} />
//           </div>
//         </Link>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
//           <div className="bg-white w-4/5 h-full p-6 shadow-lg space-y-6 relative">
//             <button
//               onClick={toggleMenu}
//               className="absolute top-4 right-4 text-3xl text-gray-600"
//             >
//               <FaTimes />
//             </button>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Favorites
//               </div>
//             </Link>

//             <Link href="/cart">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600 flex items-center"
//                 onClick={toggleMenu}
//               >
//                 <FiShoppingCart className="mr-2" />
//                 <span>Cart</span>
//                 {totalItems > 0 && (
//                   <span className="ml-2 bg-blue-500 text-gray-300 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </div>
//             </Link>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Notifications
//               </div>
//             </Link>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Settings
//               </div>
//             </Link>

//             <Link href="/">
//               <div
//                 className="text-xl text-gray-600 py-2 hover:text-blue-600"
//                 onClick={toggleMenu}
//               >
//                 Profile
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




"use client";
import React, { useState } from "react";
import { FaCog, FaBars, FaTimes } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-component/CartContext";
import { FiBell, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";


const Header = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between flex-wrap">
      {/* Logo and Search Bar Container */}
      <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
        {/* Logo */}
        <Link href="/">
          <button className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md transition">
            MORENT
          </button>
        </Link>
        {/* Search Bar */}




        <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: "70px" }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Link href="/">
              <VscSettings />
            </Link>
          </div>
        </div>
      </div>

          




      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-gray-600">
          <FaBars />
        </button>
      </div>

      {/* Icons for Large Screens */}
      <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 mt-2 lg:mt-0">
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FiHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Cart Icon with Item Count */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
          <Link href={"/cart"}>
            <div className="relative">
              <FiShoppingCart className="text-lg cursor-pointer text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-5 -right-4 bg-blue-500 text-gray-300 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>

        <Link href="/">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FiBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Profile Picture */}
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/profile.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-4/5 h-full p-6 shadow-lg space-y-6 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-3xl text-gray-600"
            >
              <FaTimes />
            </button>

            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Favorites
              </div>
            </Link>

            <Link href="/cart">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600 flex items-center"
                onClick={toggleMenu}
              >
                <FiShoppingCart className="mr-2" />
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="ml-2 bg-blue-500 text-gray-300 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>

            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Notifications
              </div>
            </Link>

            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Settings
              </div>
            </Link>

            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Profile
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;






