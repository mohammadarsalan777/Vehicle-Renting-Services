import { DataTypes } from "sequelize";
import sequalize from "../database/db.js";

const twoWheeler = sequalize.define("twowheeler", {
  vehicleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isRented: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default twoWheeler;
