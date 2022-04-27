const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    Min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Api = new Mongoose.Schema({
  title: {
    type: String,
    max: 100,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Mongoose.model("AuthData", userSchema);
module.exports = Mongoose.model("PostData", Api);
