// 'use client'

// import React, { useState } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';

// // Example words list (you can replace this with any dynamic data or API)
// export const cars = [
//     {
//         id: 1,
//         name: "Koenigsegg",
//         type: "Sport",
//         price: "$99.00/day",
//         favorite: true,
//         image: "/koen.png",
//         description: "A high-performance sports car designed for speed and luxury.",
//         capacity: "2 Person",
//         steering: "Manual",
//         gasoline: "70L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 2,
//         name: "Nissan GT-R",
//         type: "Sport",
//         price: "$99.00/day",
//         favorite: false,
//         image: "/nisaan.png",
//         description: "A legendary sports car known for its power and precision.",
//         capacity: "2 Person",
//         steering: "Manual",
//         gasoline: "70L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 3,
//         name: "Rolls-Royce",
//         type: "Sedan",
//         price: "$99.00/day",
//         favorite: true,
//         image: "/rolls.png",
//         description: "The epitome of luxury and elegance.",
//         capacity: "4 Person",
//         steering: "Automatic",
//         gasoline: "80L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 4,
//         name: "All New Rush",
//         type: "Sport",
//         price: "$72.00/day",
//         favorite: true,
//         image: "/rolls1.png",
//         description: "A sporty and stylish car for adventurous drivers.",
//         capacity: "2 Person",
//         steering: "Manual",
//         gasoline: "60L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 5,
//         name: "Cr-V",
//         type: "SUV",
//         price: "$80.00/day",
//         favorite: true,
//         image: "/rolls2.png",
//         description: "A versatile SUV for family and off-road adventures.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "75L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 6,
//         name: "All New Terios",
//         type: "SUV",
//         price: "$74.00/day",
//         favorite: true,
//         image: "/rolls1.png",
//         description: "A compact SUV with great fuel efficiency.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "65L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 7,
//         name: "MG ZX Exclusive",
//         type: "Sport",
//         price: "$72.00/day",
//         favorite: false,
//         image: "/rolls1.png",
//         description: "A sporty car with exclusive features.",
//         capacity: "2 Person",
//         steering: "Manual",
//         gasoline: "70L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 8,
//         name: "NEW MG ZS",
//         type: "SUV",
//         price: "$80.00/day",
//         favorite: false,
//         image: "/rolls2.png",
//         description: "A modern SUV with advanced technology.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "75L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 9,
//         name: "MG ZX Excite",
//         type: "SUV",
//         price: "$74.00/day",
//         favorite: false,
//         image: "/rolls1.png",
//         description: "An exciting SUV for urban and rural adventures.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "65L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 10,
//         name: "Toyota Camry",
//         type: "Sedan",
//         price: "$85.00/day",
//         favorite: true,
//         image: "/toyota.png",
//         description: "A reliable and comfortable sedan for everyday use.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "70L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 11,
//         name: "Honda Civic",
//         type: "Sedan",
//         price: "$75.00/day",
//         favorite: false,
//         image: "/honda.png",
//         description: "A popular sedan known for its efficiency and style.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "60L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 12,
//         name: "Ford Mustang",
//         type: "Sport",
//         price: "$120.00/day",
//         favorite: true,
//         image: "/ford.png",
//         description: "An iconic American muscle car with a powerful engine.",
//         capacity: "4 Person",
//         steering: "Manual",
//         gasoline: "80L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 13,
//         name: "Tesla Model S",
//         type: "Electric",
//         price: "$150.00/day",
//         favorite: true,
//         image: "/tesla.png",
//         description: "A high-performance electric car with cutting-edge technology.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "0L", // Electric car
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 14,
//         name: "BMW X5",
//         type: "SUV",
//         price: "$130.00/day",
//         favorite: false,
//         image: "/bmw.png",
//         description: "A luxury SUV with advanced features and comfort.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "75L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 15,
//         name: "Audi A4",
//         type: "Sedan",
//         price: "$90.00/day",
//         favorite: true,
//         image: "/audi.png",
//         description: "A premium sedan with a sleek design and powerful engine.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "65L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 16,
//         name: "Porsche 911",
//         type: "Sport",
//         price: "$200.00/day",
//         favorite: true,
//         image: "/porsche.png",
//         description: "A legendary sports car with unmatched performance.",
//         capacity: "2 Person",
//         steering: "Manual",
//         gasoline: "90L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 17,
//         name: "Jeep Wrangler",
//         type: "SUV",
//         price: "$110.00/day",
//         favorite: false,
//         image: "/jeep.png",
//         description: "A rugged SUV designed for off-road adventures.",
//         capacity: "5 Person",
//         steering: "Manual",
//         gasoline: "85L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 18,
//         name: "Chevrolet Corvette",
//         type: "Sport",
//         price: "$180.00/day",
//         favorite: true,
//         image: "/chevrolet.png",
//         description: "A classic American sports car with a powerful V8 engine.",
//         capacity: "2 Person",
//         steering: "Manual",
//         gasoline: "80L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 19,
//         name: "Volkswagen Golf",
//         type: "Hatchback",
//         price: "$70.00/day",
//         favorite: false,
//         image: "/volkswagen.png",
//         description: "A compact and efficient hatchback for city driving.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "55L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
//     {
//         id: 20,
//         name: "Hyundai Tucson",
//         type: "SUV",
//         price: "$95.00/day",
//         favorite: true,
//         image: "/hyundai.png",
//         description: "A stylish and practical SUV for modern families.",
//         capacity: "5 Person",
//         steering: "Automatic",
//         gasoline: "70L",
//         thumbnailImages: ["/m.png", "/n.png", "/o.png"],
//     },
// ];

