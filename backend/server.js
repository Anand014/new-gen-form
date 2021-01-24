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

app.post("/lucky-api/payment", async (req, res) => {
  const { cardNumber, cvvCode, cardHolderName, gems, price, userId } = req.body;
  const paymentToken = process.env.LUCKY_PAYMENT_TOKEN;
  if (cardNumber.length === 16 && cvvCode.length === 3 && price / 5 == gems) {
    const user = await User.findById(userId);
    const oldGems = user.gems;
    const newGems = oldGems + Number(gems);
    User.findByIdAndUpdate(
      userId,
      { gems: newGems },
      function (err, UpdatedUser) {
        if (err) {
          console.log(err);
          res.status(404).json({
            status: "error",
            message: "Deducted Amount will be soon revert!",
          });
        } else {
          res.status(200).json({
            status: "Success",
            paymentToken,
            UpdatedUser,
          });
        }
      }
    );
  } else {
    res.status(400).json({
      status: "error!",
      message: "Card not found!",
    });
  }
});

//My routes
const userRouter = require("./Routes/userRoutes");
const User = require("./Model/userModel");

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
