import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { booking } from "../models/booking.model.js"; // Adjust this import if necessary
import fourwheeler from "../models/fourWheelers.model.js";
import twoWheeler from "../models/twoWheelers.model.js";

const rentedVehicle = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    wheelNumber,
    vehicleType,
    vehicleModel,
    startDate,
    endDate,
  } = req.body; // Assuming the data is directly in req.body

  // Validation checks for required fields and date format
  if (
    [
      firstName,
      lastName,
      wheelNumber,
      vehicleType,
      vehicleModel,
      startDate,
      endDate,
    ].some((field) => !field || field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Ensure startDate and endDate are valid date strings
  if (isNaN(Date.parse(startDate)) || isNaN(Date.parse(endDate))) {
    throw new ApiError(400, "Invalid date format for startDate or endDate");
  }

  // Check if the vehicle is already rented
  const validateExisting = await booking.findOne({
    where: {
      vehicleModel: vehicleModel,
      vehicleType: vehicleType,
    },
  });

  if (validateExisting) {
    throw new ApiError(409, "Vehicle already rented");
  }

  try {
    // Create a new booking
    const api = await booking.create({
      firstName,
      lastName,
      wheelNumber,
      vehicleType,
      vehicleModel,
      startDate,
      endDate,
    });

    return res
      .status(200)
      .json(new ApiResponse(200, api, "Booking data saved successfully"));
  } catch (error) {
    console.error("Error occurred while booking:", error);
    throw new ApiError(500, "Error occurred while booking the vehicle");
  }
});

const deleteBookings = asyncHandler(async (req, res) => {
  try {
    // Delete all bookings
    const del = await booking.destroy({
      where: {}, // Empty where condition deletes all rows
    });

    return res
      .status(200)
      .json(new ApiResponse(200, [], "Booking data deleted successfully"));
  } catch (error) {
    console.error("Error occurred while deleting bookings:", error);
    throw new ApiError(500, "Error occurred while deleting the data");
  }
});

export { rentedVehicle, deleteBookings };
