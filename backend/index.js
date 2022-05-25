const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const ngrok = require("ngrok");
const mongoose = require("mongoose");
//connect db

mongoose.connect("MongooDB", { useNewUrlParser: true }, () => {
  console.log("connected db");
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/api", auth);
// app.use("/post", api);
require("./routes/routes")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

ngrok.connect(
  {
    proto: "http",
    addr: port,
  },
  (err, url) => {
    if (err) {
      console.error("Error while connecting Ngrok", err);
      return new Error("Ngrok Failed");
    }
  }
);
