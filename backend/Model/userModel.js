const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    currentJob: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //   const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
