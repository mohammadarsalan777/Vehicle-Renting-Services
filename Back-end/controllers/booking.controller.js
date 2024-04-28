import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { booking } from "../models/booking.model.js"; // Adjust this import if necessary
import fourwheeler from "../models/fourWheelers.model.js";

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

  console.log({
    firstName,
    lastName,
    wheelNumber,
    vehicleType,
    vehicleModel,
    startDate,
    endDate,
  });

  try {
    const api = await booking.create({
      firstName,
      lastName,
      wheelNumber,
      vehicleType,
      vehicleModel,
      startDate,
      endDate,
    });

    const updateRentalStatus = await fourwheeler.findOne({
      vehicleModel: vehicleModel,
    });

    await updateRentalStatus.update({ isRented: true });

    return res
      .status(200)
      .json(new ApiResponse(200, api, "Booking data saved successfully"));
  } catch (error) {
    throw new ApiError(500, "Error occurred while booking the vehicle");
  }
});

export { rentedVehicle };
