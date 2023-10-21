const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//middleware
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

//
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
