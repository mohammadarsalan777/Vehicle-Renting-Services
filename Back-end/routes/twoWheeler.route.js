import express from "express";
import {
  addVehicleTwo,
  twoWheelersApi,
} from "../controllers/twoWheeler.controller.js";

export const routerTwo = express.Router();

routerTwo.route("/add-vehicle-two").post(addVehicleTwo);
routerTwo.route("/fetch-two-wheeler-api").get(twoWheelersApi);
