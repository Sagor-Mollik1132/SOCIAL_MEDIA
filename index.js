const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
