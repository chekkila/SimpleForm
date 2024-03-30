const { EmployeeSkill} = require("./models/Employeeskills");
const { EmployeeProject } = require("./models/Employeeproject");
const mongoose = require("mongoose");

const employeeSkill = [
  { name: ".net" },
  { name: "java" },
  { name: "node" }
];

const employeeProjects = [
  { name: ".net 1" },
  { name: "java 1" },
  { name: "node 1" }
];

async function seed() {
  await mongoose.connect("mongodb://localhost:27017/form");

  await EmployeeProject.deleteMany({});
  await EmployeeSkill.deleteMany({});

  for (let skill of employeeSkill) {
   await new EmployeeSkill(skill).save();
  }
  for (let project of employeeProjects) {
   await new EmployeeProject(project).save();
  }

  await mongoose.disconnect();

  console.log("Done!");
}

seed();
