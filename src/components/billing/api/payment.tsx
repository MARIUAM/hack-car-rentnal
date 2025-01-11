import Stripe from "stripe";

// Initialize Stripe with the Secret Key
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("Stripe secret key is not defined");
}
const stripe = new Stripe("sk_test_51Qft9CGar4PTXn6wkGj5LU5pM7DihLc1V8mDB7Jfmd226QH1zFyIAiTLDm6BeEd6lYJtNDtdRHkw8pyHWM0XTh8S00mHU7OeX4");

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { paymentMethod, amount, currency } = req.body;

    try {
      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Convert to cents
        currency: currency || "usd",
        payment_method: paymentMethod,
        confirm: true,
      });

      // Return the PaymentIntent status
      return res.status(200).json({
        success: true,
        message: "Payment successful!",
        paymentIntent,
      });
    } catch (err) {
      console.error("Error processing payment:", err);
      return res.status(500).json({
        success: false,
        message: "Payment failed. Please try again.",
      });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed." });
  }
}