import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
// Using Sequelize package as ORM for Connecting the database and for Performing the CRUD Operations.
const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,

  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Function to connect with database
export const DB_connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully");
  } catch (error) {
    console.log("Error occured while connecting the database", error);
  }
};

export default sequelize;
