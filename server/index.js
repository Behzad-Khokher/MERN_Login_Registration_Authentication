const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => {
  console.log("Server Running");
});
