import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Configuring dotenv
dotenv.config();

// Creating App
const app = express();

// USing CORS
app.use(cors());

// For pasing json bodies
app.use(express.json());

// Creating Routes
import { router } from "./routes/fourWheeler.route.js";
app.use("/api/v1/vrs/", router);

import { routerTwo } from "./routes/twoWheeler.route.js";
app.use("/api/v1/vrs/", routerTwo);

import { bookingRoute } from "./routes/booking.route.js";
app.use("/api/v1/vrs/", bookingRoute);
export { app };
