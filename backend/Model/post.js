const Mongoose = require("mongoose");

const postSchema = new Mongoose.Schema({
  title: {
    type: String,
    max: 100,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("PostSchema", postSchema);
// date: {
//   type: String,
//   required: false,
// },
