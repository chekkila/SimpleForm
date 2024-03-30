const mongoose = require("mongoose");
const{departmentSchema} = require("./department");
const{teamSchema} = require("./team");
const employee = mongoose.model("Employee",new mongoose.Schema({
    id:Number,
    firstname:String,
    lastname:String,
    dateofbirt:datetime,
    joiningdate:datetime,
    Adress:String,
    state:String,
    Department:departmentSchema,
    Departmentid:number,
    Team:teamSchema,
    Teamid:number,
}))

exports.Employee = employee;