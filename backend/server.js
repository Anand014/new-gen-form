const express = require("express");

const app = express();

const PORT = 5000;
app.listen(PORT || 5000, (req, res) => {
  console.log("Server is up & running");
});
