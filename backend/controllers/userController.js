const User = require("./../Model/userModel");

// to create an user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "User Registered!!",
      data: {
        User: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      err,
    });
  }
};
