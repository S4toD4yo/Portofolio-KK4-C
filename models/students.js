const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Input Student ID"],
    unique: true,
  },

  name: {
    type: String,
    required: [true, "Input Name"],
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Input Email"],
  },

  dob: {
    type: String,
    required: [true, "Input Date of Birth"],
  },

  address: {
    type: String,
    required: [true, "Input Home Address"],
  },
});

module.exports = mongoose.model("student", studentSchema);

//サトのプログラッム
