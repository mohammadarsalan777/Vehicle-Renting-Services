import { app } from "./app.js";
import { DB_connection } from "./database/db.js";

DB_connection();

app.listen(process.env.PORT, () => {
  console.log(`App is listening at http://localhost:${process.env.PORT}`);
});
