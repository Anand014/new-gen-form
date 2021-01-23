const express = require("express");
const { createUser, userLogin } = require("../controllers/userController");

const router = express.Router();

router.route("/").post(userLogin).post(createUser);

module.exports = router;
