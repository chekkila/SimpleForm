const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  id: Number,
  name: String
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = { Skill, skillSchema };
