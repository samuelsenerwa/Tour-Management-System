import Tour from "../models/Tour.js";

// create a new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created a new tour",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Sorry! Tour couldn't be created",
    });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Tour failed to be updated!",
    });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Tour failed to be deleted!",
    });
  }
};

// getSingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
      const tour = await Tour.findById(id);
  
      res.status(200).json({
        success: true,
        message: "Tour Found",
        data: tour
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: "Not Found!",
      });
    }
};

// getAll tour
export const getAllTour = async (req, res) => {
  try {
  } catch (err) {}
};
