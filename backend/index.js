require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server Up`);
});
app.get("/", (req, res) => {
  res.status(200).send("Heath Check OK!");
});
