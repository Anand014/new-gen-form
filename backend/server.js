const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./confiq/db");
dotenv.config({ path: "./.env" });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Api is running!");
});

//My routes
const userRouter = require("./Routes/userRoutes");

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// routes
app.use("/lucky-api/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT || 8000, () => {
  console.log("Server is up & running at " + PORT);
});
