// import React from "react";
// import Reviews from "../cars-details/review";

// // Update the path as necessary
// import RecommendedCars from "../../components/homepage/cards1";
// import Sidebar from "@/components/sidebar";
// import PopularCars from "@/components/card1";
// import Link from "next/link";


// const Page = () => {
//   return (

    
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Main content area */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar />



        
//         <div className="flex-1 p-6 space-y-8">

//           <Reviews />

//           {/* Popular Cars Section */}
//           <section className="space-y-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 Popular Cars
//               </h2>
//               <Link
//                 href="#"
//                 className="text-blue-600 hover:underline text-sm font-medium"
//               >
//                 View All
//               </Link>
//             </div>
//             <PopularCars />
//           </section>

//           {/* Recommended Cars Section */}
//           <section className="space-y-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 Recommended Cars
//               </h2>
//               <Link
//                 href="#"
//                 className="text-blue-600 hover:underline text-sm font-medium"
//               >
//                 View All
//               </Link>
//             </div>
//             <RecommendedCars />
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;




import Sidebar from "@/components/sidebar";

import React from "react";
import PopularCar from "@/components/card1";
import RecommendedCars from "@/components/homepage/cards1";
import CarDetailsSection from "@/components/detail/detail";
import Reviews from "../cars-details/review";



const Page = () => {
  return (
    <div>

      <div className="flex ">
      <Sidebar  />
      <CarDetailsSection />
      </div>



      <div className="flex flex-col h-screen">
      {/* Header */}
      

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
       

        {/* Main content */}
        <div className="flex-1 p-6">
         
          <Reviews/>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-sm font-medium text-gray-500">Popular Car</h2>
      <a
        href="#"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View All
      </a>
    </div>
          <PopularCar/>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-sm font-medium text-gray-500">Recommendation Car</h2>
      <a
        href="#"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View All
      </a>
    </div>
          <RecommendedCars/>
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default Page;
