import express from "express";
import { rentedVehicle } from "../controllers/booking.controller.js";

export const bookingRoute = express.Router();

bookingRoute.route("/booking").post(rentedVehicle);