// const Searchbar = () => {
//   const [activeSearch, setActiveSearch] = useState<string[]>([]);
  
//   // Handle input changes and filter words based on user input
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const searchValue = e.target.value;
    
//     if (searchValue === '') {
//       setActiveSearch([]);
//       return;
//     }
    
//     // Filter words based on the search query and limit the result to 8 items
//     setActiveSearch(cars.filter(car => car.name.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 8).map(car => car.name));
//   };

//   return (
//     <form className="w-[500px] relative">
//       <div className="relative">
//         <input
//           type="search"
//           placeholder="Type Here"
//           className="w-full p-4 rounded-full bg-slate-800 text-white focus:outline-none"
//           onChange={handleSearch}/>
// <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full">
//           <AiOutlineSearch className="text-white" />
//         </button>
//       </div>

//       {/* Display filtered search results */}
//       {activeSearch.length > 0 && (
//         <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
//           {activeSearch.map((s, index) => (
//             <span key={index} className="cursor-pointer hover:bg-slate-600 p-2 rounded-md">
//               {s}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Show no results message when no search results found */}
//       {activeSearch.length === 0 && (
//         <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 text-center">
//           No results found
//         </div>
//       )}
//     </form>
//   );
// };

// export default Searchbar;


// "use client";

// import * as React from "react";
// import Link from "next/link"; // Import the Link component
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// const Products = [
//   {
//     value: "allProducts",
//     label: "All-Products",
//     path: "/allProducts", // Define paths for navigation
//   },
//   {
//     value: "topCategory",
//     label: "Top-Category",
//     path: "/top-category",
//   },
//   {
//     value: "topFeatures",
//     label: "Top-Features-Products",
//     path: "/top-features",
//   },
//   {
//     value: "ourProducts",
//     label: "Our-Products",
//     path: "/our-Products",
//   },
// ];

// export function ComboboxDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState("");

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[250px] px-6"
//         >
//           {value
//             ? Products.find((product) => product.value === value)?.label
//             : "Select Categories..."}
//           <ChevronsUpDown className="opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[250px] p-0">
//         <Command>
//           <CommandInput placeholder="Search any category..." className="h-9" />
//           <CommandList>
//             <CommandEmpty>No product found.</CommandEmpty>
//             <CommandGroup>
//               {Products.map((product) => (
//                 <CommandItem
//                   className="flex justify-between"
//                   key={product.value}
//                   value={product.value}
//                   onSelect={() => {
//                     setValue(product.value);
//                     setOpen(false);
//                   }}
//                 >
//                   <Link href={product.path} className="w-full flex items-center">
//                     {product.label}
//                   </Link>
//                   <Check
//                     className={cn(
//                       "ml-auto",
//                       value === product.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }