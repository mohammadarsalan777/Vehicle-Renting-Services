import { DataTypes } from "sequelize";
import sequalize from "../database/db.js";

const fourwheeler = sequalize.define("fourwheeler", {
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
  // fromDate: {
  //   type: DataTypes.DATE,
  //   allowNull: true,
  // },
  // toDate: {
  //   type: DataTypes.DATE,
  //   allowNull: true,
  // },
});

export default fourwheeler;
