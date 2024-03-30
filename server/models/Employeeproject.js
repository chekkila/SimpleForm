 var mongoose=require("mongoose");

 const EmployeeProject =mongoose.model("EmployeeProject",new mongoose.Schema({
    employeeId:Number,
    employeeName:String,
    projectId:Number,
    projetName:String,
 }));
  module.exports={EmployeeProject};