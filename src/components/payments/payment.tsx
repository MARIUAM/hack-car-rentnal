import {
  FaCcVisa,
  FaCcPaypal,
  FaCheckCircle,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
} from "react-icons/fa";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section: Billing Info, Rental Info, Payment Method, Confirmation */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Info */}
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Billing Info
                  </h2>
                  <span className="text-sm text-gray-500">Step 1 of 4</span>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Name */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaUser className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaPhone className="text-gray-400 mr-3" />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>

                  {/* Address */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaMapMarkerAlt className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>

                  {/* Town / City */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaCity className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Town or city"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* Rental Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Rental Info</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Pick-up
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Drop-off
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Date
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" className="form-radio" />
                  <FaCcVisa className="text-blue-600" size={24} />
                  <span className="text-gray-600">Credit Card</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" className="form-radio" />
                  <FaCcPaypal className="text-blue-600" size={24} />
                  <span className="text-gray-600">PayPal</span>
                </label>
              </div>
            </div>

            {/* Confirmation */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Confirmation</h2>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-600">
                  I have read and accept the terms and conditions.
                </span>
              </label>
              <button className="w-full mt-4 bg-blue-600 text-white p-3 rounded-md flex items-center justify-center space-x-2">
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
