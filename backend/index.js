import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

// intialize express app
const app = express();
const port = process.env.PORT || 8000;

// for testing purposes
app.get("/", (req, res) => {
  res.send("api is live");
});

// middleware for my routes
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// checking if nodemon is working correctlyy
app.listen(port, () => {
  console.log("Server listening on port", port);
});
