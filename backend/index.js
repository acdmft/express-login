const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.json({message: "User created"});
});

app.listen(8001, () => console.log("Listen 8001..."));