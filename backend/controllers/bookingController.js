import Booking from "../models/Booking.js";

// creating a new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      succsess: true,
      message: "Your tour is booked successfully",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({ succsess: false, message: "Internal server error" });
  }
};

// getting single bookings
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);

    res.status(200).json({
      succsess: true,
      message: "successfully retrieved the booking",
      data:book,
    });
  } catch (err) {
    res.status(404).json({
      succsess: false,
      message: "Bookings not found",
    });
  }
};

// get all the bookings

export const getAllBooking = async (req, res) => {
  try {
    const book = await Booking.find();

    res.status(200).json({
      succsess: true,
      message: "successfully retrieved all the bookings",
      data: book
    });
  } catch (err) {
    res.status(500).json({
      succsess: false,
      message: "oops! Internal server error",
    });
  }
};
