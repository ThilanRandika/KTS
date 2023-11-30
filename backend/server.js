const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");

//middleware
const morgan = require("morgan");
const app = express();

//
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/users", userRoutes);

connectDb().then(async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
