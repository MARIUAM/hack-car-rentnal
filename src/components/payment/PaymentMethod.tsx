"use client"; // Mark as a client component

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Initialize Stripe with the Publishable Key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Error message for UI
  const [success, setSuccess] = useState(""); // Success message for UI

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Create a PaymentMethod using Stripe Elements
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error("Card element not found.");
      }
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (stripeError) {
        throw new Error(stripeError.message || "Payment failed.");
      }

      // Call your backend API to process the payment
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethod: paymentMethod.id,
          amount: 100, // Example amount (in cents)
          currency: "usd", // Example currency
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Payment failed.");
      }

      // On success
      setSuccess("Payment successful! Thank you.");
    } catch (err) {
      // On error
      setError(err instanceof Error ? err.message : "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CardElement className="p-3 border border-gray-300 rounded-lg" />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-blue-00 mt-2">{success}</p>}
      <button
        onClick={handlePayment}
        disabled={loading || !stripe}
        className="w-full mt-6 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default PaymentMethod;
