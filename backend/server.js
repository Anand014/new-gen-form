require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./confiq/db");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use(express.json());
connectDB();

//My routes
const userRouter = require("./Routes/userRoutes");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// routes
app.use("/lucky-api/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT || 5000, (req, res) => {
  console.log("Server is up & running");
});
