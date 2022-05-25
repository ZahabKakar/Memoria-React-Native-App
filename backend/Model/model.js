const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
  name: {
    type: String,
    max: 20,
    min: 6,
    required: true,
  },
  email: {
    type: String,
    max: 50,
    min: 6,
    required: true,
  },
  password: {
    type: String,
    max: 50,
    min: 6,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("AuthData", userSchema);
