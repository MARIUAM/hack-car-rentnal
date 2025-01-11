import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from 'uuid';

const uri = process.env.MONGODB_URI; // MongoDB connection string
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
const client = new MongoClient(uri);

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, phone, address, city } = req.body;

    // Validate the data
    if (!name || !phone || !address || !city) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      await client.connect();
      const database = client.db("your-database-name");
      const collection = database.collection("billing");

      // Generate a unique billing ID
      const billingId = uuidv4();

      // Save billing data to the database
      const billingData = {
        billingId,
        name,
        phone,
        address,
        city,
        createdAt: new Date().toISOString(),
      };

      await collection.insertOne(billingData);

      // Create a session for the user
      const session = {
        userId: uuidv4(), // Simulate a user ID
        billingId,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      };

      // Set a session cookie
      res.setHeader("Set-Cookie", `session=${JSON.stringify(session)}; Path=/; HttpOnly`);

      // Return a success response
      return res.status(200).json({
        message: "Billing info submitted successfully!",
        billingId,
        session,
      });
    } catch (err) {
      console.error("Error saving billing data:", err);
      return res.status(500).json({ message: "Internal server error." });
    } finally {
      await client.close();
    }
  } else {
    return res.status(405).json({ message: "Method not allowed." });
  }
}