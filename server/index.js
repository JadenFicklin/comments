require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PORT } = process.env;
// const { DATABASE_URL } = process.env;
// const Sequelize = require("sequelize");

const app = express();

app.use(express.json());
app.use(cors());

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialect: "popstgres",
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
