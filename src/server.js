require("dotenv").config();

const app = require("./app");
const pool = require("./db/connection");

const PORT = process.env.PORT || 5000;

pool.connect()
  .then(() => {
    console.log("Supabase PostgreSQL Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });