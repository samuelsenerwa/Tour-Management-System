import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'

dotenv.config();

// intialize express app
const app = express();
const port = process.env.PORT || 8000;

// database connection
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection successful");
  } catch (err) {
    console.log("MongoDb failed to connect");
  }
};

// middleware for my routes
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
app.use('/tours', tourRoute)
app.use('/users', userRoute)

// checking if nodemon is working correctlyy
app.listen(port, () => {
    connect();
  console.log("Server listening on port", port);
});
