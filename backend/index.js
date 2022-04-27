const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
var https = require("https");

const auth = require("../backend/Router/Auth/Auth");
const mongoose = require("mongoose");
const api = require("../backend/Router/Api/api");
//connect db

const options = {
  key: fs.readFileSync("./localhost-key.pem"),
  cert: fs.readFileSync("./localhost.pem"),
};

mongoose.connect(
  "mongodb+srv://test:test@cluster0.gahvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("connected db");
  }
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", auth);
app.use("/post", api);

const server = https.createServer(options, app).listen(port, () => {
  console.log("server running at " + port);
});
