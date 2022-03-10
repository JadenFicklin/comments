require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PORT } = process.env;
const { DATABASE_URL } = process.env;
const Sequelize = require("sequelize");

const app = express();

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "popstgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.post("/api/addComment", async (req, res) => {
  //get user data from request object
  const { comment } = req.body;
  // const {} = req.body
  //add data to database

  const data = await sequelize.query(
    `INSERT INTO comments (comment) VALUES ('${comment}')`
  );

  res.status(200).send(data[0]);
});
app.get("/api/getComment", async (req, res) => {
  //get data from the database

  const data = await sequelize.query(`SELECT * FROM comments`);

  res.status(200).send(data[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
