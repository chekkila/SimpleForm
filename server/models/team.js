const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  id: Number,
  name: String
});

const Team = mongoose.model("Team", teamSchema);

module.exports = { Team, teamSchema };
