import express from "express";
import {
  addVehicle,
  fourWheelersApi,
} from "../controllers/fourWheeler.controller.js";

export const router = express.Router();

router.route("/add-vehicle").post(addVehicle);
router.route("/fetch-four-wheeler-api").get(fourWheelersApi);
