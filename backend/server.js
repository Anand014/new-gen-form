require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./confiq/db");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
connectDB();

const PORT = process.env.PORT;
app.listen(PORT || 5000, (req, res) => {
  console.log("Server is up & running");
});
