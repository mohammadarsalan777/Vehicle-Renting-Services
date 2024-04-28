import twoWheeler from "../models/twoWheelers.model.js"; // Make sure the path and filename match your model
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addVehicleTwo = asyncHandler(async (req, res) => {
  const { vehicleName, vehicleType, isRented } = req?.body || req.header?.data;
  if (vehicleName === "" || vehicleType === "" || isRented === "") {
    throw new ApiError(404, "Data did not recieved");
  }
  try {
    const newVehicle = await twoWheeler.create({
      vehicleName,
      vehicleType,
      isRented,
    });
    console.log(newVehicle);

    return res
      .status(200)
      .json(new ApiResponse(200, newVehicle, "new vehicle added successfully"));
  } catch (error) {
    // Handle the error
    throw new ApiError(
      500,
      "Error while adding the data",
      console.error(error)
    );
  }
});

const twoWheelersApi = asyncHandler(async (req, res) => {
  try {
    const api = await twoWheeler.findAll();

    return res
      .status(200)
      .json(new ApiResponse(200, api, "Data retrieved successfully"));
  } catch (error) {
    throw new ApiError(500, "Error occured while fetching data");
  }
});

export { addVehicleTwo, twoWheelersApi };
