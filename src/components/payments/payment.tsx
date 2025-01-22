"use client"; // Mark as a client component

import {
  FaCcVisa,
  FaCcPaypal,
  FaCheckCircle,
  // FaUser,
  // FaPhone,
  // FaMapMarkerAlt,
  // FaCity,
} from "react-icons/fa";
import RentalInfo from "../rentnal/RentalInfo";
import BillingInfo from "../billing/BillingInfo"; // Import the BillingInfo component
import PaymentMethod from "../payment/PaymentMethod";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section: Billing Info, Rental Info, Payment Method, Confirmation */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Info */}
            <BillingInfo /> {/* Replace the existing Billing Info section with the BillingInfo component */}

            {/* Rental Info */}
            <RentalInfo /> {/* Replace the existing Rental Info section with the RentalInfo component */}

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" className="form-radio" />
                  <FaCcVisa className="text-blue-800" size={24} />
                  <span className="text-gray-600">Credit Card</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" className="form-radio" />
                  <FaCcPaypal className="text-blue-600" size={24} />
                  <span className="text-gray-600">PayPal</span>
                </label>
              </div>
            </div>



            <PaymentMethod/>

            {/* Confirmation */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Confirmation</h2>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-600">
                  I have read and accept the terms and conditions.
                </span>
              </label>
              <button className="w-full mt-4 bg-white-300 hover:bg-blue-00 text-white p-3 rounded-md flex items-center justify-center space-x-2">
                <FaCheckCircle />
                <span>Confirm Booking</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;