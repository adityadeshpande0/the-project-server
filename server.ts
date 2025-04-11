import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const serverless = require("serverless-http");
// Load environment variables from .env file
dotenv.config();

const app = express();
// const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/health", (req, res) => {
  res.send("Server is running!");
});

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
module.exports.handler = serverless(app)