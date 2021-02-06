const express = require("express");
const {
  createUser,
  userLogin,
  gemsMultiplier,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(userLogin);
router.route("/register").post(createUser);
router.route("/gamblegems").post(gemsMultiplier);
module.exports = router;
