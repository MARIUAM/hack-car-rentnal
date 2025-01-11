"use client"; // Mark as a client component

import React, { useState } from "react";

const RentalInfo = () => {
  // State for form fields
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  // State for advanced functionality
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message
  const [success, setSuccess] = useState(""); // Success message
  interface RentalData {
    pickup: string;
    dropoff: string;
    location: string;
    date: string;
  }

  const [displayData, setDisplayData] = useState<RentalData | null>(null); // Store submitted data

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (!pickup || !dropoff || !location || !date) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear previous messages
    setError("");
    setSuccess("");

    // Simulate form submission (e.g., API call)
    setLoading(true);
    try {
      // Simulate a delay (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On success
      setSuccess("Rental information submitted successfully!");
      setDisplayData({ pickup, dropoff, location, date }); // Store submitted data
      resetForm(); // Clear the form

      // Clear displayed data after 1 minute
      setTimeout(() => {
        setDisplayData(null);
      }, 60000); // 60,000 milliseconds = 1 minute
    } catch (err) {
      // On error
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Reset form fields
  const resetForm = () => {
    setPickup("");
    setDropoff("");
    setLocation("");
    setDate("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Rental Info</h2>

      {/* Display error message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {/* Display success message */}
      {success && (
        <div className="mb-4 p-4 bg-green-100 text-green-600 rounded-lg">
          {success}
        </div>
      )}

      {/* Display submitted data */}
      {displayData && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Submitted Data</h3>
          <p><strong>Pick-up:</strong> {displayData.pickup}</p>
          <p><strong>Drop-off:</strong> {displayData.dropoff}</p>
          <p><strong>Location:</strong> {displayData.location}</p>
          <p><strong>Date:</strong> {displayData.date}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pick-up */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Pick-up
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
              placeholder="Enter pick-up location"
            />
          </div>

          {/* Drop-off */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Drop-off
            </label>
            <input
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
              placeholder="Enter drop-off location"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
              placeholder="Enter location"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className="w-full bg-blue-500 text-white p-3 rounded-md mt-6 hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          {loading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default RentalInfo;

// import {
//     FaCcVisa,
//     FaCcPaypal,
//     FaCheckCircle,
//     FaUser,
//     FaPhone,
//     FaMapMarkerAlt,
//     FaCity,
//   } from "react-icons/fa";
  
//   const CheckoutPage = () => {
//     return (
//       <div className="min-h-screen">
//         <div className="container mx-auto p-6">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Left Section: Billing Info, Rental Info, Payment Method, Confirmation */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Billing Info */}
//               <div className="flex justify-center items-center min-h-screen">
//                 <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
//                   {/* Header */}
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-semibold text-gray-800">
//                       Billing Info
//                     </h2>
//                     <span className="text-sm text-gray-500">Step 1 of 4</span>
//                   </div>
  
//                   {/* Form */}
//                   <form className="space-y-6">
//                     {/* Name */}
//                     <div className="flex items-center border border-gray-300 rounded-lg p-3">
//                       <FaUser className="text-gray-400 mr-3" />
//                       <input
//                         type="text"
//                         placeholder="Your name"
//                         className="w-full focus:outline-none text-gray-700"
//                       />
//                     </div>
  
//                     {/* Phone Number */}
//                     <div className="flex items-center border border-gray-300 rounded-lg p-3">
//                       <FaPhone className="text-gray-400 mr-3" />
//                       <input
//                         type="tel"
//                         placeholder="Phone number"
//                         className="w-full focus:outline-none text-gray-700"
//                       />
//                     </div>
  
//                     {/* Address */}
//                     <div className="flex items-center border border-gray-300 rounded-lg p-3">
//                       <FaMapMarkerAlt className="text-gray-400 mr-3" />
//                       <input
//                         type="text"
//                         placeholder="Address"
//                         className="w-full focus:outline-none text-gray-700"
//                       />
//                     </div>
  
//                     {/* Town / City */}
//                     <div className="flex items-center border border-gray-300 rounded-lg p-3">
//                       <FaCity className="text-gray-400 mr-3" />
//                       <input
//                         type="text"
//                         placeholder="Town or city"
//                         className="w-full focus:outline-none text-gray-700"
//                       />
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               {/* Rental Info */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6">Rental Info</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Pick-up
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-gray-300 rounded-md mt-1"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Drop-off
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-gray-300 rounded-md mt-1"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Location
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-gray-300 rounded-md mt-1"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">
//                       Date
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-gray-300 rounded-md mt-1"
//                     />
//                   </div>
//                 </div>
//               </div>
  
//               {/* Payment Method */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
//                 <div className="space-y-4">
//                   <label className="flex items-center space-x-3">
//                     <input type="radio" name="payment" className="form-radio" />
//                     <FaCcVisa className="text-blue-800" size={24} />
//                     <span className="text-gray-600">Credit Card</span>
//                   </label>
//                   <label className="flex items-center space-x-3">
//                     <input type="radio" name="payment" className="form-radio" />
//                     <FaCcPaypal className="text-blue-600" size={24} />
//                     <span className="text-gray-600">PayPal</span>
//                   </label>
//                 </div>
//               </div>
  
//               {/* Confirmation */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6">Confirmation</h2>
//                 <label className="flex items-center space-x-3">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-600">
//                     I have read and accept the terms and conditions.
//                   </span>
//                 </label>
//                 <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md flex items-center justify-center space-x-2">
//                   <FaCheckCircle />
//                   <span>Confirm Booking</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default CheckoutPage;