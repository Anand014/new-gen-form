const User = require("./../Model/userModel");
const asyncHandler = require("express-async-handler");

// to create an user
exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body.data;
  // console.log(name);
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    if (newUser) {
      res.status(201).json({
        status: "Success",
        message: "User Registered!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error",
      err,
    });
  }
});

//Login
exports.userLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body.data;

  //validation email and password
  if (!email || !password) {
    return next(new Error("Please enter email id and password", 400));
  }
  //check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new Error("Invalid credential", 401));
  }
  //check if password matchs
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new Error("Invalid password", 401));
  }
  //create token
  sendTokenResponse(user, 200, res);
});

//get token from model, create a cookie, send res
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 60 * 60 * 100
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options, user).json({
    message: "Succesful",
    token,
    user,
  });
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.gemsMultiplier = asyncHandler(async (req, res, next) => {
  let { id, addGems, multiplier } = req.body;
  let user = await User.findById(id);
  let winPercent = multiplier / addGems;
  if (addGems <= user.gems) {
    let number = getRandomInt(winPercent);
    if (winPercent === 1.5) {
      let randomWin = getRandomInt(2);
      if (randomWin === 0) {
        await User.findOneAndUpdate({
          _id: id,
          gems: user.gems + multiplier,
        });
      }
    } else if (number === 0) {
      await User.findOneAndUpdate({
        _id: id,
        gems: user.gems + multiplier,
      });
    } else {
      await User.findOneAndUpdate({
        _id: id,
        gems: user.gems - addGems,
      });
    }
  } else {
    return next(new Error("Gems not found", 404));
  }
  let updatedUser = await User.findById(id);
  res.send(updatedUser);
});
