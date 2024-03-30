const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  id: Number,
  name: String
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = { Department, departmentSchema };
