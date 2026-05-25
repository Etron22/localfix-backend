import "dotenv/config";

import app from "./app";
import pool from "./db/connection";

const PORT = process.env.PORT ?? 5000;

pool
  .query("SELECT 1")
  .then(() => {
    console.log("Supabase PostgreSQL Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err: unknown) => {
    console.log(err);
  });
