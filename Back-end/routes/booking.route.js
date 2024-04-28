import express from "express";
import {
  rentedVehicle,
  deleteBookings,
} from "../controllers/booking.controller.js";

export const bookingRoute = express.Router();

bookingRoute.route("/booking").post(rentedVehicle);
bookingRoute.route("/delete-bookings").delete(deleteBookings);
