const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: Number,
  name: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project, projectSchema };
