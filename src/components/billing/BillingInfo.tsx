"use client"; // Mark as a client component

import React, { useState } from "react";
import { FaUser, FaPhone, FaMapMarkerAlt, FaCity } from "react-icons/fa";

const BillingInfo = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  // State for advanced functionality
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message
  const [success, setSuccess] = useState(""); // Success message
  const [billingId, setBillingId] = useState(""); // Unique billing ID
  interface Session {
    userId: string;
    // Add other session properties if needed
  }

  const [session, setSession] = useState<Session | null>(null); // Session data

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !phone || !address || !city) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear previous messages
    setError("");
    setSuccess("");

    // Simulate form submission (e.g., API call)
    setLoading(true);
    try {
      const response = await fetch("/api/billing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, address, city }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit billing info.");
      }

      const data = await response.json();

      // On success
      setSuccess(data.message);
      setBillingId(data.billingId);
      setSession(data.session); // Store session data
      resetForm(); // Clear the form
    } catch (err) {
      // On error
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName("");
    setPhone("");
    setAddress("");
    setCity("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Billing Info</h2>
          <span className="text-sm text-gray-500">Step 1 of 4</span>
        </div>

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

        {/* Display billing ID and session info */}
        {billingId && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-600 rounded-lg">
            <p><strong>Billing ID:</strong> {billingId}</p>
            {session && (
              <p><strong>Session ID:</strong> {session.userId}</p>
            )}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaPhone className="text-gray-400 mr-3" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Address */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaMapMarkerAlt className="text-gray-400 mr-3" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Town / City */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaCity className="text-gray-400 mr-3" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Town or city"
              className="w-full focus:outline-none text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
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
    </div>
  );
};

export default BillingInfo;